<template>
    <!--一级导航-->
    <NavMenu></NavMenu>
    <!--二级导航-->
    <NavBar :activeName="activeName" :navBarList="navBarList"></NavBar>

    <div style="margin: 50px 200px">
        <!--用户密码查询-->
        <div v-show="userQueryShow">
            <el-form ref="form" :model="form" label-width="100px"
                     style="width: 500px;margin-top:20px">
                <el-form-item label="教师用户名">
                    <el-input v-model="form.teaName"></el-input>
                </el-form-item>

                <el-form-item label="学生用户名">
                    <el-input v-model="form.stuName"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="getUser">查询</el-button>
                </el-form-item>
            </el-form>

            <!--用户帐号密码查询表格-->
            <el-table
                    :data="usrInfo"
                    border
                    stripe
                    style="width: 100%;margin-top: 50px"
                    :default-sort="{prop: 'date', order: 'descending'}"
                    empty-text="点击查询按钮查询数据"
                    element-loading-background="rgba(0, 0, 0, 0.5)"
            >
                <el-table-column v-for="(item,index) in userTableList " :prop="item.prop" :label="item.label"
                                 sortable></el-table-column>
            </el-table>

        </div>
        <!--学校帐号密码查询-->
        <div v-show="schoolQueryShow"></div>

    </div>

</template>

<script>
    import NavMenu from "@/components/NavMenu";
    import NavBar from "@/components/NavBar";
    import axios from "../utils/requests.js";

    export default {
        name: "UserQuery",
        components: {
            NavMenu,
            NavBar
        },
        data() {
            return {
                activeName: 'first',//二级导航
                navBarList: [
                    {label: '用户密码查询', name: 'first'},
                    {label: '期待', name: 'second'},
                    {label: '期待', name: 'third'},
                    {label: '期待', name: 'fourth'},
                ],
                userQueryShow: true,
                form: {
                    teaName: '',
                    stuName: '',
                },
                usrInfo: [],
                userTableList: [
                    {prop: "name", label: "学校名称"},
                    {prop: "school_id", label: "学校名称"},
                    {prop: "ett_user_id", label: "JID"},
                    {prop: "user_name", label: "用户名"},
                    {prop: "password", label: "密码"},
                    {prop: "real_name", label: "真实姓名"},
                    {prop: "state_id", label: "有效状态"},
                    {prop: "c_time", label: "创建时间"},
                ],
                schoolQueryShow: false,

            }
        },
        methods: {
            getUser() {
                console.log(this.form.teaName, this.form.stuName);
                if (this.form.teaName != '' || this.form.stuName != '') {
                    axios.post('/userQuery', {'teaName': this.form.teaName, 'stuName': this.form.stuName})
                        .then(data => {
                            if (data.data.usrInfo.length > 0) {
                                this.usrInfo = data.data.usrInfo
                                this.form.teaName = ''
                                this.form.stuName = ''
                                console.log(data.data.usrInfo);
                            } else {
                                this.$message({
                                    message: "帐号不存在，请重新输入",
                                    type: "error",
                                });
                            }
                        })
                        .catch(err => (console.log(err)))
                } else {
                    this.$message({
                        message: "也没输入东西啊，你让我怎么查？",
                        type: "error",
                    });
                }
            }
        },


    }
</script>

<style scoped>

</style>