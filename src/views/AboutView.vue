<template>
  <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :ellipsis="false" router=router
           background-color="#1d1626"
           text-color="#d3d7d4"
           active-text-color="#00ae9d">
      <el-menu-item class="ACOJ" index="/" >ACOJ</el-menu-item>
      <el-menu-item index="/test/test1">首页</el-menu-item>
      <el-menu-item index="/test/test2">活动</el-menu-item>
      <el-menu-item index="/test/test3">题库</el-menu-item>
    <el-menu-item index="/test/test4">竞赛</el-menu-item>
      <el-menu-item index="/test/test5">应用</el-menu-item>
      <el-sub-menu index="1">
          <template #title>更多</template>
          <el-menu-item index="/test/test6-1">题解</el-menu-item>
          <el-menu-item index="/test/test6-2">分享</el-menu-item>
          <el-menu-item index="/test/test6-3">商店</el-menu-item>
          <el-menu-item index="/test/test6-4">问答</el-menu-item>
          <el-menu-item index="/test/test6-5">吐槽</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/test/test7">App</el-menu-item>
      <div class="flex-grow"/>
      <el-menu-item index="/test/test8">
          <el-icon><ChatDotSquare/></el-icon><span>消息</span>
      </el-menu-item>
      <el-sub-menu index="2">
          <template #title><el-icon><User/></el-icon></template>
          <el-menu-item>我的空间</el-menu-item>
          <el-menu-item>个人信息</el-menu-item>
          <el-menu-item>校园</el-menu-item>
          <el-menu-item>我的订单</el-menu-item>
          <el-menu-item>我的工单</el-menu-item>
          <el-menu-item>退出</el-menu-item>
      </el-sub-menu>
  </el-menu>
  <el-main>
      <router-view/>
  </el-main>
</template>

<script lang="ts" setup>
import {
    ChatDotSquare,
    User,
} from '@element-plus/icons-vue'
import {ref} from "vue";
const activeIndex = ref('/test/test1')
</script>

<style scoped>
.ACOJ{
    text-shadow: #444444;
    font-size: large;
    font-weight: bold;
    font-style: italic;
}

.flex-grow{
    flex-grow: 1;
}

</style>
