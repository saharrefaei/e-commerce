<template> 
<BlogPost :post="Info"/>
<BlogPost :post="post" v-for="(post ,index) in BlogPosts" :key="index"/>
</template>

<script>
import BlogPost from "./BlogPost.vue"
export default {
  name: 'HomePage',
  components:{
    BlogPost ,
  },
 
  data (){
    return{
      Info :{
        title : "Welcome",
        BlogContent: "lorem speam but dont want say any boullshit here ...",
        Info : true,
        Photo :"pexels-azamat-esenaliev-119550"
      },
      BlogPosts:[
      {
        titleBlogPosts:"this is first blog post",
        BlogHtml:"this is first blog post",
        BlogPostPhoto :"pexels-hasan-albari-1229861"
      },
      {
      title:"this is secound blog post",
        BlogHtml:"this is secound blog post",
        BlogPostPhoto :"pexels-cottonbro-studio-5185148"
    },
      ],
  };
},
}

</script>

<style scoped>

</style>
