<template>
  <div
    class="py-7 px-4 border-r flex flex-col border-gray dark:border-opacity-15"
  >
    <div class="flex-1">
      <div>
        <Logo></Logo>
      </div>
      <div>
        <Menu></Menu>
      </div>
    </div>
    <div class="mt-auto">
      <User></User>
    </div>
  </div>
</template>
<script setup>
import Logo from '~/components/common/Logo';
import Menu from '~/components/common/Menu';
import User from '~/components/common/User';
</script>
