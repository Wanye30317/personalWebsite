<script setup>
    import Loading from '@/components/Loading.vue'
    import Header from '@/components/Header.vue'
    import Banner from '@/components/Banner.vue'
    import AboutMe from '@/components/AboutMe.vue'
    import Skill from '@/components/Skill/Skill.vue'
    import scrollAnimation from '@/components/animation'
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { onMounted } from 'vue';
    gsap.registerPlugin(ScrollTrigger);

    onMounted(()=>{
        scrollAnimation()
    })
    
</script>

<template>
    <!-- <Loading/> -->
    <Header/>
    <div ref="wrap" class="wrap">
        <div ref="container" class="container">
            <Banner class="section"/>
            <AboutMe class="section"/>
            <Skill class="section"/>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .wrap{
        position: relative;
        overflow: hidden;
    }
    .container{
        display: flex;
        width:300vw;
        flex-wrap: nowrap;
    }
</style>
