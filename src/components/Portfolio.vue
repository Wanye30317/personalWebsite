<script setup>
    import Footer from './Footer.vue'
    import {gsap} from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import {onMounted} from 'vue'
    gsap.registerPlugin(ScrollTrigger);

    onMounted(()=>{

        gsap.from('.portfolio',{
            opacity:0,duration:3,
            scrollTrigger:{
                trigger:'.portfolio',
                start:'4300px',
                end:'4800px',
                scrub:1,
                //markers:true,
            }
        })

        gsap.from('.computer',{
            x:700,duration:3,
            scrollTrigger:{
                trigger:'.portfolio',
                start:'4700px',
                scrub:1,
                //markers:true,
            }
        })

        gsap.from('.footer',{
            opacity:0,duration:3,
            scrollTrigger:{
                trigger:'.footer',
                start:'4000px',
                scrub:1,
                //markers:true,
            }
        })

    })
</script>

<template>
    <section>
        <h2 class="portfolio">作品集</h2>
        <iframe src="https://my.spline.design/untitled-7c6ed4e4c6a79857b1e56d1a96b00f74/" 
                frameborder="0"
                title="3Dscenes"
                class="computer"
        ></iframe>
        <div class="cover"></div>
        <Footer class="footer"/>
    </section>
</template>

<style lang="scss" scoped>
    $background :  #a68ebd;
    section{
        position: relative;
        height: 100vh;
        width: 100vw;
        background:$background;
        z-index: 4;
        h2{
            position: absolute;
            font-size: 120px;
            top: 20px;
            left: 50px;
            color: #fff;
            font-family: "Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
            &::after{
                position: absolute;
                content: '作品集';
                top:0;
                left: 0;
                z-index: 1;
                color: transparent;
                -webkit-text-stroke:  3px #000;
            }
        }
        iframe{
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100%;
        }
        .cover{
                position: absolute;
                bottom:20px;
                right:-1px;
                background:$background;
                width: 180px;
                height: 37px;
                z-index: 2;
        }
    }
</style>