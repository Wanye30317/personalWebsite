<script setup>
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { ref,onMounted,inject } from 'vue';
    gsap.registerPlugin(ScrollTrigger);

    const span = ref()
    const header = inject("header")

    onMounted(()=>{
        gsap.to(span.value,{
            duration:2,
            x:'100vw',
            repeat:-1,
        })

        gsap.to(header.value,{
            top:'-150px',
            scrollTrigger:{
                trigger:header.value,
                start:'top',
                scrub:1,
            }
        })

    })
</script>

<template>
    <header ref="header">
        <nav>
            <ul class="menu">
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
            </ul>
        </nav>
        <span ref="span"></span>
    </header>
</template>

<style lang="scss" scoped>
    header{
        position: fixed;
        width: 100vw;
        z-index: 5;
        padding: 30px 0;
        border-bottom: 2px solid rgba(255,255,255,.1);
        .menu{
            display: flex;
            justify-content: center;
            list-style: none;
            a{
                color: #000;
                text-decoration: none;
                margin: 0 20px;
            }
        }
        span{
            position: absolute;
            bottom: -1px;
            height: 2px;
            width: 70px;
            border-radius: 50%;
            background: linear-gradient(90deg,transparent,#fff);
        }
    }
</style>
