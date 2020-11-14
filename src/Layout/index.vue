<!--
 * @Author: your name
 * @Date: 2020-11-14 09:32:53
 * @LastEditTime: 2020-11-14 10:26:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \登录\app\src\Layout\index.vue
-->
<template>
  <div class="layout">
      <div class="layout-left">
          
      </div>
      <div class="layout-right">
          <div class="top">
              
          </div>
          <div class="content">
              <router-view/>
          </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.layout{
    width: 100%;
    height: 100%;
    display: flex;
    .layout-left{
        width: 30%;
        height: 100%;
        background: skyblue;
    }
    .layout-right{
        flex: 1;
        background: #f3f3f3;
        .top{
            width: 100%;
            height: 50px;
            background: #fff;
        }
        .content{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
