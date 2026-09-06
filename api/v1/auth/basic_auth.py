#!/usr/bin/env python3
"""Script contains Basic Auth Class that inherits auth class
"""
from api.v1.auth.auth import Auth
import base64
from typing import TypeVar
from models.user import User


class BasicAuth(Auth):
    """
    This is a basic auth class. Uses basic auth
    to authenticate requests
    """

    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """
        Method checks if authorization header has correct format
        """
        if authorization_header is None:
            return None
        if not isinstance(authorization_header, str):
            return None
        if not authorization_header.startswith("Basic "):
            return None
        split_header = authorization_header.split()
        return split_header[1]

    def decode_base64_authorization_header(self,
                                           base64_authorization_header: str
                                           ) -> str:
        """
        Method decodes authorization credentials
        """
        if base64_authorization_header is None:
            return None
        if not isinstance(base64_authorization_header, str):
            return None
        try:
            decoded_str = base64.b64decode(base64_authorization_header)
            return decoded_str.decode("utf-8")
        except Exception:
            return None

    def extract_user_credentials(self,
                                 decoded_base64_authorization_header: str
                                 ) -> (str, str):
        """
        Method extracts creds from decoded string
        """
        if (decoded_base64_authorization_header is None
            or not isinstance(decoded_base64_authorization_header, str)
                or ":" not in decoded_base64_authorization_header):
            return (None, None)
        colon_rm_creds = decoded_base64_authorization_header.replace(":", " ")
        split_creds = colon_rm_creds.split()
        return (split_creds[0], split_creds[1])

    def user_object_from_credentials(self,
                                     user_email: str,
                                     user_pwd: str
                                     ) -> TypeVar('User'):
        """
        Method returns a user instance based on the credentials
        """
        if user_email is None or not isinstance(user_email, str):
            return None
        if user_pwd is None or not isinstance(user_pwd, str):
            return None
        try:
            users = User.search({"email": user_email})
        except Exception:
            return None
        if not users:
            return None
        user = users[0]
        if not user.is_valid_password(user_pwd):
            return None
        return user

    def current_user(self, request=None) -> TypeVar("User"):
        """
        Method retrieves the User instance for a request
        """
        auth_header = self.authorization_header(request)
        if not auth_header:
            return None

        base64_part = self.extract_base64_authorization_header(auth_header)
        if not base64_part:
            return None

        decoded_credentials = self.decode_base64_authorization_header(
            base64_part
        )
        if not decoded_credentials:
            return None

        user_email, user_pwd = self.extract_user_credentials(
            decoded_credentials
        )
        if not user_email or not user_pwd:
            return None

        user = self.user_object_from_credentials(user_email, user_pwd)
        return user
