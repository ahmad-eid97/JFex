<template>
  <div class="sponsors">
    <div class="container">
      <h3>{{ sponsors.find(one => one.key === 'sponsors_title').value }}</h3>
      <div class="list">
        <div class="sponsor" v-for="sponsor in sponsors.find(one => one.key === 'sponsors_list').value" :key="sponsor.id">
          <a :href="sponsor.link">
            <img :src="sponsor.icon" alt="sponsor">
            <h5>{{ sponsor.title }}</h5>
          </a>
        </div>
      </div>

      <!-- <div class="partners">
        <h3>Media Partners</h3>
        <div class="list">
          <div class="sponsor">
            <h5>Elite Sponsor</h5>
            <img src="/assets/images/noImage.png" alt="sponsor">
          </div>
          <div class="sponsor">
            <h5>Elite Sponsor</h5>
            <img src="/assets/images/noImage.png" alt="sponsor">
          </div>
          <div class="sponsor">
            <h5>Elite Sponsor</h5>
            <img src="/assets/images/noImage.png" alt="sponsor">
          </div>
          <div class="sponsor">
            <h5>Elite Sponsor</h5>
            <img src="/assets/images/noImage.png" alt="sponsor">
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['sponsors'],
  mounted() {
    console.log(this.sponsors)
  }
}
</script>

<style lang="scss" scoped>
.sponsors {
  padding: 80px 0;

  h3 {
    text-align: center;
    margin-bottom: 50px;
  }

  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
  }

  .sponsor {
    h5 {
      text-align: center;
      margin-bottom: 20px;
    }

    img {
      width: 200px;
      object-fit: contain;
    }
  }

  .partners {
    background-color: unset;
  }
}
</style>