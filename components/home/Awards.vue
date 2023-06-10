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
            <img src="/assets/images/award.jpeg" alt="">
          </div>
          <div class="col-md-6">
            <div class="content">
              <h3>JFI Awards</h3>
              <p>ordan Financial Innovation Awards ( JFI Awards ) aim to celebrate all that is entrepreneur and innovative
                within the leading brands in the online trading(FX), fintech, banking, digital assets, blockchain, and
                payments
                sphere and we would encourage you to browse through the rest of the awards site and see where the
                excellence
                in
                your organization can become a nomination in the awards process. ‘Old hands’ and new entrants have equal
                chances
                to write a new chapter in the story of the Entrepreneur JFI Awards by nominating those projects which are
                new
                and exciting in the financial services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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