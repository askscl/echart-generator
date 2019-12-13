import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EditLine from '@/components/edits/LineChart'
import EditBar from '@/components/edits/Bar'
import EditPie from '@/components/edits/Pie'
import EditRadar from "@/components/edits/Radar"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/edit-line',
            name: 'EditLine',
            component: EditLine
        },
        {
            path:'/edit-bar',
            name:'EditBar',
            component:EditBar
        },
        {
            path:'/edit-pie',
            name:'EditPie',
            component:EditPie
        },
        {
            path:'/edit-radar',
            name:'EditRadar',
            component:EditRadar
        }
    ]
})
