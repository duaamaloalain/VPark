<template>
    <section class="chart-box">
        <CanvasJSChart :options="options" :styles="styleOptions" />
    </section>
</template>

<script>
export default {
    title: 'VParkChart',

    data() {
        return {
            options: {
                theme: 'light2',
                animationEnabled: true,
                responsive: true,
                   
                    title: {
                        text: 'Active Vehicles Vs. In-Active Vehicles'
                    },

                data: [{
                    type: 'pie',
                    indexLabel: '(#percent%)' + `{label}`,
                    toolTipContent: "<span style='\"'color: {color};'\"'>{label}</span> {y}(#percent%)",
                    dataPoints: [
                        { label: 'Active Vehicles', y: 19250 },
                        { label: 'In-Active Vehicles', y: 28874 }
                    ],
                    labels: ['Red', 'Yellow']
                }]
            },
            styleOptions: {
                width: '100%',
                height: '250px'
            }
        }
    }
}
</script>

<style lang="scss" >
  @import './VParkChart.scss';
</style>
