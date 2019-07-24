<template>
  <div class="dialog" v-if="show">
    <input type='text' v-model='message' autofocus @keyup.enter="submitHandle"/>
    <button  @click="submitHandle" >提交</button>
    <span class="closed" @click="closeHandle">x</span>
  </div>
</template>

<script>
  export default {
    props:['show', 'editMessage'],
    data() {
      return {
        message: this.editMessage,
      }
    },
    methods: {
      closeHandle() {
        this.message = '';
        this.$emit('close');
      },
      submitHandle() {
        if (this.editMessage !== '') {
          this.$store.commit('updateUndone', this.message + '&' +this.editMessage);
        } else {
          this.$store.commit('appendUndone', this.message);
        }
        this.message = '';
        this.$emit('close');
        if (this.$route.path === '/done') {
          this.$router.push('/');
        }
      },
    },
    watch: {
      editMessage() {
        this.message = this.editMessage;
      }
    }
  }
</script>

<style lang="less">
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .dialog {
    animation: show 0.5s;
    box-sizing: border-box;
    height: 200px;
    width: 300px;
    border-radius: 50px;
    background-color: blanchedalmond;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      margin-top: 30px;
      flex-grow: 0;
      width: 240px;
      height: 35px;
      border-radius: 50px;
      :focus {
        border-color: black;
      }
    }
    button {
      margin-top: 20px;
      background-color: powderblue;
      font-weight: 600;
      border-radius: 50px;
      height: 30px;
      width: 80px;
      border: 0px;
    }
    .closed {
      position: absolute;
      font-size: 24px;
      right: 30px;
      top: 10px;
    }
  }
</style>
