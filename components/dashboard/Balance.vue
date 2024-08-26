<template>
  <div class="p-3 border border-light-gray rounded-xl dark:border-opacity-15">
    <div class="space-y-2">
      <div class="flex justify-between items-end">
        <div class="space-y-2">
          <h2 class="text-lg font-semibold text-dark dark:text-gray">
            Balance
          </h2>
          <h2 class="text-lg font-bold text-dark dark:text-light-gray">
            $63,755,200
          </h2>
        </div>
        <div class="flex items-center space-x-2">
          <TrendPercentage :value="2.45" :showArrow="false"></TrendPercentage>
          <span class="text-dark-gray text-xs font-medium dark:text-gray"
            >vs last month</span
          >
        </div>
      </div>
      <div class="flex space-x-2">
        <Link
          to="/"
          class="py-2 px-8 flex space-x-2 items-center bg-blue bg-opacity-5"
        >
          <Icon class="text-blue text-2xl" name="mdi:arrow-top"></Icon>
          <span class="text-blue text-sm font-medium">Deposit</span>
        </Link>
        <Link
          to="/"
          class="py-2 px-8 flex space-x-2 items-center bg-blue bg-opacity-5"
        >
          <Icon class="text-blue text-2xl" name="mdi:arrow-down"></Icon>
          <span class="text-blue text-sm font-medium">Withdraw</span>
        </Link>
      </div>
    </div>
  </div>
</template>
<script setup>
import TrendPercentage from '~/components/ui/TrendPercentage';
import Link from '~/components/ui/Link';
</script>
