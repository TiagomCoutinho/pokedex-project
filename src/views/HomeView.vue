<script setup lang="ts">
import Logo from '@/components/pages/index/Logo.vue'
import Bottom from '@/components/pages/index/Bottom.vue'
</script>

<template>
  <main class="home-view">
    <header class="home-view__header">
      <Logo/>
    </header>
    <footer class="home-view__footer">
      <Bottom/>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
.home-view {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  &__header {
    margin-bottom: 80px;
  }
}
</style>