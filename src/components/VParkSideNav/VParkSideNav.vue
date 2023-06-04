<template>
  <!-- Side navigation -->
  <div class="sidenav font-roman-16">
    <a href="/"
      ><img src="../../assets/icons/home.svg" /><span
        >Home<span class="selected"><span class="blue-dot"></span></span></span
    ></a>
    <a href="/"><img src="../../assets/icons/transaction.svg" /><span>Operation</span></a>
    <a href="/"><img src="../../assets/icons/map.svg" /><span>Map</span></a>
    <a href="/"><img src="../../assets/icons/reports.svg" /><span>Reports</span></a>
    <a href="/"><img src="../../assets/icons/panel.svg" /><span>Control Panel</span></a>
  </div>
  <div class="needs-help">
    <VParkNeedsHelp />
  </div>
</template>

<script>
import VParkNeedsHelp from '../VParkNeedsHelp/VParkNeedsHelp.vue'

export default {
  title:'VParkSideNav',
  components: {
    VParkNeedsHelp
  }
}
</script>

<style lang="scss" scoped>
@import './VParkSideNav.scss';
</style>
