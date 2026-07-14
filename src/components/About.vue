<template>
  <div class="about-page">
    <section class="story-section">
      <div class="story-left-column">
        <div class="story-content">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>

      <div class="story-right-column">
        <img src="@/assets/about-page-img.png" alt="about page" />
      </div>
    </section>
  </div>
</template>

<script setup>
import Roadmap from "./Roadmap.vue";
</script>

<style lang="scss" scoped>
.about-page {
  width: 100%;
  margin-bottom: 14rem;
}

.container {
  max-width: 1170px;
  margin: 0 auto;
  padding-inline: 2rem;
  width: 100%;
}

.story-section {
  display: flex;
  width: 100%;
  min-height: 609px;
  align-items: center;
}

.story-left-column {
  width: 50%;
  display: flex;
  justify-content: flex-end;
}

.story-content {
  width: 100%;
  max-width: calc(1170px / 2 - 2rem);
  padding-right: 4rem;
  box-sizing: border-box;

  h1 {
    color: #000;
    font-size: 5.4rem;
    line-height: 6.4rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: #000;
  }
}

.story-right-column {
  width: 50%;
  height: 609px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 4px 0 0 4px;
  }
}

@media (max-width: 992px) {
  .story-section {
    flex-direction: column-reverse;
    min-height: auto;
  }

  .story-left-column,
  .story-right-column {
    width: 100%;
    height: auto;
  }

  .story-left-column {
    padding-inline: 2rem;
    justify-content: flex-start;
  }

  .story-content {
    max-width: 100%;
    padding-right: 0;
    padding-block: 4rem;
  }

  .story-right-column {
    padding-inline: 2rem;

    img {
      border-radius: 4px;
    }
  }
}
</style>
