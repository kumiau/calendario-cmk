<template>
  <div class="p-4">
    <div v-if="todayEvents.length" class="mb-6">
      <h2 class="text-xl font-bold mb-2">Eventos de hoy</h2>
      <ul class="space-y-3 list-none p-0">
        <li
          v-for="(event, index) in todayEvents"
          :key="'today-' + index"
          class="p-4 rounded bg-emerald-200 dark:bg-emerald-700 shadow-lg"
        >
          <EventCard :event="event" compact />
        </li>
      </ul>
    </div>

    <div v-if="futureEvents.length">
      <h2 class="text-xl font-bold mb-2">Eventos futuros</h2>
      <ul class="space-y-2 list-none p-0">
        <li
          v-for="(event, index) in futureEvents"
          :key="'future-' + index"
          class="p-3 rounded bg-gray-100 dark:bg-gray-800"
        >
          <EventCard :event="event" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ICAL from 'ical.js'
import EventCard from './EventCard.vue'

const todayEvents = ref([])
const futureEvents = ref([])

onMounted(async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}sample.ics`)
  const text = await res.text()
  const allEvents = parseICS(text)
  console.log(allEvents );

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  todayEvents.value = []
  futureEvents.value = []

  allEvents.forEach((event) => {
    const eventStart = new Date(event.start)
    const sameDay = eventStart.toDateString() === today.toDateString()
    const isFuture = eventStart > today

    if (sameDay) {
      todayEvents.value.push(event)
    } else if (isFuture) {
      futureEvents.value.push(event)
    }
  })
})

function parseICS(icsText) {
  const jcalData = ICAL.parse(icsText)
  const comp = new ICAL.Component(jcalData)
  const vevents = comp.getAllSubcomponents('vevent')

  return vevents.map((vevent) => {
    const event = new ICAL.Event(vevent)
    return {
      summary: event.summary,
      location: event.location,
      description: event.description,
      start: event.startDate.toJSDate(),
      end: event.endDate.toJSDate(),
    }
  })
}
</script>
