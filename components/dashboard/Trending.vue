<template>
  <div class="w-full space-y-5">
    <div class="flex justify-between">
      <h2 class="text-dark font-semibold text-base dark:text-light-gray">
        Trending
      </h2>
      <Link
        to="/"
        class="flex items-center text-dark-gray text-xxs dark:text-gray"
      >
        <span>View more</span>
        <Icon class="size-4" name="material-symbols:chevron-right"></Icon>
      </Link>
    </div>
    <div
      v-if="trendings"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
    >
      <TrendingItem
        v-for="trending in trendings.splice(0, 4)"
        :trending="trending.item"
      ></TrendingItem>
    </div>
  </div>
</template>
<script setup>
import TrendingItem from '~/components/dashboard/TrendingItem';
import Link from '~/components/ui/Link';
import { useCoingeckoAPI } from '~/composables/useCoingeckoApi';

const trendings = ref(null);
const { fetchTrending } = useCoingeckoAPI();

onMounted(async () => {
  const data = await fetchTrending();
  if (data) {
    trendings.value = data.coins;
  }
});
</script>
