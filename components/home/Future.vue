<template>
  <div class="furture">
    <div class="container">
      <div class="banner">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="/assets/images/future.jpg" alt="">
          </div>
          <div class="col-md-6">
            <div class="content">
              <h3>WHERE THE PAST EMBRACES THE FUTURE
                <br>
                a chance to :
              </h3>
              <p><span>DISCOVER</span>: Jordan, drenched in history and home to some of the world’s earliest settlements
              </p>
              <p><span>MEET</span>: renowned leaders from the global financial markets
              </p>
              <p><span>LEARN</span>: about the ever-increasing financial markets, as interesting as they are volatile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.furture {
  padding-bottom: 80px;

  .banner {
    margin-top: 50px;

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