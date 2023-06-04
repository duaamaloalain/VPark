<template>
  <section class="card-size">
    <img :src="iconSrc" class="mt-50" alt="park" title="" />
    <p class="number-style font-bold-26">{{ number }}</p>
    <p class="font-roman-20">{{ title }}</p>
  </section>
</template>
<script>
export default {
  title: 'VParkTextWithIconCard',
  data() {
    return {}
  },
  props: {
    iconSrc: {
      type: String
    },
    title: {
      type: String
    },
    number: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.card-size {
  height: 240px;
  background-color: #ffffff;
  box-shadow: 0px 15px 20px #1785c61a;
  border-radius: 20px;
  opacity: 1;
}
</style>
