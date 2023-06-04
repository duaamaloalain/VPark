<template>
  <div>
    <div class="accordions">
      <dl v-for="(row, id) in rows" :key="id">
        <dt v-on:click="row.open = !row.open" :class="`${row.open ? 'radius-btm' : ''}`">
          <div class="flex">
            <img
              src="src/assets/icons/car.png"
              width="77"
              height="84"
              :class="`${row.open ? 'mt--15' : 'mt--34'}`"
            />
            <span :class="`circle mt-10 ${row.color}`"></span>
            <span class="font-roman-16 color--blue-5 mt-5">{{ row.title }}</span>
          </div>
          <div>
            <img
              src="src/assets/icons/arrow.png"
              height="10"
              width="20"
              :class="`mt-15 ${row.open ? 'rotate-icon' : ''}`"
            />
          </div>
        </dt>
        <dd v-if="row.open">
          <VParkAccordionContent />
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import VParkAccordionContent from './VParkAccordionContent.vue'
export default {
  title: 'VParkAccordion',
  components: {
    VParkAccordionContent
  },
  data() {
    return {
      rows: {
        item1: {
          title: 'Smart Vehicle 1',
          open: false,
          color: 'bg--orange'
        },
        item2: {
          title: 'Smart Vehicle 2',
          open: false,
          color: 'bg--green'
        },
        item3: {
          title: 'Smart Vehicle 3',
          open: false,
          color: 'bg--green'
        },
        item4: {
          title: 'Smart Vehicle 4',
          open: false,
          color: 'bg--orange'
        },
        item45: {
          title: 'Smart Vehicle 5',
          open: false,
          color: 'bg--red'
        },
        item6: {
          title: 'Smart Vehicle 6',
          open: false,
          color: 'bg--green'
        },

        item7: {
          title: 'Smart Vehicle 7',
          open: false,
          color: 'bg--green'
        },
        item8: {
          title: 'Smart Vehicle 8',
          open: false,
          color: 'bg--red'
        },
        item9: {
          title: 'Smart Vehicle 9',
          open: false,
          color: 'bg--orange'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './VParkAccordion.scss';
</style>
