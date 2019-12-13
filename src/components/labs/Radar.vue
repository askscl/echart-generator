<template>
  <div ref="main"></div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: "radar",
    data(){
      return {
        myChart:{},
        //图例说明
        legendList:['预算分配', '实际开销'],
        //指示器
        indicatorList:[
          { name: '销售', max: 6500},
          { name: '管理', max: 16000},
          { name: '信息技术', max: 30000},
          { name: '客服', max: 38000},
          { name: '研发', max: 52000},
          { name: '市场', max: 25000}
        ],
        //具体数据
        valueData:[
          {
            value : [4300, 10000, 28000, 35000, 50000, 19000],
            name : '预算分配（Allocated Budget）'
          },
          {
            value : [5000, 14000, 28000, 31000, 42000, 21000],
            name : '实际开销（Actual Spending）'
          }
        ]
      }
    },
    methods : {
      draw(id) {
          this.myChart = echarts.init(this.$refs[id]);
          this.myChart.setOption({
            title: {
              text: '雷达图'
            },
            tooltip: {},
            legend: {
              data: this.legendList,
              x:'right'
            },
            radar: {
              name: {
                textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
                }
              },
              indicator: this.indicatorList
            },
            series: [{
              name: '预算 vs 开销（Budget vs spending）',
              type: 'radar',
              data :this.valueData
            }]
          });
      }
    },
    mounted() {
      this.$nextTick(function(){
        this.draw('main');
      })
    }
  }
</script>

<style scoped>

</style>
