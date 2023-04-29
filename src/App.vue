<script setup>
    import Loading from '@/components/Loading.vue'
    import Header from '@/components/Header.vue'
    import Banner from '@/components/Banner.vue'
    import AboutMe from '@/components/AboutMe.vue'
    import Skill from '@/components/Skill/Skill.vue'
    import Portfolio from '@/components/Portfolio.vue'
    import { gsap } from 'gsap'
    import  { ScrollTrigger }  from 'gsap/ScrollTrigger';
    import { onMounted } from 'vue';
    gsap.registerPlugin(ScrollTrigger);

    onMounted(()=>{
        const sections = gsap.utils.toArray(".container .section");
    
        gsap.to(sections,{
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            duration:2,
            scrollTrigger: {
                trigger: '.container', 
                snap: 1 / (sections.length - 1),
                scrub:2,
                pin: true,
                //markers:true,
            }
        })
    })
</script>

<template>
    <Loading/>
    <Header/>
    <div ref="wrap" class="wrap">
        <div class="container">
            <Banner class="section"/>
            <AboutMe class="section"/>
            <Skill class="section"/>
            <Portfolio class="section"/>
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
        width:400vw;
        flex-wrap: nowrap;
    }
</style>
