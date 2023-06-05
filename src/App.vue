<template>
  <!-- the header -->
  <VParkHeader />
  <!-- page details -->
  <div class="row">
    <div class="column-sidebar">
      <!-- side nav -->
      <VParkSideNav />
    </div>
    <div class="column bg--blue-1 up-arrow">
      <!-- the page content -->
      <RouterView />
    </div>
  </div>
</template>

<script>
import VParkHeader from './components/VParkHeader/VParkHeader.vue';
import VParkSideNav from './components/VParkSideNav/VParkSideNav.vue';
export default {
  components: {
    VParkHeader,
    VParkSideNav,
  },
}
</script>


<style>
.row {
  display: flex;
}
.column {
  border-top-left-radius: 30px;
  padding: 30px 40px;
}
.column-sidebar {
  width: 294px;
}
/* .up-arrow {
    display: inline-block;
    position: relative;
}
.up-arrow:before {
    content: '';
    display: block;  
    position: absolute;
    transform: rotate(-0.25turn);
    top: 2.6%;
    right: 100%;
    border: 30px solid transparent;
    border-bottom-color: #E7F0F9;
} */
</style>
