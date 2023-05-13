<template>
  <div>
    <h1>
      <a :href="link" @click.prevent="$emit('titleClick', title)">{{ title }}</a>
    </h1>
    <article>
      <div>
        {{content.slice(0, 100)}}
      </div>
      <p>阅读量:{{ viewCount }}</p>
      <footer v-if="content.length > 100">
        <button>显示原文</button>
      </footer>
    </article>
  </div>
  <slot></slot>
</template>

<script setup>
  import {ref, onMounted} from "vue";
  defineEmits(["titleClick"]);
  defineProps(["title", "content", "link"]);

  const viewCount = ref(0);

  onMounted(() => {
    setTimeout(() => {
      viewCount.value = 10000;
    }, 1000);
  })
</script>
