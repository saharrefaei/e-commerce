<template>
    <header>
        <nav class="component">
            <div class="branding">
                <router-links class="header" :to="{name : 'Home'}"></router-links>
            </div>
            <div class="NavbarLink">
                <ul>
                    <router-links class="Link" to="#">Home</router-links>
                    <router-links class="Link" to="#">Blogs</router-links>
                    <router-links class="Link" to="#">Create Blogs</router-links>
                    <router-links class="Link" to="#">Login / Register</router-links>
                </ul>
            </div>
        </nav>
        <img :src="NavbarIcon" alt="">

    </header>
</template>

<script>
    export default {
        name: 'NavigatioBar',
        data: function() {
    return {
        NavbarIcon: require('../img/icons8-menü-abgerundet-50.png')
    }
  }
    }
</script>

<style>

</style>