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
                <el-input-number size="mini" v-model="scope.row.num"></el-input-number>
              </template>
            </el-table-column>
            <el-table-column prop='price' label="单价" width="200">
            </el-table-column>
            <el-table-column label="小计" width="200">
              <template slot-scope="scope">
                  ¥{{parseInt(scope.row.num * scope.row.price)}}
              </template>
            </el-table-column>
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                  <el-button type=danger @click='delOne(scope.row)'>删除</el-button>
              </template>
            </el-table-column>
        </el-table>
        <p>总计：¥{{totalPrice}}</p> 
        <el-button type=danger @click='delAll'>全部删除</el-button>

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
        // console.log(this.cartList);
        // console.log(this.$store.state.cartData);
    },
    computed: {
        // 计算总额
        totalPrice(){
            let sum = 0;
            this.cartList.forEach(ele => {
                sum += ele.num * ele.price;
            });
            return sum;
        }
    },
    methods: {
        //删除一个商品
        delOne(data){
            // console.log(data);                        
            this.$confirm('此操作将在购物车删除该商品, 是否继续?', '提示', {
             confirmButtonText: '确定',
             cancelButtonText: '取消',
             type: 'warning'
            }).then(() => {
                //确认
                //在数据中删除
                let index = this.cartList.indexOf(data);  //获取这个元素的下标
                this.cartList.splice(index,1);  //删除
                //在vuex中删除
                this.$store.commit('removeFruit',data);
                //提示
                this.$message({ type: 'success', message: '删除成功!'});
            }).catch(() => {
                //取消
                this.$message({type: 'info', message: '已取消删除'});          
            });                
        },
        //删除全部商品
        delAll(){
            for(let i=this.cartList.length-1; i>=0; i--){  
                // 删除vuex中的          
                this.$store.commit('removeFruit',this.cartList[i]);
                // 删除本地的
                this.cartList.splice(i,1);
            }
        }
    }
}
</script>

<style>
.cart-container {
    margin-left: 10px;
    width: 1150px;
}
</style>


