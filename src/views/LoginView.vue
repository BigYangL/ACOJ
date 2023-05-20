<script>
import {ref} from "vue";
import {User,Lock} from '@element-plus/icons-vue';
export default {

    name: "LogInView",

    setup(){
        const username = ref('')
        const password = ref('')
        return {
            username,password,User,Lock
        }
    },
    data(){
        return{
            left: false,
            right: false,
            message: "注册",
        }
    },
    methods:{
        run(){
            this.left = !this.left
            this.right = ! this.right
            if(this.message==="登录") {
                this.$refs.test.classList.remove("sign-up-mode");
                this.message = "注册"
            }
            else {
                this.$refs.test.classList.add("sign-up-mode");
                this.message = "登录"
            }
        },
    }

}
</script>
<template>
    <body>
    <div class="container" ref="test">
        <div class="forms-container">
            <div class="main">
                <div class="registerArea">
                    <el-row class="login-row"><el-col :offset="9"><h2 class="title">注册</h2></el-col></el-row>
                    <el-row class="login-row"><el-col :offset="2"><el-input v-model="username" placeholder="输入用户名" :prefix-icon="User"></el-input></el-col></el-row>
                    <el-row class="login-row"><el-col :offset="2"><el-input v-model="password" placeholder="输入密码" type="password" show-password prefix-icon="Lock"></el-input></el-col></el-row>
                    <el-row class="login-row"><el-col :offset="2"><el-input v-model="password" placeholder="确认密码" type="password" show-password prefix-icon="Lock"></el-input></el-col></el-row>
                    <el-row class="login-row"><el-col :offset="9"><el-button round class="btn1" type="success">注册</el-button></el-col></el-row>
                </div>
                <div class="loginArea">
                    <el-row class="login-row"><el-col :offset="9"><h2 class="title">登录</h2></el-col></el-row>
                    <el-row class="login-row"><el-col :offset="2"><el-input v-model="username" placeholder="输入用户名" :prefix-icon="User"></el-input></el-col></el-row>
                    <el-row class="login-row"><el-col :offset="2"><el-input v-model="password" placeholder="输入密码" type="password" show-password prefix-icon="Lock"></el-input></el-col></el-row>
                    <el-row class="login-row"><el-col :offset="9"><el-button round class="btn1" type="success">登录</el-button></el-col></el-row>
                </div>
            </div>
        </div>
        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>New Here ?</h3>
                    <p>注册一个账号吧！</p>
                    <el-button class="btn" id="sign-up-btn" @click="run" type="info">注册</el-button>
                </div>
                <img src="" class="image" alt="" />
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>One of us ?</h3>
                    <p>登录一个账号吧！</p>
                    <el-button class="btn" id="sign-in-btn" @click="run" type="info">登录</el-button>
                </div>
                <img src="" class="image" alt="" />
            </div>
        </div>
    </div>

    </body>
</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body,
input {
    font-family: "Poppins", sans-serif;
}

.container {
    position: relative;
    width: 100%;
    background-color: #fff;
    min-height: 100vh;
    overflow: hidden;
}

input {
    font-family: "Poppins", sans-serif;
}
/*before*/
.forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.container:before{  /*色块*/
    content:"";
    position: absolute;
    height: 2000px;
    width: 2000px;
    background-image: linear-gradient(-45deg, #181d4b 0%, #0c212b 100%);
    transform: translateY(-60%);
    top:-10%;
    right:48%;
    border-radius: 50%;
    transition: 1.8s ease-in-out;
    z-index:6;
}
.container .content{   /*色块上的文字样式*/
    color: #2c3e50;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
}

.panels-container{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.panel{                /*色块上的文字的排布和层次*/
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 6;
}
.panel h3 {          /*色块上的文字内容具体样式*/
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
}
.panel p {            /*色块上的文字内容具体样式*/
    font-size: 0.95rem;
    padding: 0.7rem 0;
}
.panel .content{
    color: #fff;
    transition: transform 0.9s ease-in-out;   /*出现和移出的时间*/
    transition-delay: 0.6s;  /*开始移动的延迟*/
}
.left-panel {
    pointer-events: all;
    left: -20%;
    padding: 3rem 17% 2rem 12%;
}
.right-panel {
    pointer-events: none;
    left: -10%;
    padding: 3rem 17% 2rem 12%;
}
.right-panel .content {
    transform: translateX(800px); /* 令right初始位置在界面外*/
}

/*ANIMATION*/
.container.sign-up-mode:before {   /*色块部分右移之后的位置*/
    transform: translate(100%, -60%);
    right: 50%;
}

  /*切换左部分的 字体*/
.container.sign-up-mode .left-panel .content {
    transform: translateX(-800px);  /* 令left位置在界面外*/
}

 /*切换右部分的 字体*/
.container.sign-up-mode .right-panel .content {
    transform: translateX(0%);
}
.container.sign-up-mode .main {  /*点击切换注册后，登录注册面板都移动到左边*/
    left: 25%;
}
.container.sign-up-mode .registerArea { /*注册面板显示 默认隐藏*/
    opacity: 1;
    z-index: 2;
}
.container.sign-up-mode .loginArea {  /*登录面板隐藏 默认显示*/
    opacity: 0;
    z-index: 1;
}
.container.sign-up-mode .left-panel {
    pointer-events: none;
}

.container.sign-up-mode .right-panel {
    pointer-events: all;
}


.main{   /*注册登录表格的初始位置+动画延迟*/
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 75%;
    width: 50%;
    transition: 1s 0.7s ease-in-out; /* 移动延迟 */
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
}

.loginArea{
    margin: auto;
    z-index: 2;
    transition: all 0.2s 0.9s;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}
.registerArea{
    transition: all 0.2s 0.9s;
    margin: auto;
    opacity: 0;
    z-index: 1;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

.login-row{
    margin: 25px;
}

.title {
    font-size: 2.2rem;
    font-weight: bold;
    color: #444;
    margin-bottom: 5px;
}

.btn{
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
}
.btn1{
    width: 100px;
    background-color: #0c212b;
    border: none;
    height: 49px;
    margin: 10px 0;
    transition: 0.3s;
}
</style>