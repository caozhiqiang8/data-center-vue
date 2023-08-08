<template>

    <div class="navbar">
        <el-tabs v-model="this.activeName" type="card" @tab-click="handleClick">
            <el-tab-pane v-for="(item, index) in this.navBarList" :key="index" :label="item.label"
                         :name="item.name"></el-tab-pane>
        </el-tabs>
    </div>

</template>

<script>
    import {toRaw} from "@vue/reactivity";

    export default {
        name: "NavBar",
        props: {
            activeName: {
                type: String,
                default: 'first'
            },
            navBarList: {
                type: Object,
            },
            showList: {
                type: Object
            }
        },
        data() {
            return {

            }
        },
        methods: {
            handleClick(tab) {
                 // console.log(toRaw(tab.props.name));
                this.$parent.show(toRaw(tab.props.name))

            },

        }
    }
</script>

<style scoped>
    .navbar {
        margin: 40px 0px -20px 200px;
    }
</style>