#!/usr/bin/env python3
"""Module contains function asyn_comprehension

Imports:
    typing: type annotation module
    asyncio: asycio module
"""
import typing
import asyncio
async_gen = __import__("0-async_generator").async_generator


async def async_comprehension() -> typing.List[float]:
    """Function returns list

    Returns:
        typing.List[float]: list
    """
    my_list = [f async for f in async_gen()]
    return my_list
