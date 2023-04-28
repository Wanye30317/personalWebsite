<script setup>
    const props = defineProps(["data","txt"]);
</script>

<template>
    <div class ="card">
        <div class="front">
            <p class="title">{{ txt }}</p>
        </div>
        <div class="back">
            <p v-for=" d in data">👍{{ d }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card{
        position: relative;
        border-radius: 20px;
        width: 350px;
        height: 450px;
        font-size: 20px;
        font-weight: 900;
        font-family: "Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
        margin:10px;
        padding:10px;
        transform-style: preserve-3d;
        transition: .3s ease;
        cursor: pointer;
        &:hover .front{transform: rotateY(180deg);}
        &:hover .back{transform: rotateY(0deg);}
        .front,.back{
            color:#fff;
            position: absolute;
            border-radius: 20px;
            padding: 10px;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            backface-visibility: hidden;
            text-shadow: 1px 1px 3px #000;
        }
        .title{
            position: absolute;
            top: 50%;
            left: 50%;
            font-size: 100px;
            transform: translate(-50%,-50%);
            text-align: center;
            font-weight: 900;
        }
        .front{
            background: url('/images/card.webp') center center;
            background-size: cover;
            border: 2px solid #ffd104;
            transform: rotateY(0deg);
            transition: 1s;
        }
        .back {
            background: #e4cc43;
            border: 2px solid #ffd104;
            transition: 1s;
            transform: rotateY(180deg);
            p{
                margin: 10px 0;
            }
        }
    }

</style>