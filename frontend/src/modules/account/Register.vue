<template>
  <div class="register">
    <fieldset>
      <legend>daysofrum.ropr.se</legend>
      <div v-if="!vm.registerResult.hasResult" class="register-form">
        <h1>Register</h1>
        <label for="username">
          <span>username:</span>
          <input id="username" v-model="vm.registerModel.userName" type="text">
        </label>
        <label for="email">
          <span>email:</span>
          <input id="email" v-model="vm.registerModel.email" type="text">
        </label>
        <label for="password">
          <span>password:</span>
          <input id="password" v-model="vm.registerModel.password" type="password">
        </label>
        <label for="passwordConfirm">
          <span>confirm password:</span>
          <input id="passwordConfirm" v-model="vm.confirmPassword" type="password">
        </label>
        <div class="buttons">
          <button @click="vm.send()" :disabled="vm.registerModel.isRegistering || !vm.isValid()" class="send">send</button>
          <button @click="vm.cancel()" class="cancel">cancel</button>
        </div>
      </div>
      <div v-else>
        <h1>Register result</h1>
        <div>{{vm.getResultString()}}</div>
        <button v-if="!vm.registerResult.result" @click="vm.retryRegister()">Retry</button>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { ACTIONS } from '@/store/actions'

const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  data () {
    return {
      confirmPassword: ''
    }
  },
  created () {
    this.$store.dispatch(ACTIONS.GET_AUTH_SETTINGS)
  },
  watch: {
    registerResult (newVal, oldVal) {
      this.registerModel.isRegistering = false
      if (newVal.result) {
        setTimeout(() => {
          this.$router.push({ path: '/' })
        }, 5000)
      }
    }
  },
  computed: {
    vm () {
      return this
    },
    registerModel () {
      return this.$store.state.account.register
    },
    registerResult () {
      return this.$store.state.account.register.result
    }
  },
  methods: {
    send () {
      this.registerModel.isRegistering = true
      this.$store.dispatch(ACTIONS.ACCOUNT_REGISTER, Object.assign({}, this.registerModel))
    },
    cancel () {
      this.confirmPassword = ''
      this.$store.dispatch(ACTIONS.ACCOUNT_REGISTER_RESET)
    },
    isValid () {
      return this.validateUserName() && this.validateEmail() && this.validatePassword()
    },
    validateUserName () {
      return this.registerModel.userName && this.registerModel.userName.length >= 3
    },
    validateEmail () {
      return this.registerModel.email && emailRegex.test(this.registerModel.email.toLowerCase())
    },
    validatePassword () {
      return this.registerModel.password && this.registerModel.password.length > 3 && this.registerModel.password === this.confirmPassword
    },
    getResultString () {
      return this.registerResult.hasResult && this.registerResult.result
        ? 'Register successful, redirecting to home...'
        : 'Register failed, watch logs for more info'
    },
    retryRegister () {
      this.registerResult.hasResult = false
    }
  }
}
</script>

<style lang="less" scoped>
.register {
  text-align: left;
  padding: 20px !important;
  width: 20%;
  margin: 0 auto;

  fieldset {
    margin: 50px 0;
  }

  .register-form {
    width: 100%;
    padding: 0 0 20px 0;

    label {
      display: block;
      width: 80%;
      margin: 0 auto 10px auto;

      span {
        display: block;
        margin-bottom: 3px;
      }

      input {
        display: block;
        width: 100%;
      }
    }
    .buttons {
      display: flex;
      width: 50%;
      margin: 20px auto 0 auto;
      justify-content: space-between;

      button {
        padding: 5px 10px;
        border-radius: 3px;
        background-color: transparent;
        border: 1px solid;
        cursor: pointer;

        &.send {
          color: #0099cc;
          border-color: #0099cc;

          &:hover {
            color: white;
            background-color: #0099cc;
          }

          &:disabled {
            pointer-events: none;
            background-color: lightgray;
          }
        }

        &.cancel {
          color: red;
          border-color: red;

          &:hover {
            color: white;
            background-color: red;
          }
        }
      }
    }
  }

  h1 {
    display: block !important;
    text-align: left !important;
  }
}
</style>
