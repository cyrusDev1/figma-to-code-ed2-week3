<template>
  <div class="mt-8">
    <div class="">
      <h3 class="text-dark-gray text-sm font-medium dark:text-light-gray">
        Menu
      </h3>
      <div class="mt-5">
        <ul class="">
          <li
            v-for="link in links"
            class="flex justify-between dark:text-light-gray"
          >
            <Link
              :class="linkClasses(link)"
              class="transform transition transition-duration-500 w-full hover:translate-x-1 flex justify-between group py-3 text-xs font-medium px-2"
              :to="link.to"
            >
              <div class="flex items-center space-x-2">
                <Icon class="text-lg" :name="link.icon"></Icon>
                <span>{{ link.text }}</span>
              </div>
              <Icon
                v-if="link.sub"
                class="text-lg"
                name="mdi:chevron-down"
              ></Icon>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import Link from '~/components/ui/Link';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();

const links = ref([
  { text: 'Dashboard', icon: 'lucide:home', to: '/' },
  { text: 'News', icon: 'uil:newspaper', to: '/news' },
  { text: 'Activities', icon: 'ri:bar-chart-line', to: '#' },
  { text: 'Cards', icon: 'lucide:credit-card', to: '#' },
  {
    text: 'Reports',
    icon: 'tabler:clipboard-list',
    to: '#',
    sub: true,
  },
  { text: 'Notifications', icon: 'ph:bell-bold', to: '#' },
  { text: 'Billing', icon: 'hugeicons:wallet-02', to: '#' },
  { text: 'Invoices', icon: 'hugeicons:invoice-01', to: '#' },
  { text: 'Help Center', icon: 'iconamoon:headphone', to: '#' },
  { text: 'Settings', icon: 'ic:outline-settings', to: '#' },
]);

const linkClasses = (link) => {
  return {
    'bg-blue text-white font-semibold': link.to === route.path,
  };
};
</script>

<style></style>
