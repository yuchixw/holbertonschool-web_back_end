#!/usr/bin/env python3
"""Module contains function async generator

Imports:
    asyncio: asyncio module
    random: random module
"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Function yields certain value between 0 and 10

    Yields:
        _type_: Value between 0 and 10
    """
    i = 0
    while i < 10:
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
        i += 1
