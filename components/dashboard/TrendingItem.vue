<template>
  <div
    class="rounded-xl p-3 border border-light-gray space-y-2 dark:border-opacity-15"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-1">
        <img class="size-8" :src="trending.thumb" />
        <div class="flex flex-col">
          <span class="font-bold text-xs text-dark-gray dark:text-white">{{
            trending.name
          }}</span>
          <span
            class="font-bold text-xxs opacity-60 text-dark-gray dark:text-gray"
            >{{ trending.symbol }}</span
          >
        </div>
      </div>
      <div>
        <TrendPercentage
          class="dark:text-white"
          :value="trending.data.price_change_percentage_24h.btc"
          :showArrow="true"
        ></TrendPercentage>
      </div>
    </div>
    <div class="flex flex-col">
      <span class="font-bold text-xs text-dark-gray dark:text-light-gray"
        >114.76 {{ trending.symbol }}</span
      >
      <span class="font-medium text-xxs text-dark-gray dark:text-gray"
        >${{ trending.data.price }}</span
      >
    </div>
  </div>
</template>
<script setup>
import TrendPercentage from '~/components/ui/TrendPercentage';
import { computed, defineProps } from 'vue';

const props = defineProps({
  trending: {
    type: Array,
    required: true,
  },
});
</script>
