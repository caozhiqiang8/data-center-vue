<template>
    <div>
        <NavMenu></NavMenu>
        <MapEcharts :MapData="MapData" v-if="flag"></MapEcharts>
    </div>
</template>

<script>
    import NavMenu from "@/components/NavMenu.vue";
    import MapEcharts from "@/components/MapEcharts.vue";
    import axios from "../utils/requests.js";

    export default {
        components: {
            NavMenu,
            MapEcharts,
        },
        name: "Index",
        data() {
            return {
                MapData: '',
                flag:false
            };
        },
        created() {
            axios
                .get("/getMap")
                .then((data) => {
                    this.MapData = data.data;
                    // console.log('父亲获取数据',this.MapData);
                    this.flag = true
                })
                .catch((err) => console.log(err));
        }
    };
</script>

<style></style>
