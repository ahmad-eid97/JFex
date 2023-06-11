<template>
  <div class="sponsorsList">
    <div class="container">
      <h2>{{ sponsors.find(one => one.key === 'sponsors_title').value }}</h2>
      <div class="row justify-content-center">
        <div class="col-12 col-sm-6 col-md-3 col-lg-2"
          v-for="sponsor in sponsors.find(one => one.key === 'sponsors_list' || one.key === 'قائمة الرعاة').value"
          :key="sponsor.title">
          <a :href="sponsor.link">
            <div class="sponsor">
              <img :src="sponsor.icon" alt="sponsor">
              <h4>{{ sponsor.title }}</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sponsorsList {
  margin-top: 50px;

  h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  .sponsor {
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 10px;

    img {
      width: 100%;
      height: 150px;
      object-fit: contain;
    }

    h4 {
      margin-top: 10px;
      font-size: 1.2rem;
      text-align: center;
    }
  }
}
</style>

<script>
export default {
  props: ['sponsors'],
}
</script>