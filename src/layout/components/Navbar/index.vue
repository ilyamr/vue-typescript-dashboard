<template>
  <div class="navbar">
    <div class="left-menu">
      <breadcrumb
        id="breadcrumb-container"
        class="breadcrumb-container"
      />
      <div class="navbar__separator">
        |
      </div>
      <hamburger
        id="hamburger-container"
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />
    </div>
    <div class="right-menu hidden-sm-and-down">
      <router-link
        to="#"
        class="right-menu-link"
      >
        <navbar-icon
          to="#"
          icon-class="el-icon-bell"
        />
      </router-link>
      <router-link
        to="#"
        class="right-menu-link"
      >
        <navbar-icon
          to="#"
          icon-class="el-icon-question"
        />
      </router-link>
      <div class="navbar__separator">
        |
      </div>

      <router-link
        to="#"
        class="right-menu-link user-account-wrapper"
      >
        <navbar-icon
          to="#"
          icon-class="el-icon-user"
        />
        <div class="user-account-wrapper__username">
          Account
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import { UserModule } from '@/store/modules/User/User'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hamburger from '@/components/Hamburger/index.vue'
import NavbarIcon from '@/layout/components/Navbar/NavbarIcon.vue'

import 'element-ui/lib/theme-chalk/display.css'

@Component({
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hamburger,
    NavbarIcon
  }
})
export default class extends Vue {
  get sidebar() {
    return AppModule.sidebar
  }

  get device() {
    return AppModule.device.toString()
  }

  get avatar() {
    return UserModule.avatar
  }

  private toggleSideBar() {
    AppModule.ToggleSideBar(false)
  }

  private async logout() {
    await UserModule.LogOut()
    this.$router.push(`/login?redirect=${this.$route.fullPath}`)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 80px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 3px 4px rgba(0,21,41,.08);

  display: flex;
  align-items: center;
  justify-content: space-between;

  &__separator {
    margin: 0 8px;
    color: $lightGray;
  }

  .left-menu {
    display: flex;
    align-items: center;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 16px;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .user-account-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;

    &__username {
      margin-left: 8px;
      color: $blue;
      font-weight: 700;
      font-size: 1.2em;
    }
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      outline: none;
    }

    .right-menu-link {
      margin-right: 24px;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
