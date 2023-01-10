<template>
    <header class="Header">
        <nav class="component">
            <div class="branding">
                <router-link class="header" :to="{name : 'Home'}">E-Commerce</router-link>
            </div>
            <div class="NavbarLink">
                <ul v-show="!PhoneNavbarIcone">
                    <router-link class="NavbarLink-Link" to="#">Home</router-link>
                    <router-link class="NavbarLink-Link" to="#">Blogs</router-link>
                    <router-link class="NavbarLink-Link" to="#">Create Blogs</router-link>
                    <router-link class="NavbarLink-Link" to="#">Login / Register</router-link>
                </ul>
            </div>
            <img :src="NavbarIcon" alt="" @click="ToggleNavBarIcone">
        </nav>


        <transition class="NavbarLinkForPhone">
            <ul v-show="PhoneNavbarIcone">
                <router-links class="NavbarLinkForPhone-Link" to="#">Home</router-links>
                <router-links class="NavbarLinkForPhone-Link" to="#">Blogs</router-links>
                <router-links class="NavbarLinkForPhone-Link" to="#">Create Blogs</router-links>
                <router-links class="NavbarLinkForPhone-Link" to="#">Login / Register</router-links>
            </ul>
        </transition>

    </header>
</template>

<script>
    export default {
        name: 'NavigatioBar',
        data() {
            return {
                NavbarIcon: require('../img/icons8-menü-abgerundet-50.png'),
                Phone: null,
                PhoneNavbarIcone: null,
                ScreenWidth: null
            }
        },
        created() {
            window.addEventListener("resize", this.ShowNavBar);
            this.ShowNavBar();
        },
        methods: {

            ShowNavBar() {
                this.ScreenWidth = window.innerWidth;
                if (this.ScreenWidth <= 750) {
                    this.PhoneNavbarIcone = true;
                    return;
                }
                this.Phone = false;
                this.PhoneNavbarIcone = false;
                return;
            },
            ToggleNavBarIcone() {
                this.PhoneNavbarIcone = !this.PhoneNavbarIcone
            }
        }
    }
</script>

<style>
    .Header {
        background-color: white;
        color: black;
    }

    .component {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px 0px 20px;
        border: 2px solid;
    }

    .NavbarLink-Link {
        padding-left: 10px;

    }

    @media only screen and (max-width: 750px) {

        .NavbarLink-Link,
        .branding {
            display: none;
        }
    }

    .NavbarLink-Link:hover {
        color: rgb(90, 182, 125);
    }

    .NavbarLinkForPhone {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: dimgray;
        width: 50%;
        max-width: 200px;
        height: 100%;
        top: 0;
        left: 0;
        padding-top: 50px;
    
    }

    .NavbarLinkForPhone-Link {
        color: aliceblue;
        margin-bottom: 10%;
    }

    .NavbarLinkForPhone-Link:hover {
        color: forestgreen
    }
</style>