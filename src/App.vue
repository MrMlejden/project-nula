<template>
    <div id="app">
        <div id="nav" class="main-wrapper">
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

<style lang="scss">
body {
    background-color: #dadee1;
    margin-left: 250px;
}

#app {
    font-family: 'Roboto Light', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #c7cbcb;
}

#nav {
    padding-top: 10px;
}

#nav a {
    color: #c7cbcb;
    text-decoration: none;
}

#nav a.router-link-exact-active {
    color: #e3ba87;
}
</style>
