<template>
  <section class="trip-route">
    <div class="font-bold-24 color--blue-5">Trip Route</div>

    <VParkTripRouteModal />
  </section>
</template>

<script>
import VParkTripRouteModal from "./VParkTripRouteModal.vue"
export default {
  title: 'VParkTripRoute',
  components: {
    VParkTripRouteModal,
  },
  data() {}
}
</script>

<style lang="scss">
.trip-route {
  background: #ffffff;
  box-shadow: 0px 15px 20px #1785c61a;
  border-radius: 20px;
  opacity: 1;
  height: 769px;
  padding: 40px;
}
</style>
