<template>
  <div class="contact-form-area pt-50 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <iframe
            :src="`https://maps.google.com/maps?q='+${$store.state.websiteSettings.find(one => one.key === 'latitude')?.plain_value}+','+${$store.state.websiteSettings.find(one => one.key === 'longitude')?.plain_value}+'&hl=es&z=14&amp;output=embed`"></iframe>
        </div>
        <div class="col-lg-4">
          <div class="contact-info">
            <span>Contact Info</span>
            <h2>Let's Connect With Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              imperdiet varius mi, ut hendrerit magna mollis ac.
            </p>
            <ul>
              <li>
                <div class="content">
                  <div class="icon">
                    <i class="fa-solid fa-phone-volume"></i>
                  </div>
                  <i class="bx bx-phone-call"></i>
                  <div class="contentInnner">
                    <h3>Phone Number</h3>
                    <a href="tel:+1(212)-255-5511">{{
                      $store.state.websiteSettings.find(
                        (one) => one.key === "contact_phone"
                      )?.plain_value
                    }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="content">
                  <div class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div class="contentInnner">
                    <h3>Address</h3>
                    <a href="#">{{
                      $store.state.websiteSettings.find(
                        (one) => one.key === "contact_address"
                      )?.plain_value
                    }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="content">
                  <div class="icon">
                    <i class="fa-regular fa-message"></i>
                  </div>
                  <div class="contentInnner">
                    <h3>Contact Info</h3>
                    <a href="mailto:hello@techex.com">{{
                      $store.state.websiteSettings.find(
                        (one) => one.key === "contact_email"
                      )?.plain_value
                    }}</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>


<style>
iframe {
  width: 100%;
  height: 510px;
  border-radius: 10px;
}

.contact-form-area .section-title h2 {
  max-width: 600px;
  color: #212529;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 42px;
  text-align: left;
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 15px;
  margin-left: auto;
  text-align: center;
}

.contact-form-area h2 {
  font-size: 35px;
  font-weight: 600;
  margin-top: 0;
  line-height: 1.2;
  color: #212529;
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
  background-color: var(--secondary-color);
  padding: 52px 35px 22px;
  border-radius: 12px;
  position: relative;
  z-index: 1;
}

.contact-form-area .contact-info span {
  color: #fff;
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
  /* padding-left: 60px; */
  position: relative;
}

.contact-info ul li .content {
  width: 100%;
  display: flex;
  align-items: center;
  /* gap: 10px; */
}

.contact-info ul li .content .contentInnner {
  margin: 0 10px;
}

.contact-info ul li .content .icon {
  width: 45px;
  height: 45px;
  line-height: 45px;
  background-color: #fff;
  font-size: 20px;
  color: var(--main-color);
  border-radius: 50px;
  border: 1px solid #fff;
  margin-bottom: 10px;
  text-align: center;
  /* position: absolute;
  left: 0;
  top: 0; */
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
  color: #212529;
  font-size: 15px;
  margin-bottom: 0px;
  font-weight: 500;
}

.contact-form .form-group label span {
  color: var(--main-color);
}

.contact-form .form-group .form-control {
  height: 50px;
  color: #212529;
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
  /* position: absolute;
  top: 5px;
  left: 0; */
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

.contact-form .default-btn,
.contact-form .default-btn:hover {
  background-color: var(--main-color);
  border-radius: 25px;
  color: #fff;
  padding: 10px 16px;
  font-weight: bold;
  border: none;
}

/* .contact-info * {
  color: #000 !important;
} */

input.error,
textarea.error {
  border-color: rgb(255, 101, 101) !important;
}

textarea {
  height: 120px !important;
}

span.error {
  color: rgb(255, 101, 101);
}
</style>

<style>
.contact-form-area .section-title h2 {
  max-width: 600px;
  color: #212529;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 42px;
  text-align: left;
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 15px;
  margin-left: auto;
  text-align: center;
}

.contact-form-area h2 {
  font-size: 35px;
  font-weight: 600;
  margin-top: 0;
  line-height: 1.2;
  color: #212529;
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
  background-color: var(--secondary-color);
  padding: 52px 35px 22px;
  border-radius: 12px;
  position: relative;
  z-index: 1;
}

.contact-form-area .contact-info span {
  color: #fff;
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
  /* padding-left: 60px; */
  position: relative;
}

.contact-info ul li .content {
  width: 100%;
  display: flex;
  align-items: center;
  /* gap: 10px; */
}

.contact-info ul li .content .contentInnner {
  margin: 0 10px;
}

.contact-info ul li .content .icon {
  width: 45px;
  height: 45px;
  line-height: 45px;
  background-color: #fff;
  font-size: 20px;
  color: var(--main-color);
  border-radius: 50px;
  border: 1px solid #fff;
  margin-bottom: 10px;
  text-align: center;
  /* position: absolute;
  left: 0;
  top: 0; */
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
  color: #212529;
  font-size: 15px;
  margin-bottom: 0px;
  font-weight: 500;
}

.contact-form .form-group label span {
  color: var(--main-color);
}

.contact-form .form-group .form-control {
  height: 50px;
  color: #212529;
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
  /* position: absolute;
  top: 5px;
  left: 0; */
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

.contact-form .default-btn,
.contact-form .default-btn:hover {
  background-color: var(--main-color);
  border-radius: 25px;
  color: #fff;
  padding: 10px 16px;
  font-weight: bold;
  border: none;
}

/* .contact-info * {
  color: #000 !important;
} */

input.error,
textarea.error {
  border-color: rgb(255, 101, 101) !important;
}

textarea {
  height: 120px !important;
}

span.error {
  color: rgb(255, 101, 101);
}
</style>
