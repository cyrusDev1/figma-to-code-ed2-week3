<template>
  <div v-if="posts" class="p-5 space-y-9">
    <h2 class="text-dark font-semibold text-base dark:text-light-gray">
      Latest crypto news
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
      <Drop
        v-for="(post, index) in posts.slice(0, currentIndex)"
        :key="index"
        :post="post"
      ></Drop>
    </div>
    <div class="flex justify-center">
      <button
        v-if="currentIndex < posts.length"
        @click="loadMore"
        type="button"
        class="cursor-pointer border border-gray rounded-full flex items-center space-x-2 py-3 px-4 bg-light-gray text-black dark:bg-dark-blue-2 dark:border-opacity-20 dark:text-light-gray"
      >
        <span class="font-medium text-sm">Load more</span>
        <Icon class="text-2xl" name="mdi:arrow-down"></Icon>
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

import { useNewsAPI } from '~/composables/useNewsApi';

import Drop from '~/components/Drop';
import Link from '~/components/ui/Link';

const posts = ref(null);
const { fetchLatestCryptoNews } = useNewsAPI();
const currentIndex = ref(8);

onMounted(async () => {
  const data = await fetchLatestCryptoNews();
  if (data) {
    posts.value = data;
  }
});
const loadMore = () => {
  currentIndex.value += 4;
};
</script>
