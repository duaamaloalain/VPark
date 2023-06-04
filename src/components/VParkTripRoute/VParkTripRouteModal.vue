<template>
  <section class="trip-route-modal">
    <p class="font-bold-16 color--grey-100">
      Trip Route <img src="src/assets/icons/tooltip.png" height="20" width="20" class="middle" />
    </p>
    <p class="mt-10 color--grey-100">
      Draw Trip Route by Adding Start point, Way points, and End point
    </p>
    <hr class="mt-10 color--grey-100" />
    <div class="flex">
      <div class="mt-10">
        <p class="font-bold-16 color--grey-100">Trip name</p>
        <button class="btn-style mt-10">Trip 2</button>
      </div>
      <div class="mt-10">
        <p class="font-bold-16 color--grey-100">Sector</p>
        <button class="btn-style mt-10">
          Marina
          <img src="src/assets/icons/arrow.png" height="10" width="20" class="mt-15" />
        </button>
      </div>
    </div>
    <hr class="mt-10 color--grey-100" />
    <div class="flex">
      <p class="font-roman-16 my-15">
        Auto Generate
        <img src="src/assets/icons/tooltip.png" height="20" width="20" class="middle" />
      </p>
      <div class="icon-style"><img src="src/assets/icons/auto.svg" /></div>
    </div>
    <hr class="mt-10 color--grey-100" />

    <div class="flex">
      <div class="mt-10 box-style">
        <p class="font-roman-16 w-20 color--grey-100">Add Start Point</p>
        <button class="mt-19 plus plus-green"><img src="src/assets/icons/plusGreen.svg" /></button>
      </div>
      <div class="mt-10 box-style">
        <p class="font-roman-16 w-20 color--grey-100">Add Way Point</p>
        <button class="mt-19 plus plus-orange"><img src="src/assets/icons/plus.svg" /></button>
      </div>
      <div class="mt-10 box-style">
        <p class="font-roman-16 w-20 color--grey-100">Add Stop Point</p>
        <button class="mt-19 plus plus-red"><img src="src/assets/icons/plusRed.svg" /></button>
      </div>
    </div>

    <hr class="mt-10 color--grey-100" />
    <div class="flex">
      <button class="secondary-btn font-bold-16 color--white">cancel</button>
      <button class="primary-btn font-bold-16 color--white">save</button>
    </div>
  </section>
</template>

<script>
export default {
  title: 'VParkTripRouteModal'
}
</script>

<style lang="scss" scoped>
@import './VParkTripRouteModal.scss';
</style>
