#!/usr/bin/env python3
"""API Basic Flask app with Babel, locale selection, and user login simulation."""

from flask import Flask, render_template, request, g
from flask_babel import Babel
import pytz
from pytz.exceptions import UnknownTimeZoneError
from typing import Dict, Optional


class Config:
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


def get_user() -> Optional[Dict]:
    try:
        user_id = int(request.args.get("login_as", ""))
        return users.get(user_id)
    except (TypeError, ValueError):
        return None


def get_locale() -> Optional[str]:
    locale_param = request.args.get("locale")
    if locale_param in app.config["LANGUAGES"]:
        return locale_param
    if g.user and g.user.get("locale") in app.config["LANGUAGES"]:
        return g.user["locale"]
    return request.accept_languages.best_match(app.config["LANGUAGES"])


def get_timezone() -> str:
    timezone_param = request.args.get("timezone")
    if timezone_param:
        try:
            return str(pytz.timezone(timezone_param))
        except UnknownTimeZoneError:
            pass
    if g.user:
        user_timezone = g.user.get("timezone")
        if user_timezone:
            try:
                return str(pytz.timezone(user_timezone))
            except UnknownTimeZoneError:
                pass
    return app.config["BABEL_DEFAULT_TIMEZONE"]


@app.before_request
def before_request() -> None:
    g.user = get_user()


babel = Babel(app, locale_selector=get_locale, timezone_selector=get_timezone)


@app.route("/")
def index() -> str:
    return render_template("7-index.html")


if __name__ == "__main__":
    app.run()
