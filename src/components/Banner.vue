<script setup>
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import {onMounted} from 'vue'
    
    gsap.registerPlugin(ScrollTrigger);

    onMounted(()=>{

        gsap.to('.hello',{
            x:-500,
            opacity:0,
            scrollTrigger:{
                trigger: '.hello',
                start: 'top 30%',
                end:'50%',
                scrub:1,
                //markers:true,
            }
        })

        gsap.to('.banner',{
            x:500,
            scrollTrigger:{
                trigger: '.banner',
                start: '10%',
                end:"30%",
                scrub:1,
                //markers:true,
            }
        })

    })
</script>

<template>
    <section>
        <div class="cover"></div>
        <iframe src="https://my.spline.design/untitled-3ae60390e7b0d49d16c3aa6172b4e045/" 
                frameborder="0"
                title="3Dscenes"
                class="banner"
        ></iframe>
        <p class="hello">hello!!</p>
        <p class="text">I'm Wayne</p>
        <div class="container">
            <div class="static-text">朝著</div>
            <ul class="text-wrapper">
                <li class="txt c1">前端工程師</li>
                <li class="txt c2">後端工程師</li>
                <li class="txt c3">全端工程師</li>
            </ul>
            <div class="static-text">前進!!</div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    $background: #68bac0;

    section{
        position: relative;
        height: 100vh;
        width: 100vw;
        background: $background;
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
            background:$background;
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
            left:80px;
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
        .container{
            position: relative;
            display:flex;
            top:80%;
            left: 80px;
            font-family: "Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
            .static-text{
                font-size: 50px;
                font-weight: 700;
                height: 60px;
            }
            .text-wrapper{
                height: 60px;
                overflow:hidden;
                list-style-type:none;
                font-size: 50px;
                line-height: 74px;
                font-weight: 700;
                .txt {
                    position: relative;
                    top:0;
                    height: 60px;
                    white-space: nowrap;
                    animation: text 6s steps(3) infinite;
                    @keyframes text {
                        100%{top:-180px;}
                    }
                    &::after{
                        content: "";
                        position:absolute;
                        left:0;
                        top:0;
                        height:100%;
                        width: 100%;
                        background: $background;
                        border-left: 2px solid #000;
                        animation: typing 2s steps(5) infinite;
                    }
                    @keyframes typing {
                        30%,70%{left: 100%;}
                        100%{left: 0;}
                    }
                }
                .c1{color:#fff;}
                .c2{color:#000;}
                .c3{color:#8c33c0;}
            }
        }
    }

    
</style>
