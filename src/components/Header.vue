<script setup>
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { onMounted } from 'vue';
    gsap.registerPlugin(ScrollTrigger);

    onMounted(()=>{
        gsap.to(".line",{
            duration:2,
            x:'100vw',
            repeat:-1,
        })

        gsap.to("header",{
            top:'-150px',
            scrollTrigger:{
                trigger:"header",
                start:'top',
                scrub:1,
            }
        })

    })
</script>

<template>
    <header>
        <nav>
            <ul class="menu">
                <li>
                    <a class="github" href="https://github.com/wayne035">
                        <img  src="/images/github.webp" alt="github"/>
                    </a>
                </li>
                <li>
                    <a class="gmail" href="mailto:QWE24367705@gmail.com">
                        <img  src="/images/Gmail.webp" alt="gmail"/>
                    </a>
                </li>
                <li>
                    <a class="phone" href="tel:+886-965005088">
                        <img  src="/images/phone.webp" alt="phone"/>
                    </a>
                </li>
            </ul>
        </nav>
        <span class="line"></span>
    </header>
</template>

<style lang="scss" scoped>
    header{
        position: fixed;
        width: 100vw;
        z-index: 5;
        padding: 30px 0;
        background: rgba(#fff,.3);
        border-bottom: 2px solid rgba(255,255,255,.1);
        .menu{
            display: flex;
            justify-content: center;
            list-style: none;
            a{
                text-decoration: none;
                margin: 0 40px;
            }
            img{
                width: 30px;
                height: 30px;
                scale: 2;
                transition: .5s;
                &:hover{
                    scale: 3;
                }
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
