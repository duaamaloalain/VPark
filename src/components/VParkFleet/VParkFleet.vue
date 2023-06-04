<template>
  <section class="box">
    <div class="flex">
      <div class="font-bold-24 color--blue-5">VPark Fleet</div>
      <div>
        <button class="icons" type="button">
          <img class="m-auto" height="22" width="23" src="src/assets/icons/Group.svg" />
        </button>
        <button class="icons" type="button">
          <img class="m-auto" height="22" width="23" src="src/assets/icons/menu.png" />
        </button>
      </div>
    </div>
    <div class="scrollbar">
      <VParkAccordion />
    </div>
  </section>
</template>
<script>
import VParkAccordion from './VParkAccordion.vue'
export default {
  title: 'VParkFleet',
  components: {
    VParkAccordion
  },
  data() {
    return {}
  },
  props: {}
}
</script>

<style lang="scss" scoped>
@import './VParkFleet.scss';

</style>
