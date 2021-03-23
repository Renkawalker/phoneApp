<template>
    <div>
        <div class="home-main"></div>
        <div class="bot">
            <router-link to="/">
            <div class="bot-icon">
                <div class="el-icon-s-home "></div>
                <div class="bot-text">首页</div>
            </div>
            </router-link>
            <router-link to="/shopCar">
             <div class="bot-icon ">
                <div class="el-icon-shopping-cart-full"></div>
                <div class="bot-text">购物车</div>
            </div>
            </router-link>
            <router-link to="/detailList">
            <div class="bot-icon ">
                <div class="el-icon-notebook-2"></div>
                <div class="bot-text">订单列表</div>
            </div>
            </router-link>
            <router-link to="myShop">
            <div class="bot-icon bot-choose">
                <div class="el-icon-user"></div>
                <div class="bot-text">个人中心</div>
            </div>
            </router-link>
            <router-link to="other">
            <div class="bot-icon ">
                <div class="el-icon-more"></div>
                <div class="bot-text">更多</div>
            </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name :"home",
    data() {
        return {
        }
    },
}
</script>
<style scoped>
.bot{
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    border-top: 2px solid #E7E7E7;
}
.bot-icon{
    padding-top: 5px;
    float: left;
    width: 20%;
    font-size: 20px;
    text-align: center;
    color: #A6A9C5;
}
.bot-text{
    font-size: 10px;
    color: #A6A9C5;
}
.bot-choose{
    background-color: #E6E6E6;
}
</style>
<script>
export default {
    name :"myShop",
    data() {
        return {

            

        }
    },
    
}
</script>
<style scoped>
.bot{
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    border-top: 2px solid #E7E7E7;
}
.bot-icon{
    padding-top: 5px;
    float: left;
    width: 20%;
    font-size: 20px;
    text-align: center;
}
.bot-text{
    font-size: 10px;
}
.bot-choose{
    background-color: #E6E6E6;
}
</style>