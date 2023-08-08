<template>
    <NavMenu></NavMenu>
    <NavBar :activeName="activeName" :navBarList="navBarList "></NavBar>
    <div class="eveyDayTaskShow" v-show="showList.eveyDayTaskShow">
        <LineEcharts v-if='flag' :lineData="lineData"></LineEcharts>
    </div>
    <div v-show="showList.schoolTaskShow"></div>
</template>

<script>
    import NavMenu from "@/components/NavMenu";
    import NavBar from "@/components/NavBar";
    import LineEcharts from "@/components/LineEcharts";
    import axios from '@/utils/requests.js'

    export default {
        name: "Task",
        components: {
            NavMenu, NavBar, LineEcharts
        },
        data() {
            return {
                activeName: 'first',//二级导航
                navBarList: [
                    {label: '每日作业趋势', name: 'first'},
                    {label: '学校作业情况', name: 'second'},
                    {label: '最近7天学校作业', name: 'third'},
                    {label: '期待', name: 'fourth'},
                ],
                flag: false,
                lineData: {
                    names: [],
                    lineX: [],
                    lineY: []
                },
                showList: {
                    eveyDayTaskShow: true,
                    schoolTaskShow: false,
                }
            }
        },
        methods: {
            getEveyDayTask() {
                axios.get('/getTaskCount')
                    .then(data => {
                        this.lineData.names = data.data.type_name
                        this.lineData.lineX = data.data.x_date
                        this.lineData.lineY = data.data.y_list
                        this.flag = true

                    })
                    .catch(err => (console.log(err)))
            },
            show(tab) {
                console.log(tab)
                if (tab === 'first') {
                    this.showList.eveyDayTaskShow = true
                    this.showList.schoolTaskShow = false
                }
                if (tab === 'second') {
                    this.showList.eveyDayTaskShow = false
                    this.showList.schoolTaskShow = true
                }
            }
        },
        mounted() {
            this.getEveyDayTask()
        }

    }
</script>

<style scoped>
    .eveyDayTaskShow {
        width: 1600px;
        height: 700px;
        margin: 20px auto;
    }
</style>