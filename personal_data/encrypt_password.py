#!/usr/bin/env python3
"""Script contains function that hashes password
"""

import bcrypt


def hash_password(password: str) -> bytes:
    """Function hashes password and returns it as a salted hash

    Args:
        password (str): The password that has beeen inserted by user

    Returns:
        bytes: The data type of the password after hashing
    """
    passwrd = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    return passwrd


def is_valid(hashed_password: bytes, password: str) -> bool:
    """Function checks if inserted password matches hashed password

    Args:
        hashed_password (bytes): Previously hashed password
        password (str): Password to check against hashed password

    Returns:
        bool: boolean returned, true if match else false
    """
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)
