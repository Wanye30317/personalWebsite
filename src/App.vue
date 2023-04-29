<script setup>
    import Loading from '@/components/Loading.vue'
    import Hint from '@/components/Hint.vue'
    import Header from '@/components/Header.vue'
    import Banner from '@/components/Banner.vue'
    import AboutMe from '@/components/AboutMe.vue'
    import Skill from '@/components/Skill/Skill.vue'
    import Portfolio from '@/components/Portfolio.vue'
    import { gsap } from 'gsap'
    import  { ScrollTrigger }  from 'gsap/ScrollTrigger';
    import { onMounted,ref } from 'vue';
    gsap.registerPlugin(ScrollTrigger);

    let banner = ref('')

    const scrollToTop =() =>{
        let el = banner
        let top = el.offestTop
        window.scrollTo(0,top)
    }

    onMounted(()=>{
        const sections = gsap.utils.toArray(".container .section");
    
        gsap.to(sections,{
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            duration:2,
            scrollTrigger: {
                trigger: '.container', 
                end:'+=5000',
                scrub:3,
                pin: true,
                //markers:true,
            }
        })
    })
</script>

<template>
    <Loading/>
    <Hint/>
    <Header/>
    <div class="wrap">
        <div class="container">
            <Banner class="section" ref="top"/>
            <AboutMe class="section"/>
            <Skill class="section"/>
            <Portfolio class="section"/>
            <a class="back" @click="scrollToTop">回首頁</a>
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
        .back{
            width: 80px;
            height: 80px;
            border: 2px #fff solid;
            border-radius: 50%;
            background: #000;
            color: #fff;
            position: fixed;
            z-index: 8;
            cursor: pointer;
            text-align: center;
            line-height: 80px;
            font-size: 20px;
            bottom: 30px;
            left: 22%;
            font-family: "Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
            font-weight: 900;
            transition: .5s;
            &:hover{
                scale:calc(1.1);
                color:#000;
                background: #fff;
                border: 2px #000 solid;
            }
        }
    }
</style>
