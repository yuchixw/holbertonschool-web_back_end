#!/usr/bin/env python3
"""Script contains auth template class
"""
from flask import request
from typing import List


class Auth:
    """Class is a template of the auth system
    """

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """
        Method checks if endpoint requires auth
        """
        slashed_path = f'{path}/'
        if path == None:
            return True
        if excluded_paths == None or len(excluded_paths) == 0:
            return True
        if path in excluded_paths or slashed_path in excluded_paths:
            return False
        else:
            return True

    def authorization_header(self, request=None) -> str:
        """
        Authorization header public method
        """
        if request is None:
            return None
        if 'Authorization' in request.headers:
            return request.headers.get("Authorization", None)
        return None

    def current_user(self, request=None) -> None:
        """
        Current user public method
        """
        return None
