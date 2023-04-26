<script setup>
    import Loading from '@/components/Loading.vue'
    import Header from '@/components/Header.vue'
    import Banner from '@/components/Banner.vue'
    import Skill from '@/components/Skill/Skill.vue'
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { ref,onMounted,provide } from 'vue';
    gsap.registerPlugin(ScrollTrigger);

    const container = ref()

    const banner = ref()
    provide("banner",banner)

    const skill = ref()
    provide("skill",skill)

    const header = ref()
    provide("header",header)

    onMounted(()=>{
        const sections = [banner.value,skill.value]

        gsap.to(sections,{
            xPercent: -100 * (sections.length-1) ,
            duration:1,
            scrollTrigger: {
                trigger: container.value, 
                pin: true,
                scrub: 3,
            }
        })
    })
</script>

<template>
    <!-- <Loading/> -->
    <Header/>
    <div ref="wrap" class="wrap">
        <div ref="container" class="container">
            <Banner/>
            <Skill/>
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
    }
</style>
