import axios from "axios";

// 初始化实例
var instance = axios.create({
    //请求前缀
    baseURL: 'http://192.168.10.122:8080',
    // 请求超时时间
    timeout: 20000,
});
//导出axios 实例
export default instance