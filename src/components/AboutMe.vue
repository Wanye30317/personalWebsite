<script setup>
</script>

<template>
    <section>
        <h2>關於我</h2>
        <iframe src="https://my.spline.design/untitled-b4c3a15f3259adb9725728a4edbadbb2/" 
                frameborder="0"
                title="3Dscenes"
                class="banner"
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
            left:-300px;
            height: 100vh;
            width: 100vw;
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