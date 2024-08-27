<template>
  <tr class="border-t border-gray dark:border-opacity-15">
    <td class="py-4 px-6 flex items-center">
      <Icon
        @click="toggleFavorite(market.name)"
        :class="[
          'text-3xl cursor-pointer dark:text-light-gray',
          isFavorite(market.name) ? 'bg-yellow' : '',
        ]"
        :name="
          isFavorite(market.name)
            ? 'material-symbols-light:star'
            : 'material-symbols-light:star-outline'
        "
      />
    </td>
    <td class="py-4 px-6 text-dark font-medium text-sm dark:text-white">
      {{ market.market_cap_rank }}
    </td>
    <td
      @click="openCoin"
      class="py-4 px-6 text-nowrap text-dark font-medium flex items-center space-x-1 text-sm dark:text-white cursor-pointer"
    >
      <img class="size-6 object-cover" :src="market.image" alt="" />
      <span>{{ market.name }}</span>
    </td>
    <td class="py-4 px-6 text-dark font-medium text-sm dark:text-white">
      {{ formatDollarAmount(market.current_price) }}
    </td>
    <td class="py-4 px-6 text-dark font-medium text-sm dark:text-white">
      <TrendPercentage
        :value="market.price_change_percentage_24h"
        :showArrow="false"
      />
    </td>
    <td class="py-4 px-6 text-dark font-medium text-sm dark:text-white">
      {{ formatDollarAmount(market.total_volume) }}
    </td>
    <td class="py-4 px-6 text-dark font-medium text-sm dark:text-white">
      {{ formatDollarAmount(market.market_cap) }}
    </td>
    <td class="py-4 px-6 text-dark font-medium text-sm dark:text-white">
      <img
        v-if="market.price_change_percentage_24h < 0"
        src="~/assets/img/sparkline-red.svg"
        alt=""
      />
      <img v-else src="~/assets/img/sparkline-green.svg" alt="" />
    </td>
  </tr>
</template>

<script setup>
import { ref } from 'vue';
import TrendPercentage from '../ui/TrendPercentage.vue';
import { formatDollarAmount } from '~/utils/format.js';

const favorites = ref([]);

const props = defineProps({
  market: {
    type: Object,
    required: true,
  },
});

const loadFavorites = () => {
  const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.value = savedFavorites;
};

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
};

const isFavorite = (coin) => {
  return favorites.value.includes(coin);
};

const toggleFavorite = (coin) => {
  saveFavorites();
  if (isFavorite(coin)) {
    favorites.value = favorites.value.filter((item) => item !== coin);
  } else {
    favorites.value.push(coin);
  }
};
const emit = defineEmits(['coinView']);

const openCoin = () => {
  emit('coinView', props.market);
};
onMounted(() => {
  loadFavorites();
});
</script>
