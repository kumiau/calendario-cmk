<script setup lang="ts">
  import PWABadge from './components/PWABadge.vue'
  import ICalendarReader from './components/ICalendarReader.vue'
</script>

<template>
  <main class="max-w-2xl mx-auto">
    <div>
      <h1>
        <a href="https://meditacionencolombia.org" target="_blank">
          <img src="/LogoColor.png" class="w-full" alt="calendario-cmk logo" />
        </a>
      </h1>
    </div>
    <ICalendarReader />
  </main>
  <PWABadge />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
