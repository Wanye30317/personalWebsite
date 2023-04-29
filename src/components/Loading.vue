<script setup>
    import { gsap } from 'gsap'
    import { onMounted } from 'vue';

    onMounted(()=>{
        const load = setTimeout(()=>{
            gsap.to(".bg",{
                duration:2,
                opacity:0,
                display:'none',
                scale:3,
            })

            window.scrollTo(0,top)

        },4000)
    })
</script>

<template>
    <div class="bg" @load="load" >
        <span class="load">Loading...</span>
        <div class="circle"></div>
    </div>
</template>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Sigmar&display=swap');
    .bg{
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background: #000;
        z-index: 10;
        .load{
            font-family: 'Sigmar', cursive;
            font-size: 50px;
            color: #fff;
            animation:text 3s infinite;
        }
        @keyframes text{
            50%{color:#000}
        }
        .circle{
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            animation: circle 2s linear infinite;
        }

        @keyframes circle {
            0%{transform: rotate(0deg);box-shadow: 1px 5px 2px #e65c00}
            50%{transform: rotate(180deg);box-shadow: 1px 5px 2px #00e686}
            100%{transform: rotate(360deg);box-shadow: 1px 5px 2px #0049e6}
        }
        .circle::before{
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            box-shadow:  0 0 5px rgba(255,255,255,.3);
        }
    }
</style>