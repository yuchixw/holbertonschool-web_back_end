#!/usr/bin/env python3
"""Script contains flask app"""
from flask import Flask, jsonify, request, make_response, abort, redirect
from sqlalchemy.orm.exc import NoResultFound
from auth import Auth


AUTH = Auth()
app = Flask(__name__)


@app.route("/")
def payload():
    """Function returns payload"""
    return jsonify({"message": "Bienvenue"})


@app.route("/users", methods=['POST'])
def users():
    """Function registers new user to db"""
    email = request.form.get("email")
    password = request.form.get("password")

    try:
        user = AUTH.register_user(email, password)
        return jsonify({"email": f"{user.email}", "message": "user created"})
    except ValueError:
        return jsonify({"message": "email already registered"})


@app.route("/sessions", methods=['POST'])
def login():
    """Function creates, session_id, logs in, returns cookies"""
    email = request.form.get("email")
    password = request.form.get("password")
    is_valid = AUTH.valid_login(email, password)
    if is_valid:
        session_id = AUTH.create_session(email)

        response = make_response(
            jsonify({"email": f"{email}", "message": "logged in"}))
        response.set_cookie("session_id", session_id)

        return response
    else:
        abort(401)


@app.route("/sessions", methods=['DELETE'])
def logout():
    """Function finds user by session_id and then kills session"""
    try:
        session_id = request.cookies.get("session_id")
        user = AUTH.get_user_from_session_id(session_id)
        session = AUTH.destroy_session(user.id)
        if session is None:
            return redirect("/")
    except (NoResultFound, AttributeError):
        abort(403)


@app.route("/profile")
def profile():
    """Function returns user email"""
    try:
        session_id = request.cookies.get("session_id")
        user = AUTH.get_user_from_session_id(session_id)
        response = make_response(jsonify({"email": f"{user.email}"}), 200)
        return response
    except (NoResultFound, AttributeError):
        abort(403)


@app.route("/reset_password", methods=['POST'])
def get_reset_password_token():
    """Function generates a reset password token"""
    try:
        email = request.form.get("email")
        token = AUTH.get_reset_password_token(email)
        response = make_response(
            jsonify({"email": f"{email}", "reset_token": f"{token}"}), 200)
        return response
    except ValueError:
        abort(403)


@app.route("/reset_password", methods=['PUT'])
def update_password():
    """Function updates password"""
    try:
        email = request.form.get("email")
        reset_token = request.form.get("reset_token")
        new_password = request.form.get("new_password")
        AUTH.update_password(reset_token, new_password)
        response = make_response(
            jsonify({"email": f"{email}", "message": "Password updated"}), 200)
        return response
    except ValueError:
        abort(403)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000", debug=True)
