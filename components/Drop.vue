<template>
  <div
    class="rounded-xl border border-light-gray space-y-2 p-2 dark:border-opacity-15"
  >
    <div class="flex space-x-2">
      <img
        src="~/assets/img/drop-avatar.svg"
        class="cursor-pointer block size-8 rounded-full bg-blue"
      />
      <div class="flex flex-col">
        <span class="text-dark font-semibold text-xs dark:text-white">{{
          post.author
        }}</span>
        <span class="text-dark-gray text-xs dark:text-light-gray"
          >{{ post.source.name }} - {{ timeAgo(post.publishedAt) }}</span
        >
      </div>
    </div>
    <div>
      <Link class="block" :to="post.url" target="_blank">
        <img
          :src="post.urlToImage"
          class="cursor-pointer object-cover border border-light-gray w-full h-48 rounded-lg dark:border-opacity-15"
        />
      </Link>
    </div>

    <div class="space-y-2">
      <h4
        class="text-dark font-semibold text-xs italic cursor-pointer dark:text-gray"
      >
        {{ post.title }}
      </h4>
      <p class="text-dark-gray font-medium text-xs dark:text-white">
        {{ post.description }}
      </p>
      <div class="flex space-x-2">
        <div
          class="cursor-pointer font-medium space-x-1 text-dark text-sm flex items-center dark:text-gray"
        >
          <Icon class="text-lg font-medium" name="iconamoon:heart-light"></Icon>
          <span>5</span>
        </div>
        <div
          class="cursor-pointer font-medium space-x-1 text-dark text-sm flex items-center dark:text-gray"
        >
          <Icon
            class="text-lg font-medium"
            name="lets-icons:comment-light"
          ></Icon>
          <span>5</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, defineProps } from 'vue';
import Link from './ui/Link.vue';
const props = defineProps({
  post: {
    type: Array,
    required: true,
  },
});
const timeAgo = (dateString) => {
  const now = new Date();
  const pastDate = new Date(dateString);
  const seconds = Math.floor((now - pastDate) / 1000);

  const interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval} years ago`;

  const months = Math.floor(seconds / 2592000);
  if (months > 1) return `${months} months ago`;

  const days = Math.floor(seconds / 86400);
  if (days > 1) return `${days} days ago`;

  const hours = Math.floor(seconds / 3600);
  if (hours > 1) return `${hours} hours ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes > 1) return `${minutes} minutes ago`;

  return `${Math.floor(seconds)} seconds ago`;
};
</script>
