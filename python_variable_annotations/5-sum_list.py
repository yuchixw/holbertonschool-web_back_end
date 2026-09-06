#!/usr/bin/env python3
"""Module contains function that returns sum of list items

Imports:
    typing: Module contains List annotation type
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Function sums up elements of a list

    Args:
        input_list (List[float]): list to be summed

    Returns:
        float: sum of elements
    """
    total = 0.0
    for f in input_list:
        total += f
    return total
