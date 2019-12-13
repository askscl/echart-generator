<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div ref="main"></div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name: 'Pie',
    data () {
      return {
        name:"饼状图",
        charts: '',
        opinion: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        opinionData:[
          {value:335, name:'直接访问'},
          {value:310, name:'邮件营销'},
          {value:234, name:'联盟广告'},
          {value:135, name:'视频广告'},
          {value:1548, name:'搜索引擎'}
        ]
      }
    },
    methods:{
      drawPie(id){
        this.charts = echarts.init(this.$refs[id]);
        this.charts.setOption({
          title:{
            text: this.name,
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}:{c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:this.opinion
          },
          series: [
            {
              name:'访问来源',
              type:'pie',
              radius:'50%',
              center: ['50%', '60%'],
              data:this.opinionData
            }
          ]
        })
      }
    },
    //调用
    mounted(){
      this.$nextTick(function() {
        this.drawPie('main')
      })
    }
  }
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
