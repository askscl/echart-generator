<template>
  <!--width: 500px; height: 300px;-->
  <div ref="main" style=""></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "Bar",
    data() {
      return {
        myChart: {},
        name: '柱状图',
        echartsType:['line','bar'],
        xData:['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        valueData:[5, 20, 36, 10, 10, 20]
      }
    },
    methods:{
      draw(domId){
        this.myChart = echarts.init(this.$refs[domId]);
        this.myChart.setOption({
          title: {
            text: this.name
          },
          tooltip: {},
          xAxis: {
            data:this.xData
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: this.echartsType[1],
            data:this.valueData
          }]
        })
      }
    },
    mounted(){
      this.$nextTick(function () {
        this.draw('main');
      })
    }
  }
</script>

<style scoped>
</style>
