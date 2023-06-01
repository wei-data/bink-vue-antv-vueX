<template>
  <div class="hello">
    <a-layout class="layout" style="height: 100vh">
      <a-form-model
        ref="loginForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        class="login-form"
      >
        <h1 style="text-align: center;margin-bottom: 30px">
          续期催收管理平台
        </h1>
        <a-button class="yzm" type="text" @click="yzmA">验证码登录</a-button>
        <a-form-model-item ref="username" label="用户名" prop="username">
          <a-input v-model="form.username" type="text" autocomplete="off" @keyup.enter="login" />
        </a-form-model-item>
        <a-form-model-item ref="password" label="密码" prop="password">
          <a-input v-model="form.password" type="password" autocomplete="off" @keyup.enter="login" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" style="width: 45%" @click="login">
            登录
          </a-button>
        </a-form-model-item>
      </a-form-model>
      <div class="yzmA" v-if="flag">
        <slide-verify :l="42"
                      class="yzm"
                      :r="10"
                      :w="400"
                      :h="200"
                      @success="onSuccess"
                      @fail="onFail"
                      @refresh="onRefresh"
                      :slider-text="text"
        ></slide-verify>
        <div class="slider">{{msg}}</div>
      </div>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data () {
    return {
      msg: '',
      text: '向右滑',
      flag: false,
      // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
      accuracy: 1,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 表单校验通过，执行登录操作
          if (this.form.password === this.$store.state.form.password && this.form.username === this.$store.state.form.username) {
            localStorage.setItem('token', 'true')
            this.$store.commit('form', this.form)
            this.$message.info('登录中，请稍后...', 2, () => {
              this.$router.push({
                path: '/Home'
              }, () => {
              })
            })
          }
        } else {
          // 表单校验失败
          return false
        }
      })
    },
    yzmA () {
      this.flag = !this.flag
    },
    onSuccess (times) {
      console.log('验证通过，耗时' + times + '毫秒')
      this.msg = `login success, 耗时${(times / 1000).toFixed(1)}s`
      this.$message.info('This is a normal message')
      this.flag = false
    },
    onFail () {
      console.log('验证不通过')
      this.msg = ''
    },
    onRefresh () {
      console.log('点击了刷新小图标')
      this.msg = ''
    },
    onFulfilled () {
      console.log('刷新成功啦！')
    },
    onAgain () {
      console.log('检测到非人为操作的哦！')
      this.msg = 'try again'
      // 刷新
      this.$refs.slideblock.reset()
    },
    handleClick () {
      // 父组件直接可以调用刷新方法
      this.$refs.slideblock.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  width: 100%;
  height: 100vh;
  //background-image: url('../public/images/diqiu.png');
  .layout {
    background: #14928b;
    background-size: 100% 100%;
  }
  .login-form {
    background: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    width: 400px;
    position: relative;
    margin: 0 auto;
    padding: 30px 0 80px;
    top: 50%;
    transform: translateY(-50%);
  }
  .ant-form-item {
    display: flex;
    justify-content: center;
  }
  /deep/.ant-col-offset-4{
    margin-left: 0;
  }
}
.yzmA {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 240px;
  background: white;
  margin-left: -200px;
  margin-top: -120px;
  .slider {
    height: 40px;
    width: 100%;
    margin: 0!important;
  }
  .yzm{
    height: 200px;
  }
}
</style>
