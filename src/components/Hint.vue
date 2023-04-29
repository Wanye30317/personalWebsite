<script setup>
    import { ref } from 'vue'

    let hint = ref(true)

    const clear = ()=>{
        hint.value = false
    }

</script>

<template>
    <div class="hint" v-show="hint">
        <div class="prompt-text">
            <div class="clear" @click="clear">x</div>
            <p>提示訊息</p>
            <ul>
                <li>1.按住滾輪後拖動滑鼠可以拖動3D物件</li>
                <li>2.對3D物件按住左鍵可以定點拖動</li>
                <li>3.點擊某些3D物件會觸發互動效果</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .hint{
        background: rgba(#000,.8);
        width: 100%;
        height: 100%;
        z-index: 9;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        .prompt-text{
            position: absolute;
            width: 500px;
            height: 400px;
            background-color: #fff;
            border-radius: 50px;
            font-family:"Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
            text-align: center;
            font-weight: 900;
        }
        .clear{
            width: 60px;
            height: 60px;
            right: 20px;
            top: 10px;
            background: #f00;
            border-radius: 50%;
            position: absolute;
            line-height: 50px;
            font-size: 60px;
            font-family: 'Sigmar', cursive;
            cursor:pointer;
            color:#fff;
            transition: .5s;
            &:hover{
                scale:calc(1.1)
            }
        }
        p{
            padding: 80px 10px 30px;
            font-size: 40px;
        }
        li{
            list-style: none;
            font-size: 25px;
            text-align: left;
            margin: 20px 30px;
        }
    }
</style>