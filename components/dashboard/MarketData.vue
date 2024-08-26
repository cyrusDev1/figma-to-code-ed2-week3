<template>
  <div class="border border-gray rounded-xl dark:border-opacity-15">
    <div class="px-4 py-6 flex justify-between">
      <h3 class="text-dark font-semibold text-base dark:text-light-gray">
        Market
      </h3>
      <div
        class="border cursor-pointer flex items-center p-2 border-light-gray rounded-lg dark:border-opacity-15"
      >
        <Icon
          class="dark:text-light-gray"
          name="ph:dots-three-outline-vertical-fill"
        ></Icon>
      </div>
    </div>
    <div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr
              class="bg-light-gray text-dark font-medium dark:bg-opacity-10 dark:text-light-gray"
            >
              <td class="py-3 px-6"></td>
              <td class="py-3 px-6">#</td>
              <td class="py-3 px-6">Coins</td>
              <td class="py-3 px-6">Price</td>
              <td class="py-3 px-6">24h</td>
              <td class="py-3 px-6">24h Volume</td>
              <td class="py-3 px-6">Market Cap</td>
              <td class="py-3 px-6">Last 7 days</td>
            </tr>
          </thead>
          <tbody>
            <MarketDataItem
              v-for="market in marketData"
              :key="market.id"
              :market="market"
              @coinView="openPopup"
            ></MarketDataItem>
            <PopUpCoin
              v-if="activeMarket"
              :market="activeMarket"
              @close="activeMarket = null"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCoingeckoAPI } from '~/composables/useCoingeckoApi';
import MarketDataItem from '~/components/dashboard/MarketDataItem.vue';
import PopUpCoin from '~/components/dashboard/PopUpCoin';
const { fetchMarketData } = useCoingeckoAPI();
const activeMarket = ref(null);
const marketData = ref(null);

const data = await fetchMarketData();
if (data) {
  marketData.value = data.splice(0, 13);
}

const openPopup = (market) => {
  activeMarket.value = market;
};
</script>
