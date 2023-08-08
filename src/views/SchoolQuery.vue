<template>
    <!--一级导航-->
    <NavMenu></NavMenu>
    <!--二级导航-->
    <NavBar :activeName="activeName" :navBarList="navBarList"></NavBar>
    <!-- 学校信息查询   -->
    <div class="navbar" style="margin: 50px 200px">
        <el-form ref="form" :model="form" label-width="100px"
                 style="width: 500px;margin-top:20px">
            <el-form-item label="学校名称">
                <el-input v-model="form.schoolName"></el-input>
            </el-form-item>
            <el-form-item label="学校ID">
                <el-input v-model="form.schoolId"></el-input>
            </el-form-item>
            <el-form-item>
                    <el-button type="primary" @click="getSchoolInfo">查询</el-button>
            </el-form-item>
        </el-form>

         <!--学校信息表格-->
            <el-table
                    :data="schoolInfo"
                    border
                    stripe
                    style="width: 100%;margin-top: 50px"
                    :default-sort="{prop: 'date', order: 'descending'}"
                    empty-text="点击查询按钮查询数据"
                    element-loading-background="rgba(0, 0, 0, 0.5)"
            >
                <el-table-column v-for="(item,index) in schoolTableList " :prop="item.prop" :label="item.label"  :key="index"  sortable></el-table-column>

            </el-table>

    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";
    import NavMenu from "@/components/NavMenu";
    import axios from "../utils/requests.js";

    export default {
        name: "SchoolQuery",
        components: {
            NavBar, NavMenu
        },
        data() {
            return {
                activeName: 'first',//二级导航
                navBarList: [
                    {label: '学校信息查询', name: 'first'},
                    {label: '期待', name: 'second'},
                    {label: '期待', name: 'third'},
                    {label: '期待', name: 'fourth'},
                ],
                form: {
                    schoolName: "",
                    schoolId: "",
                },
                schoolInfo: [],
                schoolTableList:[
                     {prop: "school_id", label: "学校ID"},
                     {prop: "name", label: "学校名称"},
                     {prop: "province", label: "省"},
                     {prop: "city", label: "市"},
                     {prop: "validity_time", label: "到期时间"},
                     {prop: "school_type", label: "学校类型"},
                     {prop: "user_name", label: "管理员"},
                     {prop: "password", label: "密码"},
                ],
            }
        },
        methods: {
            getSchoolInfo() {
                console.log(this.form.schoolId, this.form.schoolName)
                if (this.form.schoolId != '' || this.form.schoolName != '') {
                    axios.post('schoolInfo', {'school_name': this.form.schoolName, 'school_id': this.form.schoolId})
                        .then(data => {
                            if (data.data.schoolInfo.length > 0) {
                                this.schoolInfo = data.data.schoolInfo
                            } else {
                                this.$message({
                                    message: '不存在，请重新输入',
                                    type: 'error'
                                })
                            }

                        })
                        .catch(err => (console.log(err)))
                } else {
                    this.$message({
                        message: '也没输入东西啊，你让我怎么查？',
                        type: 'error'
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>