<template>
  <div>
    <div class="font-semibold text-lg md:text-xl">
      {{ event.summary }}
    </div>

    <div
      class="text-sm text-gray-600"
    >
      {{ compact ? formatTime(event.start) : formatFull(event.start) }}
    </div>

    <div class="text-sm">
      {{ event.location }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})

function formatFull(date) {
  return date.toLocaleString('es-CO', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

function formatTime(date) {
  return date.toLocaleTimeString('es-CO', {
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>
