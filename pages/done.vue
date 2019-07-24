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
      deleteHandle(message) {
        this.$store.commit('deleteDone', message);
      },
      appendHandle() {
        this.show = true;
      },
      closeHandle() {
        this.editMessage = '';
        this.show=false;
      },
      backHandle(message) {
        this.$store.commit('back', message);
      }
    },
    computed: {
      doneList() {
        return this.$store.state.done
      }
    }
  }
</script>

<style scoped lang="less">
  .append {
    position: fixed;
    bottom: 30px;
    right: 10px;
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
