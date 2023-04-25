<script setup>
    import {gsap} from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import {ref,onMounted,inject} from 'vue'
    gsap.registerPlugin(ScrollTrigger);

    const skill = inject("skill")
    const iframe = ref()

    onMounted(()=>{
        gsap.to(iframe.value,{
            duration:2,
            opacity:1,
            scrollTrigger:{
                trigger: iframe.value,
                start: 'top 30%',
                end:'end 20%',
                scrub:3,
                //markers:true,
            }
        })
    })
</script>

<template>
    <section ref="skill">
        <iframe src="https://my.spline.design/htmlcssjs-837cc636709448261f71a33c3f41bc92/"
                frameborder="0"
                title="3Dscenes"
                ref="iframe"
        ></iframe>
        <div class="cover"></div>
    </section>
</template>

<style lang="scss" scoped>
    section{
        position: relative;
        height: 100vh;
        width: 100vw;
        background: #0d3cbe;
        z-index: 2;
        iframe{
            height: 100%;
            opacity: 0;
        }
        .cover{
                position: absolute;
                bottom: 20px;
                left:130px;
                background:#0d3cbe;
                width: 150px;
                height: 37px;
                z-index: 2;
        }
    }
</style>