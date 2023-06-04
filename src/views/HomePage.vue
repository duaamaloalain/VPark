<template>
  <section>
    <p class="font-black-24 color--blue-7 mb-20">Welcome! John Doe</p>
    <div class="grid-container">
      <div class="item1">
        <VParkFleet />
      </div>
      <div class="item2">
        <VParkChart />
      </div>

      <div class="item3">
        <VParkTextWithIconCard
          icon-src="src/assets/icons/BGv.png"
          title="Total Violations"
          number="2,108"
        />
      </div>
      <div class="item4">
        <VParkTextWithIconCard
          icon-src="src/assets/icons/BGc.png"
          title="Total Active Vehicles"
          number="48"
        />
      </div>
      <div class="item5">
        <VParkTextWithIconCard
          icon-src="src/assets/icons/BGs.png"
          title="Total Dectations"
          number="100,000"
        />
      </div>
      <div class="item6">
        <VParkTextWithIconCard
          icon-src="src/assets/icons/BG.png"
          title="Total Distance in KM"
          number="50,000"
        />
      </div>
    </div>
    <div class="mt-66">
      <VParkBanner />
    </div>
    <div class="mt-46">
      <VParkTripRoute />
    </div>
  </section>
</template>

<script>
import VParkTextWithIconCard from '../components/VParkTextWithIconCard/VParkTextWithIconCard.vue'
import VParkFleet from '../components/VParkFleet/VParkFleet.vue'
import VParkChart from '../components/VParkChart/VParkChart.vue'
import VParkBanner from '../components/VParkBanner/VParkBanner.vue'
import VParkTripRoute from '../components/VParkTripRoute/VParkTripRoute.vue'

export default {
  components: {
    VParkTextWithIconCard,
    VParkFleet,
    VParkChart,
    VParkBanner,
    VParkTripRoute
  }
}
</script>

<style>
.item1 {
  grid-area: main;
}
.item2 {
  grid-area: chart;
}
.item3 {
  grid-area: violation;
}
.item4 {
  grid-area: dectations;
}
.item5 {
  grid-area: vehicles;
}
.item6 {
  grid-area: distance;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'main main   chart  chart'
    'main main  violation  vehicles'
    'main main    dectations  distance';
  gap: 20px;
}

.grid-container > div {
  text-align: center;
}
</style>
