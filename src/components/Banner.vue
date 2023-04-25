<script setup>
    import {gsap} from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import {ref,onMounted,inject} from 'vue'
    gsap.registerPlugin(ScrollTrigger);

    const banner = inject("banner")
    const hello = ref()
    const text = ref()
    const iframe = ref()

    onMounted(()=>{
        gsap.to(iframe.value,{
            x:500,
            scrollTrigger:{
                trigger: iframe.value,
                start: 'top top',
                scrub:1,
                //markers:true,
            }
        })

        gsap.to(hello.value,{
            x:-500,
            duration:3,
            scrollTrigger:{
                trigger: hello.value,
                start: 'top 20%',
                scrub:1,
                //markers:true,
            }
        })
    })
</script>

<template>
    <section ref="banner">
        <div class="cover"></div>
        <iframe src="https://my.spline.design/untitled-3ae60390e7b0d49d16c3aa6172b4e045/" 
                frameborder="0"
                title="3Dscenes"
                ref="iframe" 
        ></iframe>
        <p ref="hello" class="hello">hello!!</p>
        <p ref="text" class="text">I'm Wayne</p>
        
    </section>
</template>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap');
    section{
        position: relative;
        height: 100vh;
        width: 100vw;
        background: #708aff;
        iframe{
            position: absolute;
            top:0;
            height: 100%;
            width: 100%;
            z-index: 1;
        }
        .cover{
            position: absolute;
            bottom: 20px;
            right: 0px;
            background:#708aff;
            width: 170px;
            height: 40px;
            z-index: 2;
        }
        .hello{
            position: absolute;
            font-weight: 800;
            font-family: 'ZCOOL KuaiLe', sans-serif;
            top:30%;
            left:80px;
            font-size: 140px;
            color:#000;
            &:after{
                position: absolute;
                content: 'hello!!';
                font-weight: 600;
                top:50%;
                transform: translate(0,-50%);
                left:0;
                font-size: 140px;
                color: transparent;
                -webkit-text-stroke:  1px #fff;
            }
        }
        .text{
            position: absolute;
            font-weight: 900;
            font-family: 'ZCOOL KuaiLe', sans-serif;
            top:55%;
            left:60px;
            font-size: 150px;
            color: #fff;
            &:after{
                position: absolute;
                content: 'I\'m Wayne';
                font-weight: 900;
                top:50%;
                transform: translate(0,-50%);
                left:0;
                font-size: 150px;
                color: transparent;
                -webkit-text-stroke:  3px #000;
                z-index: 1;
            }
        }
    }
</style>
