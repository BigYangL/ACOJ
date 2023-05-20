<template>
<body>
  <div class="login">
      <el-button color="#2a5caa" @click="Jumplogin">登录注册界面</el-button>
  </div>
  <div class="about">
      <el-button color="#bed742" @click="JumpAbout">主界面</el-button>
  </div>
</body>

</template>

<script>
export default {
  name: "IndexView",
    setup(){
      return{}
    },
    methods:{
        Jumplogin(){
            this.$router.push("/login")
        },
        JumpAbout(){
            this.$router.push("/test")
        }
    },

}

</script>

<style scoped>
.login, .about{
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin: 10px;
    padding: 10px;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(
      125deg, #2c3e50, #27ae60, #2980b9, #e74c3c, #8e44ad
    );
    background-size: 400%;
    animation: bgmove 20s infinite;
}
@keyframes bgmove {
    0%{
        background-position: 0 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0 50%;
    }
}
/*
.out{
    width: 100%;
    height: 100%;
    border: 2px solid #4481eb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.in{
    font-size: 40px;
    background:green;
}
*/
/*
.out{
    width: 200px;
    height: 200px;
    border: 1px solid #f2f2f2;
    background: #444444;
    position: relative;
}
.in{
    background: green;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}*/
/*
.out{
    width: 200px;
    height: 200px;
    border: 1px solid #f2f2f2;
    background: #444444;
}
.out::before{
    content: '';
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    background: red;
}
.in{
    font-size: 50px;
    background: #4481eb;
    vertical-align: middle;
    display: inline-block;
}*/
</style>