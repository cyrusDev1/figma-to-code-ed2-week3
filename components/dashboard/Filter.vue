<template>
  <div class="flex justify-between">
    <div
      class="border border-gray rounded-xl py-3 px-5 flex items-center space-x-2 dark:border-opacity-15"
    >
      <Icon class="size-5 text-dark-gray" name="iconamoon:search-light"></Icon>
      <input
        type="text"
        class="outline-none placeholder:text-dark-gray placeholder:text-sm dark:bg-dark-blue-1 dark:text-white"
        placeholder="Search crypto"
      />
    </div>
    <div class="w-60 relative">
      <div
        @click="toggleDropdown"
        class="cursor-pointer border border-gray rounded-xl py-3 px-5 flex items-center justify-between dark:border-opacity-15"
      >
        <span type="text" class="text-dark-gray text-sm">Categories</span>
        <Icon class="size-5 text-dark-gray" name="mdi:chevron-down"></Icon>
      </div>
      <div
        v-if="isDropdownVisible"
        ref="dropdown"
        class="absolute w-60 mt-1 z-40 border border-gray rounded-xl px-5 bg-white dark:border-opacity-15 dark:bg-dark-blue-1"
      >
        <ul>
          <li
            v-for="category in categories"
            class="cursor-pointer text-dark-gray py-1"
          >
            {{ category.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useDropdown } from '~/composables/useDropdown';
import { useCoingeckoAPI } from '~/composables/useCoingeckoApi';

const { fetchCategories } = useCoingeckoAPI();

const { isDropdownVisible, toggleDropdown } = useDropdown();
const categories = ref(null);

const data = await fetchCategories();
if (data) {
  categories.value = data.splice(0, 5);
}
</script>
