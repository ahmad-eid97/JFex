<template>
  <div>
    <AttendeesHeading />
    <AttendeesDetails :attendees="attendees" />
  </div>
</template>

<script>
import AttendeesHeading from '../../components/attendees/AttendeesHeading.vue'
import AttendeesDetails from '../../components/attendees/AttendeesDetails.vue'

export default {
  async asyncData({ $axios, app }) {
    const attendees = await $axios.get('/sections/attendees');

    return {
      attendees: attendees.data.data
    }
  },
  components: {
    AttendeesHeading,
    AttendeesDetails
  }
}
</script>