<template>
  <div class="px-6 py-3 border-b border-gray">
    <div class="flex justify-between">
      <div class="flex space-x-8">
        <div>
          <h3 class="text-black font-semibold text-sm">Dashboard</h3>
          <p class="text-dark-gray text-xs">Welcome back, Jonh Doe</p>
        </div>
        <div>
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
        <div class="relative">
          <div
            @click="toggleDropdown"
            class="rounded-xl text-dark-gray flex items-center space-x-1 border border-gray py-2 px-5 cursor-pointer"
          >
            <span>USD</span>
            <Icon class="text-xl" name="system-uicons:chevron-open"></Icon>
          </div>
          <div
            v-if="isDropdownVisible"
            class="absolute mt-1 border border-gray rounded-xl px-5 w-full bg-white"
          >
            <ul>
              <li v-for="i in 4" class="cursor-pointer text-dark-gray py-1">
                OPT
              </li>
            </ul>
          </div>
        </div>

        <div
          class="rounded-xl text-dark-gray flex items-center border border-gray p-2 cursor-pointer"
        >
          <Icon class="text-xl" name="ph:moon"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Link from '~/components/ui/Link';
import { useDropdown } from '~/composables/useDropdown';

const { isDropdownVisible, toggleDropdown } = useDropdown();
</script>
