<template>
  <div class="attendees">
    <div class="container">
      <div class="head">
        <h2>{{ attendees.find(one => one.key === 'attendees_title').value }}</h2>
        <p>{{ attendees.find(one => one.key === 'attendees_description').value }}</p>
      </div>

      <div class="horizontalSteps" v-if="attendees.find((one) => one.key === 'attendees_list')">
        <div class="row gx-5 justify-content-center">
          <div class="col-sm-12 stepWrapper" :class="$i18n.locale === 'ar' ? 'arabic' : ''"
            v-for="(attendee, idx) in attendees.find((one) => one.key === 'attendees_list').value" :key="attendee.number">
            <div class="step">
              <span></span>
              <div class="details">
                <span :class="$i18n.locale === 'ar' ? 'arabic' : ''">
                  <i :class="attendee.icon" />
                </span>
                <div class="content">
                  <h5>{{ attendee.title }}</h5>
                  <!-- <p v-if="attendee.description">
                    {{ attendee.description }}
                  </p> -->
                  <span class="hoverLay"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HorizontalSteps from '../HorizontalSteps/HorizontalSteps.vue';

export default {
  props: ['attendees'],
  components: {
    HorizontalSteps
  }
}
</script>

<style scoped lang="scss">
.attendees {
  margin-top: 50px;

  .head {
    * {
      text-align: center;
    }

    max-width: 800px;
    margin: 0 auto 50px;

    p {
      opacity: 0.8;
    }
  }

  .horizontalSteps {
    --text-color: #000;
    --text-hover-color: #fff;
    --step-background: #fff;
    --step-hover-background: var(--main-color);
    --num-text-color: #fff;
    --num-text-hover-color: var(--main-color);
    --num-background: var(--main-color);
    --num-hover-background: #fff;

    .stepWrapper {
      position: relative;

      &:nth-of-type(odd) {
        .step {
          .details {
            &>span {
              position: relative;

              &::after {
                content: "";
                position: absolute;
                top: 50%;
                right: 90%;
                width: 100%;
                height: 70px;
                border-right: 3px dashed var(--main-color);
                z-index: 1;
                transform: rotate(35deg);
              }
            }
          }
        }
      }

      &:nth-of-type(even) {
        .step {
          flex-direction: row-reverse;

          .details {
            flex-direction: row-reverse;

            &>span {
              position: relative;

              &::after {
                content: "";
                position: absolute;
                top: 100%;
                left: 10%;
                width: 100%;
                height: 70px;
                border-right: 3px dashed var(--main-color);
                z-index: 1;
                transform: rotate(-35deg);
              }
            }

            .content {
              border-right: 4px solid var(--step-hover-background);
              border-left: unset;
            }
          }
        }
      }

      &:last-of-type {
        .step {
          .details {
            &>span {
              position: relative;

              &::after {
                content: none;
              }
            }
          }
        }
      }

      &.arabic {
        .step {
          .details {
            .content {
              border-right: 4px solid var(--step-hover-background);
              border-left: unset;
            }
          }
        }

        &:nth-of-type(odd) {
          .step {
            .details {
              &>span {
                &::after {
                  content: "";
                  position: absolute;
                  top: 100%;
                  right: -10%;
                  width: 100%;
                  height: 70px;
                  border-right: 3px dashed var(--main-color);
                  z-index: 1;
                  transform: rotate(-35deg);
                }
              }
            }
          }
        }

        &:nth-of-type(even) {
          .step {
            .details {
              &>span {
                &::after {
                  content: "";
                  position: absolute;
                  top: 50%;
                  right: 90%;
                  width: 100%;
                  height: 70px;
                  border-right: 3px dashed var(--main-color);
                  z-index: 1;
                  transform: rotate(35deg);
                }
              }

              .content {
                border-left: 4px solid var(--step-hover-background);
                border-right: unset;
              }
            }
          }
        }

        &:last-of-type {
          .step {
            .details {
              &>span {
                position: relative;

                &::after {
                  content: none;
                }
              }
            }
          }
        }
      }
    }

    .step {
      padding: 20px;
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--text-color);

      i {
        font-size: 2rem;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px dashed var(--main-color);
        color: var(--main-color);
        display: grid;
        place-content: center;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 2;
        background-color: #fff;
      }

      &>span {
        flex: 1;
      }

      .details {
        display: flex;
        align-items: center;
        gap: 20px;
        flex: 1;

        .content {
          max-width: 800px;
          width: 100%;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          background: #fff;
          position: relative;
          z-index: 2;
          border-left: 4px solid var(--step-hover-background);
        }

        .hoverLay {
          position: absolute;
          left: 0;
          bottom: 0 !important;
          width: 100%;
          height: 4px;
          background: var(--step-hover-background);
          z-index: -1;
          opacity: 0.1;
        }

        &:hover {
          .hoverLay {
            height: 100%;
          }
        }

        @include lg {
          max-width: 600px;
        }

        @include xs {
          display: block;

          &>span {
            display: none;
          }
        }
      }

      @include xs {
        &>span {
          display: none;
        }
      }
    }
  }
}
</style>