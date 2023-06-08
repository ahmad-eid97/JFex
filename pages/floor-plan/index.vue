<template>
  <div class="floorPlan">
    <FloorPlanHeading />
    <FloorPlanDetails />
  </div>
</template>

<script>
import FloorPlanHeading from '../../components/floorPlan/FloorPlanHeading.vue';
import FloorPlanDetails from '../../components/floorPlan/FloorPlanDetails.vue';

export default {
  components: {
    FloorPlanHeading,
    FloorPlanDetails
  }
};
</script>