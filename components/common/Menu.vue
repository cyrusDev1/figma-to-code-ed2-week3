<template>
  <div class="mt-8">
    <div class="">
      <h3 class="text-dark-gray text-sm font-medium">Menu</h3>
      <div class="mt-5">
        <ul class="">
          <li v-for="link in links" class="flex justify-between">
            <Link
              :class="{ 'bg-blue text-white': link.active }"
              class="transform transition transition-duration-500 w-full hover:translate-x-1 flex justify-between group py-3 text-xs font-semibold px-2"
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

const links = ref([
  { text: 'Dashboard', icon: 'lucide:home', to: '/', active: true },
  { text: 'News', icon: 'uil:newspaper', to: '/news', active: false },
  { text: 'Activities', icon: 'ri:bar-chart-line', to: '/', active: false },
  { text: 'Cards', icon: 'lucide:credit-card', to: '/', active: false },
  {
    text: 'Reports',
    icon: 'tabler:clipboard-list',
    to: '/',
    active: false,
    sub: true,
  },
  { text: 'Notifications', icon: 'ph:bell-bold', to: '/', active: false },
  { text: 'Billing', icon: 'hugeicons:wallet-02', to: '/', active: false },
  { text: 'Invoices', icon: 'hugeicons:invoice-01', to: '/', active: false },
  { text: 'Help Center', icon: 'iconamoon:headphone', to: '/', active: false },
  { text: 'Settings', icon: 'ic:outline-settings', to: '/', active: false },
]);
</script>

<style></style>
