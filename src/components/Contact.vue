<template>
  <section class="contact-section">
    <Roadmap>
      <router-link to="/">Home</router-link>
      <span class="separator">/</span>
      <span class="current">Contact</span>
    </Roadmap>

    <div class="main-contact">
      <div class="contact-info-card">
        <div class="info-block">
          <div class="img-wrapper">
            <img src="@/assets/phone-icon.svg" alt="phone icon" />
            <span>Call To Us</span>
          </div>
          <div class="info-details">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
        </div>

        <div class="line"></div>

        <div class="info-block">
          <div class="img-wrapper">
            <img src="@/assets/message-icon.svg" alt="message icon" />
            <span>Write To Us</span>
          </div>
          <div class="info-details">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      <div class="contact-form-card">
        <form class="contact-form">
          <div class="inputs-grid">
            <input
              type="text"
              placeholder="Your Name *"
              required
              class="form-input"
            />
            <input
              type="email"
              placeholder="Your Email *"
              required
              class="form-input"
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              required
              class="form-input"
            />
          </div>

          <div class="textarea-wrapper">
            <textarea
              placeholder="Your Message"
              class="form-textarea"
              rows="5"
            ></textarea>
          </div>

          <div class="button-wrapper">
            <button type="submit" class="submit-btn">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import Roadmap from "./Roadmap.vue";
</script>

<style lang="scss" scoped>
section {
    margin-bottom: 14rem;
}

.main-contact {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 30px;
  margin-top: 80px;
}

.contact-info-card {
  background: #fff;
  padding: 40px 35px;
  border-radius: 4px;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
}

.contact-form-card {
  background: #fff;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
}

.info-block {
  .img-wrapper {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-bottom: 2.4rem;
    color: #000;

    img {
      width: 40px;
      height: 40px;
      padding: 1rem;
      border-radius: 50%;
      background-color: #db4444;
    }

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .info-details {
    p {
      color: #000;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 1.6rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.line {
  margin-block: 3.2rem;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.inputs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.form-input {
  background: #f5f5f5;
  border: none;
  border-radius: 4px;
  padding: 13px 16px;
  font-size: 16px;
  color: #000;
  outline: none;
  width: 100%;
}

.form-textarea {
  background: #f5f5f5;
  border: none;
  border-radius: 4px;
  padding: 13px 16px;
  font-size: 16px;
  color: #000;
  outline: none;
  resize: none;
  width: 100%;
  height: 207px;
}

.button-wrapper {
  display: flex;
  justify-content: flex-end;
}

.submit-btn {
  background: #db4444;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 16px 48px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e05858;
  }
}

@media (max-width: 992px) {
  .main-contact {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .inputs-grid {
    grid-template-columns: 1fr;
  }

  .contact-form-card,
  .contact-info-card {
    padding: 24px;
  }
}
</style>
