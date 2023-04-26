<script setup>
    import SkillItem from './SkillItem.vue';
    import {gsap} from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import {ref,onMounted,inject} from 'vue'
    gsap.registerPlugin(ScrollTrigger);

    const skill = inject("skill")
    const h2 = ref()
    let frontend = ref([])
    let backend = ref([])
    let other = ref([])

    onMounted(()=>{
        async function getdata(){
            try{
                let json = await fetch('/skill.json')
                let db = await json.json()
                frontend.value = db[0]['frontend']
                backend.value = db[0]['backend']
                other.value = db[0]['other']
            }catch(err){
                console.log(err.message)
            }
        }
        getdata()

        let scrollTween = gsap.to(skill.value,{
            xPercent: -100 ,
            duration:1,
            scrollTrigger: {
                trigger: skill.value,
                start: 'top top',
                pin: true,
                scrub: 3,
                //markers:true,
            }
        })

        gsap.from(h2.value,{
            y:-200,
            scrollTrigger:{
                trigger: skill.value,
                containerAnimation: scrollTween,
                start: 'top 80%',
                end:'top',
                scrub:3,
                //markers:true,
            }
        })

    })
</script>

<template>
    <section ref="skill">
        <h2 ref="h2">技能</h2>
        <article ref="article">
            <SkillItem :data= "frontend" txt="前端"/>
            <SkillItem :data= "backend" txt="後端" />
            <SkillItem :data= "other" txt="其他" />
        </article>
        <iframe src="https://my.spline.design/htmlcssjs-837cc636709448261f71a33c3f41bc92/"
                frameborder="0"
                title="3Dscenes"
                ref="iframe"
        ></iframe>
        <div class="cover"></div>
    </section>
</template>

<style lang="scss" scoped>
    $background: #516ebe ;
    section{
        position: relative;
        height: 100vh;
        width: 100vw;
        background: $background;
        z-index: 2;
        h2{
            position: absolute;
            font-size: 120px;
            top: 20px;
            left: 50px;
            color: #fff;
            &::after{
                position: absolute;
                content: '技能';
                top:0;
                left: 0;
                z-index: 1;
                color: transparent;
                -webkit-text-stroke:  3px #000;
            }
        }
        article{
            width: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            z-index: 1;
        }
        iframe{
            height: 100%;
            width: 100%;
        }
        .cover{
                position: absolute;
                bottom:20px;
                right:10px;
                background:$background;
                width: 150px;
                height: 37px;
                z-index: 2;
        }
    }
</style>