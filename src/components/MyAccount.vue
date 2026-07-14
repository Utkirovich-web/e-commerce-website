<template>
  <div class="account-page">
    <div class="top-bar">
      <Roadmap>
        <router-link to="/">Home</router-link>
        <span class="separator">/</span>
        <span class="current">My Account</span>
      </Roadmap>
      <p class="welcome-text">
        Welcome! <span class="full-name">Md Rimel</span>
      </p>
    </div>

    <div class="account-container">
      <aside class="sidebar">
        <div class="menu-group">
          <p class="menu-title">Manage My Account</p>
          <div class="menu-links">
            <router-link to="#" class="active">My Profile</router-link>
            <router-link to="#">Address Book</router-link>
            <router-link to="#">My Payment Options</router-link>
          </div>
        </div>

        <div class="menu-group">
          <p class="menu-title">My Orders</p>
          <div class="menu-links">
            <router-link to="#">My Returns</router-link>
            <router-link to="#">My Cancellations</router-link>
          </div>
        </div>

        <div class="menu-group">
          <p class="menu-title no-sub">My WishList</p>
        </div>
      </aside>

      <main class="profile-content">
        <h2>Edit Your Profile</h2>

        <form @submit.prevent="handleUpdateProfile">
          <div class="form-row">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" value="Md" placeholder="First Name" />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" value="Rimel" placeholder="Last Name" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                value="rimel1111@gmail.com"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <label>Address</label>
              <input
                type="text"
                value="Kingston, Jamaica"
                placeholder="Address"
              />
            </div>
          </div>

          <div class="password-changes">
            <p class="section-title">Password Changes</p>
            <div class="form-group full-width">
              <input type="password" placeholder="Current Password" />
            </div>
            <div class="form-group full-width">
              <input type="password" placeholder="New Password" />
            </div>
            <div class="form-group full-width">
              <input type="password" placeholder="Confirm New Password" />
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="cancel-btn">Cancel</button>
            <button type="submit" class="save-btn">Save Changes</button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script setup>
import Roadmap from "./Roadmap.vue";

const handleUpdateProfile = () => {
  console.log("Profil yangilandi");
};
</script>

<style lang="scss" scoped>
.account-page {
  max-width: 1170px;
  margin: 0 auto;
  padding-inline: 2rem;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  .welcome-text {
    font-size: 1.4rem;
    color: #000;

    .full-name {
      color: #db4444;
      font-weight: 500;
    }
  }
}

.account-container {
  display: flex;
  gap: 8rem;
  align-items: flex-start;
}

.sidebar {
  width: 235px;
  flex-shrink: 0;

  .menu-group {
    margin-bottom: 2.4rem;

    .menu-title {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.4rem;
      color: #000;
      margin-bottom: 1.6rem;

      &.no-sub {
        margin-bottom: 0;
        cursor: pointer;
      }
    }

    .menu-links {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      padding-left: 3.5rem;

      a {
        font-size: 1.4rem;
        color: #00000080;
        text-decoration: none;
        line-height: 2.4rem;
        transition: color 0.2s ease;

        &:hover,
        &.active {
          color: #db4444;
        }
      }
    }
  }
}

.profile-content {
  flex-grow: 1;
  background: #fff;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
  padding: 4rem 8rem;
  border-radius: 4px;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: #db4444;
    margin-bottom: 1.6rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .form-row {
      display: flex;
      gap: 5rem;
      width: 100%;

      .form-group {
        flex: 1;
      }
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      label {
        font-size: 1.6rem;
        color: #000;
      }

      input {
        background: #f5f5f5;
        border: none;
        border-radius: 4px;
        padding: 1.3rem 1.6rem;
        font-size: 1.6rem;
        outline: none;
        width: 100%;
        box-sizing: border-box;

        &::placeholder {
          color: #0000004d;
        }
      }
    }

    .password-changes {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 0.8rem;

      .section-title {
        font-size: 1.6rem;
        color: #000;
        margin-bottom: 0.8rem;
      }
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 3.2rem;
      margin-top: 0.8rem;

      .cancel-btn {
        background: none;
        border: none;
        font-size: 1.6rem;
        color: #000;
        cursor: pointer;
      }

      .save-btn {
        background: #db4444;
        color: #fff;
        border: none;
        padding: 1.6rem 4.8rem;
        border-radius: 4px;
        font-size: 1.6rem;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s ease;

        &:hover {
          background: #e04f4f;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .account-container {
    flex-direction: column;
    gap: 4rem;
  }

  .sidebar,
  .profile-content {
    width: 100%;
  }

  .profile-content {
    padding: 3rem 2rem;
  }

  form .form-row {
    flex-direction: column;
    gap: 2.4rem;
  }
}
</style>
