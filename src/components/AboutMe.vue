<script setup>
    import {gsap} from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { onMounted } from 'vue'

    gsap.registerPlugin(ScrollTrigger);

    onMounted(()=>{

        gsap.from('.aboutMe',{
            opacity:0,
            scrollTrigger:{
                trigger:'.aboutMe',
                start:'80%',
                end:'130%',
                scrub:1,
                //markers:true,
            }
        })

        gsap.from('.aboutbanner',{
            x:400,
            scrollTrigger:{
                trigger:'.aboutbanner',
                start:'20% top',
                end:'30%',
                scrub:1,
                //markers:true,
            }
        })
    })

</script>

<template>
    <section>
        <h2 class="aboutMe">關於我</h2>
        <iframe src="https://my.spline.design/untitled-b4c3a15f3259adb9725728a4edbadbb2/" 
                frameborder="0"
                title="3Dscenes"
                class="aboutbanner"
        ></iframe>
        <div class="cover"></div>
    </section> 
</template>

<style lang="scss" scoped>
    $background :  #6b92db;
    section{
        position: relative;
        height: 100vh;
        width: 100vw;
        background:$background;
        z-index: 2;
        h2{
            position: absolute;
            font-size: 120px;
            top: 20px;
            left: 50px;
            color: #fff;
            &::after{
                position: absolute;
                content: '關於我';
                top:0;
                left: 0;
                z-index: 1;
                color: transparent;
                -webkit-text-stroke:  3px #000;
            }
        }
        iframe{
            position: absolute;
            top:0;
            left:0;
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