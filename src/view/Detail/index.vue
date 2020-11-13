<!--
 * @Author: your name
 * @Date: 2020-11-13 20:06:57
 * @LastEditTime: 2020-11-13 20:10:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \登录\app\src\view\Detail\index.vue
-->
<template>
  <div class="detail">
      详情{{id}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            id:this.$route.params.id
        }
    },
}
</script>

<style>

</style>