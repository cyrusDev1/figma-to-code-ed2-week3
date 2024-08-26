<template>
  <span
    class="cursor-pointer flex items-center justify-center space-x-1 bg-opacity-15 rounded-full font-semibold text-xxs py-1 px-2"
    :class="percentageClass"
  >
    <span>{{ formattedPercentage }}</span>
    <span v-if="showArrow && value">
      <Icon
        class="text-xs"
        v-if="value > 0"
        name="material-symbols:trending-up-rounded"
      ></Icon>
      <Icon
        class="text-xs"
        v-else
        name="material-symbols:trending-down-rounded"
      ></Icon>
    </span>
  </span>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  showArrow: {
    type: Boolean,
    default: false,
  },
});

const percentageClass = computed(() => {
  return props.value >= 0 ? 'text-green bg-green' : 'text-red bg-red';
});

const formattedPercentage = computed(() => {
  return `${props.value.toFixed(2)}%`;
});
</script>

<style scoped></style>
