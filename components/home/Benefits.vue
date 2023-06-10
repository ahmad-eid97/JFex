<template>
  <div class="benefits">
    <div class="container">
      <h3>The benefits of your attending….</h3>
      <p class="description">The format of the event in some ways is just as important as the content. We try to make sure
        that all our
        sessions are as interactive and interesting as possible</p>
      <div class="list">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="benefit in benefits" :key="benefit.id">
            <div class="single">
              <i class="fa-solid fa-exclamation"></i>
              <div class="details">
                <h4>{{ benefit.title }}</h4>
                <p>{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['benefits']
}
</script>

<style lang="scss" scoped>
.benefits {
  padding: 80px 0 20px;

  p.description {
    margin-bottom: 50px;
  }

  .list {
    display: flex;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
  }

  .single {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;

    i {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: var(--main-color);
      display: grid;
      place-content: center;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .details {
      p {
        font-size: 0.9rem;
        opacity: 0.8;
      }
    }
  }
}
</style>