<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-column">
        <h3 class="footer-title">Exclusive</h3>
        <p class="footer-text">Subscribe</p>
        <p class="footer-subtext">Get 10% off your first order</p>
        <div class="email-box">
          <input
            type="email"
            placeholder="Enter your email"
            class="email-input" />
          <button class="email-button">➔</button>
        </div>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">Support</h3>
        <p class="footer-text">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p class="footer-text">exclusive@gmail.com</p>
        <p class="footer-text">+88015-88888-9999</p>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">Account</h3>
        <ul class="footer-links-list">
          <li>
            <router-link to="#" class="footer-link">My Account</router-link>
          </li>
          <li>
            <router-link to="#" class="footer-link"
              >Login / Register</router-link
            >
          </li>
          <li><router-link to="#" class="footer-link">Cart</router-link></li>
          <li>
            <router-link to="#" class="footer-link">Wishlist</router-link>
          </li>
          <li><router-link to="#" class="footer-link">Shop</router-link></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">Quick Link</h3>
        <ul class="footer-links-list">
          <li>
            <router-link to="#" class="footer-link">Privacy Policy</router-link>
          </li>
          <li>
            <router-link to="#" class="footer-link">Terms Of Use</router-link>
          </li>
          <li><router-link to="#" class="footer-link">FAQ</router-link></li>
          <li><router-link to="#" class="footer-link">Contact</router-link></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">Download App</h3>
        <p class="footer-subtext">Save $3 with App New User Only</p>

        <div class="download-box">
          <div class="qr-code">
            <img src="@/assets/Qrcode.svg" alt="QR Code" />
          </div>

          <div class="app-buttons">
            <a href="#" class="store-button">
              <img src="@/assets/google-play-icon.svg" alt="Google Play" />
            </a>
            <a href="#" class="store-button">
              <img src="@/assets/app-store-icon.svg" alt="App Store" />
            </a>
          </div>
        </div>

        <div class="social-icons">
          <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="copyright-text">© Copyright Rimel 2022. All right reserved</p>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.site-footer {
  background-color: #000000;
  color: #ffffff;
  padding-top: 60px;
  padding-bottom: 24px;
  font-family: "Poppins", sans-serif;

  .footer-container {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
  }

  .footer-column {
    width: 18%;
  }

  .footer-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: 0.03em;
  }

  .footer-text {
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.5;
  }

  .footer-subtext {
    font-size: 14px;
    margin-bottom: 12px;
    color: #f5f5f5;
  }

  .email-box {
    display: flex;
    align-items: center;
    border: 1.5px solid #ffffff;
    border-radius: 4px;
    padding: 8px 12px;
    background-color: transparent;

    .email-input {
      background: transparent;
      border: none;
      color: #ffffff;
      outline: none;
      width: 85%;
      font-size: 14px;

      &::placeholder {
        color: #7d7d7d;
      }
    }

    .email-button {
      background: transparent;
      border: none;
      color: #ffffff;
      cursor: pointer;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .footer-links-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 16px;
    }
  }

  .footer-link {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.2s ease;

    &:hover {
      color: #db4444;
      text-decoration: none;
    }
  }

  .download-box {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 16px;

    .qr-code {
      width: 80px;
      height: 80px;
      background-color: #ffffff;
      padding: 2px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .app-buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 80px;

      .store-button {
        display: block;
        width: 110px;
        height: 36px;
        background-color: #000000;
        border-radius: 4px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  .social-icons {
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin-top: 24px;

    .social-link {
      color: #ffffff;
      text-decoration: none;
      font-size: 18px;
      transition:
        transform 0.2s ease,
        color 0.2s ease;

      &:hover {
        color: #db4444;
        transform: translateY(-2px);
      }
    }
  }

  .footer-bottom {
    text-align: center;
    margin-top: 60px;
    border-top: 1px solid #141414;
    padding-top: 16px;
    opacity: 0.4;

    .copyright-text {
      font-size: 16px;
      color: #ffffff;
      margin: 0;
    }
  }
}
</style>
