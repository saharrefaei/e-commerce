<template>
    <footer class="Footer">
        <div class="LeftFooter">
            <div class="FooterIcons">
                <h4 class="FooterIconsText">Contact to me</h4>
                <a href="https://www.instagram.com/saharrefaei/?igshid=YmMyMTA2M2Y%3D&__coig_restricted=1"><img :src="Instagram" alt=""></a>
                <a href="mailto:saharrefaei1999@gmail.com"><img :src="Gmail" alt=""></a>
                <a href="https://t.me/sahar_refaei"><img :src="Telegram" alt=""></a>
                <a href="https://www.linkedin.com/in/sahar-refaei-585830214"><img :src="Linkedin" alt=""></a>
            </div>
            <div class="FooterLinks">
                <ul>
                    <router-link class="NavbarLink-Link" to="#">Home</router-link>
                    <router-link class="NavbarLink-Link" to="#">Blogs</router-link>
                    <router-link class="NavbarLink-Link" to="#">Create Blogs</router-link>
                    <router-link class="NavbarLink-Link" to="#">Login / Register</router-link>
                </ul>
            </div>
        </div>
        <div class="RightFotter">
            <p>Developing Web Site</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterBar',
        data() {
            return {
                Instagram: require('../img/pngfind.com-instagram-png-1837169.png'),
                Gmail: require('../img/pngfind.com-gmail-icon-png-336942.png'),
                Telegram: require('../img/pngfind.com-telegram-icon-png-911433.png'),
                Linkedin: require('../img/pngfind.com-linkedin-white-png-5778561.png'),
            }
        }
    }
</script>

<style>
    .Footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 4%;
        width: 100%;
        height: 180px;
        bottom: 0;
        left: 0;
        background-color: dimgray;
        color: white
    }

    .LeftFooter {
        display: flex;
        flex-direction: row;
    }

    .FooterIcons {
        padding-right: 140px;
    }

    .FooterIconsText {
        padding-bottom: 26%;
    }

    .FooterIcons img {
        widows: 20px;
        height: 20px;
        margin-right: 10px;
    }

    .FooterLinks ul {
        display: flex;
        flex-direction: column;


    }

    .NavbarLink-Link {
        padding-bottom: 5px;
    }

    @media only screen and (max-width: 800px) {

        .Footer {
            padding-top:34px;
            padding-left: 13%;
            align-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
        }

        .FooterIcons {
            padding-right: 0px;
        }

        .RightFotter {
            display: none;
        }
    }
</style>