<template>
  <div class="main">
    <div class="operation ">
      <router-link to="/edit-line">编辑</router-link>
    </div>
    <div class="list clearfix">
      <LineChart class="item"/>
      <Bar class="item"/>
      <Pie class="item"/>
      <Radar class="item"/>
    </div>
  </div>
</template>

<script>
  import LineChart from './labs/LineChart'
  import Bar from './labs/Bar'
  import Pie from './labs/Pie'
  import Radar from "./labs/Radar"

  export default {
    name: "home",
    components: {
      LineChart,
      Bar,
      Pie,
      Radar
    }
  }
</script>

<style scoped>
  .main{ width: 1200px; margin: 0 auto; position:relative;}
  .operation{ width: 46px; height: 28px; position: absolute; top:0; right: 0;}
  .operation a{ width: 46px; height: 28px; line-height: 28px; float: right; display: block; text-align: center; border-radius: 4px; background: #1890FF; color: #fff; font-size: 12px;}
  .operation a:hover{ opacity: 0.7;}
  .list{ width: 1000px; margin: 0 auto;}
  .list .item{ overflow: hidden; float:left; width: 50%; height: 300px;}
</style>
