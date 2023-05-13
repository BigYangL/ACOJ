
<template>
  <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :ellipsis="false" background-color="#1d1626" text-color="#d3d7d4" active-text-color="#00ae9d">
      <el-menu-item></el-menu-item>
      <el-menu-item class="ACOJ" index="1">ACOJ</el-menu-item>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">活动</el-menu-item>
      <el-menu-item index="4">题库</el-menu-item>
      <el-menu-item index="5">竞赛</el-menu-item>
      <el-menu-item index="6">应用</el-menu-item>
      <el-sub-menu index="7">
          <template #title>更多</template>
          <el-menu-item index="7-1">题解</el-menu-item>
          <el-menu-item index="7-2">分享</el-menu-item>
          <el-menu-item index="7-3">商店</el-menu-item>
          <el-menu-item index="7-4">问答</el-menu-item>
          <el-menu-item index="7-5">吐槽</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="8">App</el-menu-item>
      <div class="flex-grow"/>
      <el-menu-item index="9">
          <el-icon><ChatDotSquare /></el-icon><span>消息</span>
      </el-menu-item>
      <el-sub-menu index="10">
          <template #title><el-icon><User /></el-icon></template>
          <el-menu-item>我的空间</el-menu-item>
          <el-menu-item>个人信息</el-menu-item>
          <el-menu-item>校园</el-menu-item>
          <el-menu-item>我的订单</el-menu-item>
          <el-menu-item>我的工单</el-menu-item>
          <el-menu-item>退出</el-menu-item>
      </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import {ref} from "vue";
const activeIndex = ref('1')
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
