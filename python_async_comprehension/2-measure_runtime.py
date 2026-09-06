#!/usr/bin/env python3
"""Module contains function that measures run time

Imports:
    asyncio: module for coroutines
    time: module contains time related methods
"""
import asyncio
import time
async_comp = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """Function measures run time of functions running in //

    Returns:
        float: run time
    """
    start = time.perf_counter()
    await asyncio.gather(async_comp(), async_comp(),
                         async_comp(), async_comp())
    end = time.perf_counter()

    return end - start
