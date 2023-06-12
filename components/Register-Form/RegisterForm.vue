<template>
  <div class="user-area pt-100 pb-70">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-8">
          <div class="user-form">
            <div class="contact-form">
              <h2>Registration Form</h2>
              <p>Fields marked with an <span>*</span> are required</p>
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <label for="">First Name <span>*</span></label>
                    <div class="form-group">
                      <input type="text" class="form-control" :class="emptyError && !firstname ? 'errorInput' : ''"
                        required="" data-error="Please enter your firstname" placeholder="First Name" v-model="name" />
                      <span v-if="emptyError && !firstname" class="errorHint">Field is required</span>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <label for="">Last Name <span>*</span></label>
                    <div class="form-group">
                      <input type="text" class="form-control" :class="emptyError && !lastname ? 'errorInput' : ''"
                        required="" data-error="Please enter your firstname" placeholder="Last Name" v-model="name" />
                      <span v-if="emptyError && !lastname" class="errorHint">Field is required</span>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <label for="">Phone Number <span>*</span></label>
                    <div class="form-group">
                      <input type="text" class="form-control" :class="emptyError && !phone ? 'errorInput' : ''"
                        required="" data-error="Please enter your phone number" placeholder="Phone Number"
                        v-model="phone" />
                      <span v-if="emptyError && !name" class="errorHint">Field is required</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="">Email Address <span>*</span></label>
                    <div class="form-group">
                      <input type="email" class="form-control" :class="(emptyError && !email) || !validEmail
                        ? 'errorInput'
                        : ''
                        " required="" data-error="Please enter your Email" placeholder="Email Address" v-model="email"
                        @change="typingEmail" />
                      <span v-if="emptyError && !email" class="errorHint">Field is required</span>
                      <span v-if="!validEmail && email" class="errorHint">Email is invalid</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="">Country <span>*</span></label>
                    <div class="form-group">
                      <select name="" id="" v-model="country" :class="emptyError && !country ? 'errorInput' : ''">
                        <option v-for="country in $i18n.locale === 'ar' ? countries.arCountries : countries.countries"
                          :key="country" value="country">{{ country }}
                        </option>
                      </select>
                      <span v-if="emptyError && !country" class="errorHint">Field is required</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="registeration">
                      <label for="">Regestration Type <span>*</span></label>
                      <div class="option">
                        <input type="checkbox" name="type" v-model="type.visitor" />
                        <span>Visitor</span>
                      </div>
                      <div class="option">
                        <input type="checkbox" name="type" v-model="type.sponsor" />
                        <span>Sponsor</span>
                      </div>
                      <span v-if="emptyError && !country" class="errorHint">Field is required</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="">Strategic Partner</label>
                    <div class="form-group">
                      <select name="" id="" v-model="partner">
                        <option v-for="partner in partners" :key="partner.id" :value="partner.title">{{ partner.title }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="">Comments or Questions</label>
                    <div class="form-group">
                      <textarea class="form-control" type="text" name="comments" placeholder="Comments or Questions"
                        v-model="comments"></textarea>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <button type="button" class="default-btn btn-bg-two" @click="register">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as EmailValidator from "email-validator";
import countries from '../../countries.json';

export default {
  name: "AppRegisterForm",
  props: ['partners'],
  data() {
    return {
      countries: countries,
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      country: '',
      type: {
        visitor: false,
        sponsor: false
      },
      partner: '',
      comments: '',
      validEmail: true,
      emptyError: false,
    };
  },
  methods: {
    typingEmail() {
      if (EmailValidator.validate(this.email)) {
        this.validEmail = true;
      }
    },
    async register() {
      const data = {
        email: this.email,
        password: this.password,
      };

      if (!this.name || !this.email || !this.password) {
        this.emptyError = true;
        return this.$toast.error("Please fill all fields!");
      }

      if (!EmailValidator.validate(this.email)) {
        this.validEmail = false;
        return this.$toast.error("Email is invalid!");
      }

      this.$store.state.showLoader = true;

      const response = await this.$axios.post("/users/auth/register", data);

      if (!response.data.success) {
        // Error code goes here
        return;
      }

      // Code goes here

      this.$store.state.showLoader = false;
    },
  },
};
</script>

<style lang="scss">
.registeration {
  margin: 0px 0 20px;

  .option {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;

    input {
      padding: 0;
      width: 18px;
      height: 18px;
    }
  }
}

.contact-form {
  label {
    font-weight: 600;
    font-size: 1.05rem;
    margin-bottom: 5px;

    span {
      color: red;
    }
  }

  input {
    color: #000 !important;
  }

  select {
    width: 100%;
    padding: 12PX 20PX;
    border-color: var(--main-color);
    font-weight: 500;
  }

  textarea {
    height: 150px !important;
  }
}

.contact-form h2 {
  color: #1f365c;
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 15px !important;

  @include xs {
    font-size: 23px !important;
  }
}

.contact-form p {
  opacity: 0.8;
  margin-bottom: 20px;

  span {
    color: red;
  }
}

.contact-form-area .section-title .seprator img {
  width: 70px;
  margin-top: 5px;
  margin-bottom: 20px;
}

.contact-form-area h2 {
  font-size: 35px;
  font-weight: 600;
  margin-top: 0;
  line-height: 1.2;
  color: var(--main-color);
  margin-bottom: 0;
}

.contact-info::before {
  content: "";
  position: absolute;
  opacity: 0.1;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(/assets/images/call-shap1.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.contact-form-area .contact-info {
  margin-bottom: 30px;
  background: rgb(0, 0, 0);
  background: linear-gradient(135deg,
      rgba(0, 0, 0, 0.9205882181974352) 0%,
      rgba(48, 164, 108, 1) 100%);
  padding: 52px 35px 22px;
  border-radius: 0px;
  position: relative;
  z-index: 1;
}

.contact-form-area .contact-info span {
  color: var(--main-color);
  display: block;
  margin-bottom: 5px;
}

.contact-form-area .contact-info h2 {
  color: #fff;
  font-size: 26px;
  margin-bottom: 15px;
}

.contact-form-area .contact-info p {
  color: #fff;
  margin-bottom: 20px;
}

.contact-form-area .contact-info ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-form-area .contact-info ul li {
  display: block;
  margin-bottom: 30px;
  padding-left: 60px;
  position: relative;
}

.contact-info ul li .content .icon {
  width: 45px;
  height: 45px;
  line-height: 45px;
  background-color: transparent;
  font-size: 20px;
  color: #fff;
  border-radius: 50px;
  border: none;
  margin-bottom: 10px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
}

.contact-info ul li .content h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
  display: block;
}

.contact-form-area .contact-info ul li .content a {
  color: #fff;
  display: block;
  font-weight: 400;
  font-size: 15px;
}

.contact-form .form-group label {
  color: var(--main-color);
  font-size: 15px;
  margin-bottom: 15px;
  font-weight: 500;
}

.contact-form .form-group label span {
  color: var(--main-color);
}

.contact-form .form-group .form-control {
  height: 50px;
  color: var(--main-color);
  border: 1px solid var(--main-color);
  background-color: #fff;
  font-size: 15px;
  padding: 10px 20px;
  width: 100%;
  border-radius: 0;
  font-weight: 500;
}

.contact-form .form-group {
  margin-bottom: 20px;
  position: relative;
}

.contact-form .agree-label {
  margin-bottom: 15px;
  position: relative;
}

.contact-form .agree-label input#chb1 {
  position: absolute;
  top: 5px;
  left: 0;
  width: auto;
  height: auto;
}

.contact-form .agree-label label {
  font-weight: 500;
  color: #252525;
  margin-left: 25px;
}

.contact-form .agree-label label a,
.contact-form a {
  color: var(--main-color);
}

.errorHint {
  color: #ff7675;
}

.errorInput {
  border-color: #ff7675 !important;
}

.contact-form .default-btn,
.contact-form .default-btn:hover {
  background-color: var(--main-color);
  border-radius: 3px;
  color: #fff;
  padding: 10px 16px;
  font-weight: bold;
  border: none;
}

button {
  margin-bottom: 10px;
}
</style>
