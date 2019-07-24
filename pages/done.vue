<template>
  <div class="undone-content">
    <todolist :need="'do'"></todolist>
    <span class="append" @click="appendHandle">+</span>
    <selfdialog :show='show' @close='closeHandle'></selfdialog>
  </div>
</template>

<script>
  import selfdialog from '~/components/SelfDialog.vue'
  import todolist from '~/components/ToDoList.vue'

  export default {
    components: {
    	selfdialog,
      todolist
    },
    data() {
      return {
        show: false,
      }
    },
    methods: {
      appendHandle() {
        this.show = true;
      },
      closeHandle() {
        this.editMessage = '';
        this.show=false;
      },
    },
  }
</script>

<style scoped lang="less">
  .append {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 50px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 45px;
    border-radius: 70px;
    background-color: skyblue;
    color: white;
    font-weight: 600;
  }
</style>
