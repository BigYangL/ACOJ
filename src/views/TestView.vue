<script setup>
import {computed, ref} from "vue";
import BlogPost from "@/components/BlogPost.vue";
const blogs=ref([
  {
    id:1,
    title:"阿晨",
    content:"你好，我是电子阿晨",
    link:"#",
  },
  {
    id:2,
    title:"李智杰",
    content:"你好，我是电子李智杰",
    link:"#",
  },
  {
    id:3,
    title:"群主",
    content:"你好，我是仿生群主",
    link:"#",
  }
]);
const total = computed(() => blogs.value.length);
const showTotal = ref(true);
function toggleTotal(){
  showTotal.value = !showTotal.value;
}
const initialBlogForm = {
  title:"",
  content:"",
  link:"",
}
const blogForm = ref({...initialBlogForm})
function addPost(){
  blogs.value.push({
    id: blogs.length+1,
    ...blogForm.value,
  });
  blogForm.value = {...initialBlogForm}
}
function handTitleclick(title){
  console.log(title);
}
</script>

<template>
  <BlogPost @titleClick="handTitleclick" v-for="blog in blogs" :key="blog.id" v-bind="blog">
    <button>分享到微信</button>
  </BlogPost>
  <h3 v-if="showTotal">总共 {{total}} 篇</h3>
  <form @submit.prevent="addPost">
    <lable for="blogTitle">博客标题</lable>
    <input type="text" id="blogTitle" v-model="blogForm.title">
    <lable for="content">内容</lable>
    <textarea id="content" cols="30" rows="10" v-model="blogForm.content"></textarea>
    <label for="link">链接</label>
    <input type="text" id = "link" v-model="blogForm.link">
    <button type="submit">提交</button>
  </form>
  <button @click="toggleTotal">{{ showTotal ? "隐藏" : "显示" }}总数</button>
</template>

<style scoped>
form {
  display: grid;
  /*grid-template-columns: 1fr;*/
  margin-top: 2em;
}
</style>