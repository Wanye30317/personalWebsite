<script setup>
    import SkillItem from './SkillItem.vue';
    import {gsap} from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import {ref,onMounted} from 'vue'
    gsap.registerPlugin(ScrollTrigger);

    let frontend = ref([])
    let backend = ref([])
    let other = ref([])

    onMounted(()=>{
        async function getdata(){
            try{
                let json = await fetch('./skill.json')
                let db = await json.json()
                frontend.value = db[0]['frontend']
                backend.value = db[0]['backend']
                other.value = db[0]['other']
            }catch(err){
                console.log(err.message)
            }
        }
        getdata()

        gsap.from('.skill',{
            opacity:0, duration:3,
            scrollTrigger:{
                trigger:'.skill',
                start:'2800px',
                end:'3300px',
                scrub:1,
                //markers:true,
            }
        })

        gsap.from('article',{
            top:'-50%',duration:3,
            scrollTrigger:{
                trigger:'article',
                start:'3000px',
                end:'3400px',
                scrub:1,
                //markers:true,
            }
        })

    })
</script>

<template>
    <section>
        <h2 class="skill">技能</h2>
        <article>
            <SkillItem :data= "frontend" txt="前端"/>
            <SkillItem :data= "backend" txt="後端" />
            <SkillItem :data= "other" txt="其他" />
        </article>
        <iframe src="https://my.spline.design/htmlcssjs-837cc636709448261f71a33c3f41bc92/"
                frameborder="0"
                title="3Dscenes"
                class=""
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
        z-index: 3;
        h2{
            position: absolute;
            font-size: 120px;
            top: 20px;
            left: 50px;
            color: #fff;
            font-family: "Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
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
            position: absolute;
            top:0;
            left:0;
            height: 100vh;
            width: 100vw;
        }
        .cover{
                position: absolute;
                bottom:20px;
                right:0px;
                background:$background;
                width: 180px;
                height: 37px;
                z-index: 2;
        }
    }
</style>