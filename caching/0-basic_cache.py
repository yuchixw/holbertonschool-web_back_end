#!/usr/bin/python3
"""
BasicCache module
"""
BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """
    BasicCache class represents a simple caching
    __init__(): Initializes the BasicCache object.
    put: Adds an item to the cache.
    get: Retrieves an item from the cache based on the key.
    """

    def __init__(self):
        """
        Initialize the BasicCache.
        """
        super().__init__()

    def put(self, key, item):
        """Stores an item in the cache.
        """
        if key is not None and item is not None:
            self.cache_data[key] = item

    def get(self, key):
        """Retrieves an item from the cache.
        """
        if key is None:
            return None
        else:
            return self.cache_data.get(key)
