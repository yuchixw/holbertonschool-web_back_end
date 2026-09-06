#!/usr/bin/env python3
"""Module contains function that returns tuple

Import:
    typing: contains Union and Tuple
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Function takes to args and returns them in tuple

    Args:
        k (str): string arg
        v (int): int OR float arg

    Returns:
        tuple[str, int]: _description_
    """
    return (k, v ** 2)
