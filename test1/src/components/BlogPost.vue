<template>
    <div class="Blogs">
        <div class="BlogsContents">
            <div>
                <h3 v-if="post.Info">{{ post.title }}</h3>
                <h3 v-esle>{{ post.titleBlogPosts }}</h3>
                <p v-if="post.Info">{{ post.BlogContent }}</p>
                <p v-esle>{{ post.BlogHtml }}</p>
                <router-link v-if="post.Info" class="router-link"> Login / Register <img src="Arrow" alt=""></router-link>

                <router-link v-esle> view posts</router-link>
            </div>
           

        </div> 
        <div class="Photos">
                <img v-if="post.Info" :src="require(`../img/${post.Photo}.jpg`)" alt="">
                <img class="BlogPostPhotoEven" v-else :src="require(`../img/${post.BlogPostPhoto}.jpg`)" alt="#">

            </div>
    </div>
</template>

<script>
    export default {
        name: "BlogPost",
        props: ["post"],
        Data() {
            return {
                Arrow: require("../img/pngfind.com-white-arrow-png-582087.png")
            }
        }
    }
</script>

<style>
.Blogs{
    display: grid;
    grid-template-columns: 1fr 1.5fr;
 
}
.BlogsContents{
    padding-top: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
  
}
.Blogs:nth-of-type(2n+1){
    background-color:dimgray;

}
.BlogsContents h3 {
    padding-bottom: 10px;
}
.router-link{
    padding-top: 10px;
}
.Photos img{
    width: 100%;
    height: 570px;
    float: right;
    

}
/* .BlogPostPhotoEven:first-of-type{
 for changing the photo position

} */
</style>