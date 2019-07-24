<template>
  <ul class="list">
    <li class="item" v-for="item, index in list" :key='index + item'>
       <span :class="{content: true, through: need === 'do' }">{{ item }}</span>
       <span class="delete" @click="deleteHandle(item)"></span>
       <span class="edit" @click="editHandle(item)" v-if="need === 'todo'"></span>
       <span class="done" @click="completeHandle(item)" v-if="need === 'todo'"></span>
       <span class="back" @click="backHandle(item)" v-if="need==='do'"></span>
     </li>
  </ul>
</template>

<script>
  export default {
    props: ['need'],
    methods: {
      deleteHandle(message) {
        this.$store.commit('deleteUndone', message);
      },
      completeHandle(message) {
        this.$store.commit('complete', message);
      },
      editHandle(message) {
        this.$emit('edit', message);
      },
      backHandle(message) {
        this.$store.commit('back', message);
      }
    },
    computed: {
      list() {
        if (this.need === 'todo') {
          return this.$store.state.undone;
        } else if (this.need === 'do') {
          return this.$store.state.done;
        }
      }
    },
  }
</script>

<style scoped lang="less">
   .mix() {
    flex-shrink: 0;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 10px;
    display: inline-block;
    width: 16px;
    height: 16px;
  }
  .delete {
    .mix();
    background-image: url(~assets/img/173-bin.svg);
  }
  .back {
    .mix();
    background-image: url(~assets/img/313-arrow-left.svg)
  }
  .edit {
    .mix();
    background-image: url(~assets/img/006-pencil.svg);
  }
  .done {
    .mix();
    background-image: url(~assets/img/273-checkmark.svg)
  }
  .list {
    padding: 20px 20px;
    .item {
      display: flex;
      font-size: 20px;
      height: 20px;
      padding: 10px 0;
      .content {
        margin-right: 10px;
        word-break: break-all;
        flex: 1;
      }
    }
    .through {
      color: darkgray;
      text-decoration: line-through;
    }
  }
</style>
