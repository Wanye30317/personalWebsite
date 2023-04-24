<script setup>

</script>

<template>
    <section>
        <div class="cover"></div>
        <iframe src="https://my.spline.design/untitled-3ae60390e7b0d49d16c3aa6172b4e045/" 
              frameborder="0"
        ></iframe>
        <p class="text" v-lettering>hello!! 我是Wayne</p>
    </section>
</template>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap');
    section{
        height: 100vh;
        position: relative;
        background: #2547dd;
        iframe{
            position: absolute;
            top: 0;
            height: 100%;
            width: 100%;
            z-index: 1;
        }
        .cover{
            position: absolute;
            bottom: 20px;
            right: 10px;
            background:#2547dd ;
            width: 150px;
            height: 40px;
            z-index: 2;
        }
        .text{
            position: absolute;
            font-weight: 800;
            font-family: 'ZCOOL KuaiLe', sans-serif;
            top:50%;
            left:40px;
            font-size: 140px;
            color:#000;
            &::after{
                position: absolute;
                content: 'hello!! 我是Wayne';
                font-weight: 800;
                top:50%;
                transform: translate(0,-50%);
                left:0;
                font-size: 140px;
                color: transparent;
                -webkit-text-stroke:  1px #000;
                z-index: 2;
            }
        }
    }
</style>
