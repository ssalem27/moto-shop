<script setup>
    import Content from '../components/Content.vue';
    import contentList from '../data/contentList.json'
</script>

<template>
    <div class="bg-slate-400">
        <Content v-for="(content, index) in contentList" :key="index" :content="content"/>
    </div>
    
</template>