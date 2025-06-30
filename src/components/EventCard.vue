<template>
  <div>
    <div class="font-semibold">{{ event.summary }}</div>
    <div class="text-sm text-gray-600">
      {{ formatDate(event.start) }} – {{ formatDate(event.end) }}
    </div>
    <div class="text-sm">{{ event.location }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})

function formatDate(date) {
  return date.toLocaleString('es-CO', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}
</script>
