<template>
    <div class="bar">
            <el-menu
                    :default-active="this.$route.path"
                    router
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item class="el-menu-item" v-for=" (item,i) in navList" :key="i"  :index="item.path">{{  item.navName }}</el-menu-item>

            </el-menu>

            <el-main>
                <router-view></router-view>
            </el-main>

    </div>
</template>

<script>

    export default {
        name: "NavMenu",
        data() {
            return {
                activeIndex: "1",
                navList: [
                    {path: '/index', navName: '首页'},
                    {path: '/schoolQuery', navName: '学校查询'},
                    {path: '/userQuery', navName: '用户查询'},
                    {path: '/task', navName: '作业数据'},
                ]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                if (window.location.pathname === "/index") {
                    this.activeIndex = "1";
                }
                if (window.location.pathname === "/userQuery") {
                    this.activeIndex = "2";
                }
                if (window.location.pathname === "/schoolQuery") {
                    this.activeIndex = "3";
                }
                 if (window.location.pathname === "/task") {
                    this.activeIndex = "4";
                }
            },
        },
    };
</script>

<style scoped>
    .bar {
        background-color: rgb(84, 92, 100);
        width: 100%;
        height: 58px;
    }
    .el-menu-item{
        padding:0 40px
    }
    .el-menu-demo{
        width: 35%;
        float: right;
    }
</style>
