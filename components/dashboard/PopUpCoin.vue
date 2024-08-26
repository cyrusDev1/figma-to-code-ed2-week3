<template>
  <div
    class="fixed h-full w-1/3 top-0 right-0 bg-white rounded-xl dark:bg-dark-blue-1"
  >
    <div class="p-5 space-y-7">
      <div class="flex justify-between items-center">
        <h2
          class="text-dark text-base flex justify-center items-center font-bold dark:text-white"
        >
          {{ market.name }}
        </h2>
        <div
          @click="closePopup"
          class="bg-light-gray cursor-pointer rounded px-2 pt-1 dark:bg-dark-blue-2"
        >
          <Icon
            class="text-3xl text-dark dark:text-light-gray"
            name="ic:outline-close"
          />
        </div>
      </div>
      <div>
        <img src="~/assets/img/line-chart.png" />
      </div>
      <div class="space-y-6">
        <div
          class="flex justify-between items-center text-sm font-semibold text-dark"
        >
          <h3 class="flex space-x-1 items-center">
            <img class="size-6 object-cover" :src="market.image" alt="" />
            <span class="dark:text-light-gray">{{ market.name }}</span>
          </h3>
          <h3 class="dark:text-light-gray">$82222</h3>
        </div>
        <div class="space-y-1">
          <div class="flex justify-between items-center">
            <h4 class="font-medium text-dark text-sm dark:text-light-gray">
              Crypto Market Rank
            </h4>
            <h4
              class="px-2 py-1 text-xs rounded-full bg-light-gray cursor-pointer dark:bg-opacity-15 dark:text-light-gray"
            >
              Rank #{{ market.market_cap_rank }}
            </h4>
          </div>
          <div class="flex justify-between items-center">
            <h4 class="font-medium text-dark text-sm dark:text-light-gray">
              Market cap
            </h4>
            <h4 class="font-medium text-dark-gray text-sm dark:text-gray">
              ${{ market.market_cap }}
            </h4>
          </div>
          <div class="flex justify-between items-center">
            <h4 class="font-medium text-dark text-sm dark:text-light-gray">
              Circulating supply
            </h4>
            <h4 class="font-medium text-dark-gray text-sm dark:text-gray">
              ${{ market.total_supply }}
            </h4>
          </div>
          <div class="flex justify-between items-center">
            <h4 class="font-medium text-dark text-sm dark:text-light-gray">
              24 Hour High
            </h4>
            <h4 class="font-medium text-dark-gray text-sm dark:text-gray">
              ${{ market.low_24h }}
            </h4>
          </div>
          <div class="flex justify-between items-center">
            <h4 class="font-medium text-dark text-sm dark:text-light-gray">
              24 Hour Low
            </h4>
            <h4 class="font-medium text-dark-gray text-sm dark:text-gray">
              ${{ market.high_24h }}
            </h4>
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <h5 class="font-medium text-dark text-sm dark:text-light-gray">
          Description
        </h5>
        <p class="text-dark-gray text-xs dark:text-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>
      </div>
      <div>
        <Link
          class="bg-blue bg-opacity-5 text-blue font-medium text-sm border border-white w-full py-2 flex items-center space-x-1 justify-center border-opacity-15"
          to="/"
        >
          <Icon class="text-3xl" name="material-symbols-light:star-outline" />
          <span>Add fo favorite</span>
        </Link>
      </div>
    </div>
  </div>
</template>
<script setup>
import Link from '~/components/ui/Link';

const props = defineProps({
  market: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(['close']);

const closePopup = () => {
  emit('close', props.market);
};
</script>
