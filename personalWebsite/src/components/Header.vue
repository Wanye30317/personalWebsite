<script setup>
    import { gsap } from 'gsap'
    import { ref,onMounted } from 'vue';

    const span = ref()

    onMounted(()=>{
        gsap.to(span.value,{
            duration:2,
            x:'100vw',
            repeat:-1,
        })
    })
</script>

<template>
    <header>
        <nav>
            <ul class="menu">
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
            </ul>
        </nav>
        <span ref="span"></span>
    </header>
</template>

<style lang="scss" scoped>
    header{
        position: fixed;
        background: transparent;
        width: 100vw;
        .menu{
            display: flex;
            list-style: none;
            a{
                color: #000;
                text-decoration: none;
            }
        }
        span{
            position: absolute;
            bottom: 0;
            height: 2px;
            width: 50px;
            border-radius: 50%;
            background: linear-gradient(90deg,transparent,#fff);
        }
    }
</style>
