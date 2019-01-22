<template>
    <div class='cart-container'>
        <el-table :data="cartList" border>
            <el-table-column prop='name' label="商品名称" width="180">
            </el-table-column>
            <el-table-column label="图片" width="200">
              <template slot-scope="scope">
                <img width='100px' :src="scope.row.imgUrl" alt="">
              </template>
            </el-table-column>
            <el-table-column label="数量" width="200">
              <template slot-scope="scope">
                <el-input-number size="mini" v-model="scope.row.num * scope.row.price"></el-input-number>
              </template>
            </el-table-column>
            <el-table-column prop='price' label="单价" width="200">
            </el-table-column>
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                  <el-button type=danger>删除</el-button>
              </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartList:[]
        }
    },
    created(){
        for(const key in this.$store.state.cartData){
            this.cartList.push(this.$store.state.cartData[key]);
        }
        console.log(this.cartList);
        console.log(this.$store.state.cartData);
    }
}
</script>

<style>
.cart-container {
    margin-left: 10px;
    width: 980px;
}
</style>


