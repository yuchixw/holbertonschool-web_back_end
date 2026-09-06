#!/usr/bin/python3
"""LRU Caching Code
"""
from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """LRU caching system that inherits from BaseCaching.

    Implements(LRU) cache replacement policy.
    The least recently used entry is discarded.
    """

    def __init__(self):
        """Initialize the LRU cache."""
        super().__init__()

    def put(self, key, item):
        """Add an item to the cache.
        The least recently used item is removed.

        Args:
            key (str): The key associated with the item.
            item (any): The item to be stored.
        """
        if key is not None and item is not None:
            if len(self.cache_data) >= self.MAX_ITEMS:
                first_key = next(iter(self.cache_data))
                self.cache_data.pop(first_key)
                print(f"DISCARD: {first_key}")
            self.cache_data[key] = item

    def get(self, key):
        """Retrieve an item from the cache and mark it as recently used.

        Moves the accessed item to the end to indicate recent use.

        Args:
            key (str): The key of the item to retrieve.

        Returns:
            any: The item if found, otherwise None.
        """
        if key is None or key not in self.cache_data:
            return None
        value = self.cache_data.pop(key)
        self.cache_data[key] = value
        return value
