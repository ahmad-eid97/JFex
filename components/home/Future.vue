<template>
  <div class="furture">
    <div class="container">
      <div class="banner">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img :src="future.find(one => one.key === 'future_image').value" alt="">
          </div>
          <div class="col-md-6">
            <div class="content">
              <h3>
                {{ future.find(one => one.key === 'future_title').value }}
              </h3>
              <p v-for="item in future.find(one => one.key === 'future_list').value" :key="item.title">
                <span>{{ item.title }}</span>
                : {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['future'],
}
</script>

<style scoped lang="scss">
.furture {
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 80px 0;
  background-color: #f3f2f2;

  .banner {
    img {
      height: 500px;

      @include xs {
        object-fit: contain;
        height: auto;
      }
    }

    .content {
      height: 500px;
      background-color: var(--secondary-color);
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      * {
        color: #fff;
      }

      h3 {
        font-size: 2.5rem;
        margin-bottom: 30px;
      }

      p {
        opacity: 0.8;

        span {
          font-weight: 600;
          text-decoration: underline;
        }
      }

      @include xs {
        height: auto;

        h3 {
          font-size: 2rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>