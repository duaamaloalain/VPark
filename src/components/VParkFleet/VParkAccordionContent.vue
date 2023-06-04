<template>
  <div class="flex accordion-content">
    <div class="ml-60">
      <img src="src/assets/icons/camera.svg" height="25" width="29" />
      <p class="color--grey-100 font-roman-12 mt-10">camera</p>
      <p class="color--blue-5 font-bold-16 mt-3">online</p>
      <div class="active bg--green-1 font-roman-12">
        <span class="active-text"> active</span>
        <span class="dot"></span>
      </div>
    </div>
    <div class="ml-60">
      <img src="src/assets/icons/wifi.svg" height="25" width="29" />
      <p class="color--grey-100 font-roman-12 mt-10">Network</p>
      <p class="color--blue-5 font-bold-16 mt-3">Available</p>
      <div class="active bg--green-1 font-roman-12">
        <span class="active-text"> active</span>
        <span class="dot"></span>
      </div>
    </div>
    <div class="ml-60">
      <img src="src/assets/icons/memory.svg" height="25" width="29" />
      <p class="color--grey-100 font-roman-12 mt-10">Memory</p>
      <p class="color--blue-5 font-bold-16 mt-3">20%</p>
      <div class="active bg--green-1 font-roman-12">
        <span class="active-text"> active</span>
        <span class="dot"></span>
      </div>
    </div>
    <div class="ml-60">
      <img src="src/assets/icons/temp.svg" height="25" width="29" />
      <p class="color--grey-100 font-roman-12 mt-10">CPU Temp</p>
      <p class="color--blue-5 font-bold-16 mt-3">70</p>
      <div class="active bg--red font-roman-12">
        <span class="active-text">active</span>
        <span class="dot"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: 'VParkAccordionContent'
}
</script>

<style lang="scss" scoped>
@import './VParkAccordionContent.scss';
</style>
