<template>
  <div class="award">
    <div class="container">
      <div class="head">
        <h2>Meet Us In Qatar Financial Conference & Expo</h2>
        <p>12/12/2023</p>
      </div>

      <div class="banner">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img :src="awards.find(one => one.key === 'awards_image').value" alt="">
          </div>
          <div class="col-md-6">
            <div class="content">
              <h3>{{ awards.find(one => one.key === 'awards_title').value }}</h3>
              <p>{{ awards.find(one => one.key === 'awards_description').value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["awards"]
}
</script>

<style scoped lang="scss">
.award {
  padding-bottom: 80px;

  .head {
    * {
      text-align: center !important;
    }

    p {
      color: var(--main-color);
      font-weight: 600;
    }
  }

  .banner {
    margin-top: 50px;

    img {
      height: 500px;
      width: 100%;

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
        font-size: 3rem;
      }

      p {
        opacity: 0.8;
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