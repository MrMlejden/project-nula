<template>
    <div id="app">
        <div class="main-wrapper">
            <sidebar />
            <router-view />
        </div>
    </div>
</template>

<script>
import sidebar from '@/components/sidebar.vue';

export default {
    name: 'Homepage',
    components: {
        sidebar
    }
};
</script>

<style lang="scss" src="./app.scss"></style>
