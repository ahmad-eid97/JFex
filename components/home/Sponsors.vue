<template>
  <div class="sponsors">
    <div class="container">
      <h3>Our Prestigues Sponsors</h3>
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

      <div class="partners">
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
      </div>
    </div>
  </div>
</template>

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