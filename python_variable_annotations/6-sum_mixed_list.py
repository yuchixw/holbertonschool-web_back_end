#!/usr/bin/env python3
"""Module contains function that returns sum of list elements
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Function returns sum of list elements

    Args:
        mxd_lst (List[Union[int, float]]): list with different element types

    Returns:
        float: sum of elements
    """
    total = 0.0
    for lmnt in mxd_lst:
        total += lmnt
    return total
