<template>
  <div class="header">
    <a href="#default" class="logo font-bold-38 color--blue-7">
      <img src="../../assets/icons/logo.png" class="logo-icon" /> <span class="logo">Logo</span></a
    >
    <div class="display-flex">
      <!-- search button -->
      <div class="search-btn bg--blue-8">
        <input type="search" placeholder="Search" />
        <button class="bg--blue-8" type="button">
          <img
            class="icon-dimention mt-16"
            height="29"
            width="29"
            src="../../assets/icons/search.png"
          />
        </button>
      </div>

      <!-- language button -->
      <div class="dropdown">
        <button class="icons" type="button">
          <img class="icon-dimention" height="29" width="29" src="../../assets/icons/language.png" />
        </button>
        <div class="dropdown-content">
          <a href="#">English</a>
          <a href="#">عربي</a>
        </div>
      </div>

      <!-- notification button  -->
      <button class="icons" type="button">
        <img
          class="icon-dimention"
          height="28"
          width="22"
          src="../../assets/icons/notification.png"
        />
      </button>

      <!-- profile image and name  -->
      <div class="profile-icon ml-20 flex">
        <div>
          <img src="../../assets/icons/profile.png" width="67" height="67" />
          <div class="profile-details ml-20">
            <p class="font-bold-20 mt-2">John Doe</p>
            <p class="font-roman-16 mt-2">Admin</p>
          </div>
        </div>
        <div class="mt-20">
          <img src="src/assets/icons/arrowBlack.png" height="10" width="20" class="mt-15" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  title: 'VParkHeader'
}
</script>

<style lang="scss" scoped>
@import './VParkHeader.scss';
</style>
