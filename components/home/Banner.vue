<template>
  <div class="banner">
    <span class="layer"></span>
    <div class="content">
      <h1>JORDAN FINANCIAL EXPO & AWARD JFEX 2023</h1>
      <span>5th-6th September , 2023| | Amman - Jordan</span>
      <p>FOREX | FINTECH | CRYPTOCURRENCY</p>
    </div>
  </div>
</template>

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
    opacity: 0.3;
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