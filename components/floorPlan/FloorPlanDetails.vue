<template>
  <div class="container">
    <div class="floorPlan">
      <h2>{{ floor_plan.find(one => one.key === 'floor_plan_title')?.value }}</h2>
      <img :src="floor_plan.find(one => one.key === 'floor_plan_image')?.value" alt="floor-plan-image">
    </div>
  </div>
</template>

<script>
export default {
  props: ['floor_plan'],
  mounted() {
    console.log(this.floor_plan)
  }
}
</script>

<style scoped lang="scss">
.floorPlan {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    border-bottom: 2px solid var(--main-color);
  }
}
</style>