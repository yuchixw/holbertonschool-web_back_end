#!/usr/bin/env python3
"""Module contains function that takes a float multiplier
    as argument and returns a function that multiplies a float by multiplier.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Function takes a float multiplier as argument and
    returns a function that multiplies a float by multiplier.



    Args:
        multiplier (float): float to be multiplied

    Returns:
        Callable[[float], float]: Function that multiplies
        multiplier with other float
    """
    def multiply_multiplier(f: float) -> float:
        """Function Multiplies multiplier with float

        Args:
            f (float): float to multiply multiplier with
            multiplier (_type_): float to be multiplied with other float

        Returns:
            float: returned product
        """
        return f * multiplier
    return multiply_multiplier
