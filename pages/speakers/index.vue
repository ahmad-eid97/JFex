<template>
  <div>
    <SpeakersHeading />
    <SpeakersList :speakers="speakers" />
  </div>
</template>

<script>
import SpeakersHeading from '../../components/speakers/SpeakersHeading.vue';
import SpeakersList from '../../components/speakers/SpeakersList.vue';

export default {
  components: {
    SpeakersHeading,
    SpeakersList
  },
  async asyncData({ $axios, app }) {
    const SPEAKERS = await $axios.get('/sections/speakers',
      {
        headers: {
          "Accept-Language": app.i18n.locale,
        },
      })

    return {
      speakers: SPEAKERS.data.data.find(one => one.key === 'speakers_list' || one.key === 'قائمة_المتحدثين').value
    }
  },
  methods: {
  },
};
</script>