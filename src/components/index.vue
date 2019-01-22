<template>
    <div class='fruit-container'>
        <ul>
            <li v-for="item in fruitList" @click='addFruit(item)'>
                <a href="#">
                    <img :src="item.imgUrl" alt="">
                    <p>商品名称：{{item.name}}</p>
                    <p>¥：{{item.price}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
             fruitList: {
                '苹果': {
                    name: '苹果',
                    price: 5.9,
                    imgUrl: require('../assets/h1.jpeg')       
                },
                '香蕉': {
                    name: '香蕉',
                    price: 3.2,
                    imgUrl: require('../assets/c2.jpeg')       
                },
                '橘子': {
                    name: '橘子',
                    price: 3.3,
                    imgUrl: require('../assets/m3.png')       
                },
                '榴莲': {
                    name: '榴莲',
                    price: 35,
                    imgUrl: require('../assets/b1.jpg')       

                }
            }
        }
    },
    methods: {
        addFruit(fruit){
            this.$store.commit('addFruit',fruit);
        }
    }
}
</script>

<style>
 .fruit-container {

 }
 .fruit-container ul {
     display: flex;
 }
 .fruit-container li {
     margin-left: 10px;
     width: 200px;
     height: 260px;
     border: 1px solid #ccc;
 }
 .fruit-container li a {
      display: block;
      width: 100%;
      height: 100%;

 }
 .fruit-container li a img {
     width: 180px;
     height: 180px;
     margin: 10px;
 }
 .fruit-container li a p {
     width: 100%;
     padding: 3px 10px;
     font-size: 14px;
     color: #fff;
     background-color: blue;
 }
</style>


