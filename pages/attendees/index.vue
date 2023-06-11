<template>
  <div>
    <AttendeesHeading />
    <AttendeesDetails />
  </div>
</template>

<script>
import AttendeesHeading from '../../components/attendees/AttendeesHeading.vue'
import AttendeesDetails from '../../components/attendees/AttendeesDetails.vue'

export default {
  components: {
    AttendeesHeading,
    AttendeesDetails
  }
}
</script>