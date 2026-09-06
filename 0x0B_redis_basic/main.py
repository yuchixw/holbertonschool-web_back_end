#!/usr/bin/env python3
from exercise import replay
""" Main file """

Cache = __import__('exercise').Cache

cache = Cache()
cache.store("foo")
cache.store("bar")
cache.store(42)
replay(cache.store)
