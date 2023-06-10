<template>
  <div class="container">
    <div class="speakers">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="speaker in speakers" :key="speaker.id">
          <div class="item">
            <img :src="speaker.link" alt="speaker">
            <div class="content">
              <h4>{{ speaker.title }}</h4>
              <p>{{ speaker.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.speakers {
  margin-top: 50px;

  .item {
    margin-bottom: 30px;

    img {
      width: 100%;
      height: 300px;
      border-radius: 10px;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h4 {
        background-color: var(--main-color);
        padding: 3px 10px;
        border-radius: 5px;
        margin-top: 10px;
        font-size: 1.3rem;
      }

      p {
        font-weight: 600;
        opacity: 0.8;
        font-size: 0.9rem;
      }
    }
  }
}
</style>

<script>
export default {
  props: ['speakers'],
}
</script>