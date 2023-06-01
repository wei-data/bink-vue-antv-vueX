<template>
  <div class="selectB">
    <a-form-model ref="ruleFormB" :model="ruleFormB" >
      <a-form-model-item has-feedback label="管理机构" prop="management">
        <a-select
          placeholder=""
          @change="handleChange">
            <a-select-option value="北京总公司">
              北京总公司
            </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item has-feedback label="外呼厂商：" prop="nn">
        <a-select
          placeholder="外呼厂商-雪融融"
          @change="handleChange1">
            <a-select-option value="外呼厂商-雪融融">
              外呼厂商-雪融融
            </a-select-option>
            <a-select-option value="外呼厂商-冰墩墩">
              外呼厂商-冰墩墩
            </a-select-option>
            <a-select-option value="外呼厂商-天润">
              外呼厂商-天润
            </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item has-feedback label="创建时间" prop="failure">
        <a-date-picker @change="onChange" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="创建时间止期" prop="manufacturer">
        <a-date-picker @change="onChange1" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button class="clear" type="primary" @click="submitFormA">查询</a-button>
        <a-button style="margin-left: 10px;" @click="resetForm">Reset</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'SelectB',
  data () {
    return {
      // 外呼
      ruleFormB: {
        name: '外呼',
        // 管理
        management: '',
        // 创建时间
        failure: '',
        // 止期时间
        failure1: '',
        // 厂商
        manufacturer: ''
      }
    }
  },
  methods: {
    submitFormA () {
      this.$store.commit('ruleFormB', this.ruleFormB)
    },
    onChange (date, dateString) {
      // 创建时间
      console.log(date, dateString)
      this.ruleFormB.failure = dateString
    },
    onChange1 (date, dateString) {
      // 创建时间止期
      console.log(date, dateString)
      this.ruleFormB.failure1 = dateString
    },
    handleChange (value) {
      // 管理机构
      console.log(`selected ${value}1111`)
      this.ruleFormB.management = value
    },
    handleChange1 (value) {
      // 厂商
      console.log(`selected ${value}222222`)
      this.ruleFormB.manufacturer = value
    },
    resetForm () {
      this.$refs.ruleFormB.resetFields()
      console.log(this.$refs.ruleFormB, this.ruleFormB)
    }
  }
}
</script>

<style scoped>
.ant-form {
  display: flex;
  flex-wrap: wrap;
}
/deep/.ant-select{
  width: 280px;
}

.ant-form-item {
  display: flex;
  width: 380px;
  margin-right: 80px;
}
/deep/.ant-input{
  width: 280px;
}
/deep/.ant-form-item-label{
  width: 200px;
}
</style>
