<template>
  <div class="py-3 px-5 border-b border-light-gray dark:border-opacity-15">
    <div class="flex space-x-1 justify-between items-center">
      <div class="flex items-center">
        <div
          @click="openMenu"
          class="md:mr-8 flex xl:hidden cursor-pointer border border-gray dark:border-opacity-15 p-2 items-center justify-center rounded-xl"
        >
          <Icon class="text-3xl text-dark-gray" name="uil:bars"></Icon>
        </div>
        <div class="md:mr-8">
          <h3 class="text-black font-semibold text-sm dark:text-gray">
            Dashboard
          </h3>
          <p class="text-dark-gray text-xs dark:text-gray">
            Welcome back, Jonh Doe
          </p>
        </div>
        <div class="hidden xl:block">
          <Link
            to="/"
            class="text-white bg-blue py-2 px-5 flex space-x-2 text-sm font-medium items-center"
          >
            <Icon class="text-xl" name="hugeicons:wallet-add-01"></Icon>
            <span>Connect wallet</span>
          </Link>
        </div>
      </div>
      <div class="flex space-x-3">
        <div class="hidden sm:block relative">
          <div
            @click="toggleDropdown"
            class="rounded-xl text-dark-gray flex items-center space-x-1 border border-gray py-2 px-5 cursor-pointer dark:text-gray dark:border-opacity-15"
          >
            <span>USD</span>
            <Icon class="text-xl" name="system-uicons:chevron-open"></Icon>
          </div>
          <div
            v-if="isDropdownVisible"
            ref="dropdown"
            class="absolute mt-1 z-40 border border-gray rounded-xl px-5 w-full bg-white dark:bg-dark-blue-1 dark:text-light-gray dark:border-opacity-15"
          >
            <ul>
              <li
                v-for="i in 4"
                :key="i"
                class="cursor-pointer text-dark-gray dark:text-light-gray py-1"
              >
                OPT
              </li>
            </ul>
          </div>
        </div>
        <ToogleDarkMode></ToogleDarkMode>
      </div>
    </div>
  </div>
</template>

<script setup>
import Link from '~/components/ui/Link';
import ToogleDarkMode from '~/components/ui/ToogleDarkMode';
import { useDropdown } from '~/composables/useDropdown';

const emit = defineEmits(['open']);

const { isDropdownVisible, toggleDropdown } = useDropdown();

const openMenu = () => {
  emit('open');
};
</script>
