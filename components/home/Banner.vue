<template>
  <div class="banner">
    <span class="layer"></span>
    <img :src="banner.find(one => one.key === 'banner_image').value" alt="">
    <div class="content">
      <h1>{{ banner.find(one => one.key === 'banner_title').value }}</h1>
      <span>{{ banner.find(one => one.key === 'banner_sub_title').value }}</span>
      <p>{{ banner.find(one => one.key === 'banner_description').value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["banner"]
}
</script>

<style scoped lang="scss">
.banner {
  position: relative;

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--main-color);
    opacity: 0.1;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    min-height: 70vh;

    span {
      font-weight: 600;
      font-size: 1.2rem;
      display: block;
      margin: 10px 0;
    }

    p {
      text-transform: uppercase;
      font-size: 1.3rem;
      font-weight: 600;
    }
  }
}
</style>