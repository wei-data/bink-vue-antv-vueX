<template>
<!--  首页-->
<div>
  <p>账号: {{form.username}}</p>
  <p>所属机构:{{area}}</p>
  <div>
    <a-button type="primary" @click="showModal">修改密码</a-button>
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
        <a-form-model-item has-feedback label="Age" prop="age">
          <a-input v-model.number="ruleForm.age" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="Password" prop="pass">
          <a-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="Confirm" prop="checkPass">
          <a-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }" :style="{display: 'flex',justifyContent: 'center'}">
          <a-button type="primary" @click="submitForm('ruleForm')">
            Submit
          </a-button>
          <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
            Reset
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</div>
</template>

<script>
export default {
  name: 'MainA',
  data () {
    const checkAge = (rule, value, callback) => {
      console.log(this.form.password)
      if (value !== Number(this.form.password)) {
        callback(new Error('请输入正确的密码'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('新密码不能为空哦！！！'))
      } else {
        if (this.ruleForm.pass === this.form.password) {
          callback(new Error('新密码不能与旧密码相同哦！！！'))
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      console.log(value)
      if (value === '') {
        callback(new Error('请重新输入密码，不能为空！！！'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('新密码要一致!！！'))
      } else {
        callback()
      }
    }
    return {
      form: '',
      area: '北京人人志远',
      visible: false,
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'change' }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
        age: [{ validator: checkAge, trigger: 'change' }]
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      console.log(e)
      this.visible = false
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('更改成功!')
          this.$store.commit('changeForm', this.ruleForm.checkPass)
          this.handleOk()
          this.$router.push('/LogIn')
        } else {
          console.log('抱歉密码等级太低无法保障安全!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    // 获取绘画存储的数据
    this.form = JSON.parse(sessionStorage.getItem('form'))
  }
}
</script>

<style scoped>
/deep/.ant-modal-footer{
  display: none;
}
</style>
