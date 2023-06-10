<template>
  <div class="floorPlan">
    <FloorPlanHeading />
    <FloorPlanDetails :floor_plan="floor_plan" />
  </div>
</template>

<script>
import FloorPlanHeading from '../../components/floorPlan/FloorPlanHeading.vue';
import FloorPlanDetails from '../../components/floorPlan/FloorPlanDetails.vue';

export default {
  components: {
    FloorPlanHeading,
    FloorPlanDetails
  },
  async asyncData({ $axios, app }) {
    const FLOOR_PLAN = await $axios.get('/sections/floor_plan',
      {
        headers: {
          "Accept-Language": app.i18n.locale,
        },
      })

    return {
      // floor_plan: FLOOR_PLAN.data.data.find(one => one.key === 'sponsors_list' || one.key === 'قائمة الرعاة').value
      floor_plan: FLOOR_PLAN.data.data
    }
  },
};
</script>