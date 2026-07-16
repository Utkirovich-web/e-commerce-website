<template>
  <div class="team-carousel-container">
    <Splide :options="splideOptions" class="team-splide">
      <SplideSlide v-for="(member, index) in teamMembers" :key="index">
        <div class="team-card">
          <div class="team-card__img-wrapper">
            <img
              :src="member.image"
              :alt="member.name"
              class="team-card__img"
            />
          </div>
          <div class="team-card__info">
            <h3 class="team-card__name">{{ member.name }}</h3>
            <p class="team-card__role">{{ member.role }}</p>
            <div class="team-card__socials">
              <a href="#" class="social-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a href="#" class="social-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a href="#" class="social-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  < 
                    x="2"
                    y="9"
                    width="4"
                    height="12"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const teamMembers = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyw4Azj7cJYgA_IBnpDu_FR_j32i0sybbXxAdjJVpjUw&s=10",
  },
  {
    name: "Cristiano Ronaldo",
    role: "G.O.A.T",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
  },
  {
    name: "Lionel Messi",
    role: "FC Barcelona Icon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
  },
  {
    name: "Neymar Jr",
    role: "FC Barcelona Star",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-bYqPHRA8zkWYhUz2m5ESmeNu8Dg650EzjgPS37OFIA&s=10",
  },
  {
    name: "Kylian Mbappé",
    role: "Top Striker",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQu8KSDRSD8fGbRMo9AvSA7UQqo8LeIt2ffldT0XwkVw&s=10",
  },
  {
    name: "Erling Haaland",
    role: "Goal Machine",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Ln7scoD_1vJ_w6XsI2DaN_AqsFGEJnmj3GWHXqEXVA&s",
  },
  {
    name: "Kevin De Bruyne",
    role: "Midfield Maestro",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6k0mfKWdhYkEdcXp2gyoBOf4GxyTucUSeNLDAUBOpA&s=10",
  },
];

const splideOptions = {
  type: "slide",
  rewind: true,
  autoplay: true,
  interval: 4000,
  perPage: 3,
  gap: "30px",
  arrows: false,
  pagination: true,
  breakpoints: {
    768: { perPage: 1 },
    1024: { perPage: 2 },
  },
};
</script>

<style scoped>
.team-carousel-container {
  width: 100%;
  padding: 40px 0;
}
.team-card {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  text-align: left;
}
.team-card__img-wrapper {
  width: 100%;
  height: 391px;
  background-color: #f5f5f5;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  border-radius: 4px;
} 
.team-card__img {
  width: auto;
  max-width: 100%;
  height: 95%;
  object-fit: contain;
}
.team-card__info {
  padding: 24px 0;
  background: #fff;
}
.team-card__name {
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  color: #000;
  margin-bottom: 8px;
}
.team-card__role {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #000;
  opacity: 0.7;
  margin-bottom: 16px;
}
.team-card__socials {
  display: flex;
  gap: 16px;
}
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: opacity 0.2s;
}
.social-icon:hover {
  opacity: 0.6;
}
:deep(.splide__pagination) {
  bottom: -20px;
}
:deep(.splide__pagination__page.is-active) {
  background: #db4444 !important;
  transform: scale(1.2);
}
:deep(.splide__pagination__page) {
  background: #cccccc;
  opacity: 1;
}
</style>
