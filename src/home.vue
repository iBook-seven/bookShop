<template>
  <div class="home">
    <app_header></app_header>
    <p_img></p_img>
    <news></news>
    <author></author>
    <superkill></superkill>
    <hot></hot>
    <loadMore></loadMore>
    <app_footer></app_footer>
    <!--<router-view/>-->
  </div>
</template>

<script>
    import Header from './components/home/Header'
    import Play_img from './components/home/Play_img'
    import News from './components/home/News'
    import SuperKill from './components/home/SuperKill'
    import Author from './components/home/Author'
    import Hot from './components/home/Hot'
    import LoadMore from './components/home/LoadMore'
    import Footer from './components/home/Footer'
    export default {
        name: "home",
        components:{
        "app_header": Header,
        "p_img": Play_img,
        "news": News,
        "superkill": SuperKill,
        "author": Author,
        "hot": Hot,
        "app_footer": Footer,
        "loadMore": LoadMore
      }
    }
</script>

<style scoped>

</style>
