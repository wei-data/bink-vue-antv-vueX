<template>
<div>
  <a-button type="primary" @click="showModal" class="ant-btn1">
    数据分配
  </a-button>
  <a-modal width="76%" v-model="visible" title="管理机构名称" @ok="handleOk">
    <a-form-model ref="ruleForm" :model="ruleFormD">
      <a-form-model-item has-feedback label="管理机构">
        <a-select
          show-search
          placeholder="机构"
          option-filter-prop="children"
          :filter-option="filterOption"
          @change="handleChange"
        >
          <a-select-option value="北京分公司">
            北京分公司
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item has-feedback label="管理机构编码" prop="orphan">
        <a-input @change="handleChange4"></a-input>
      </a-form-model-item>
      <a-form-model-item has-feedback label="外呼厂商名称" prop="mechanism">
        <a-select
          show-search
          placeholder="外呼厂商名称"
          option-filter-prop="children"
          :filter-option="filterOption"
          @change="handleChange1"
        >
          <a-select-option value="外呼厂商-雪融融">
            雪融融
          </a-select-option>
          <a-select-option value="外呼厂商-冰墩墩">
            冰墩墩
          </a-select-option>
          <a-select-option value="外呼厂商-天润">
            天润
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item has-feedback label="创建时间" prop="channel">
        <a-date-picker @change="onChange" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="状态" prop="orphan">
        <a-select
          show-search
          placeholder="部门？"
          option-filter-prop="children"
          :filter-option="filterOption"
          @change="handleChange3"
        >
          <a-select-option value="人事部">
            人事部
          </a-select-option>
          <a-select-option value="管理部">
            管理部
          </a-select-option>
          <a-select-option value="开发部">
            开发部
          </a-select-option>
          <a-select-option value="后厨部">
            后厨部
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item>
        <a-button @click="handleCancel" class="ant-btn2">
          分配
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</div>
</template>

<script>
export default {
  name: 'Add_',
  data () {
    return {
      visible: false,
      ruleFormD: {
        id: 0,
        // 新增数据
        name: '新增数据',
        // 编码
        coding: '',
        // 厂商名字
        manufacturerName: '',
        // 管理机构
        mechanismName: '',
        // 创建时间
        createTime: '',
        state: ''
      }
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      console.log(e)
      this.visible = false
    },
    handleCancel (e) {
      console.log(this.$refs.ruleForm)
      this.$store.commit('ruleFormD', this.ruleFormD)
      this.visible = false
      this.$refs.ruleForm.resetFields()
      const aaa = Math.floor(Math.random() * 100000)
      this.ruleFormD.id = aaa
    },
    onChange (date, dateString) {
      // 拿取时间赋值给数据
      // console.log(date, dateString)
      this.ruleFormD.createTime = dateString
    },
    handleChange (value) {
      // 管理机构名称
      console.log(`selected ${value}1111`)
      this.ruleFormD.mechanismName = value
    },
    handleChange1 (value) {
      // 外呼厂商名称
      console.log(`selected ${value}222222`)
      this.ruleFormD.manufacturerName = value
    },
    handleChange3 (value) {
      // 状态
      console.log(`${value}44444`)
      this.ruleFormD.state = value
    },
    handleChange4 (e) {
      // 管理机构编码
      this.ruleFormD.coding = Number(e.target.value)
    },
    filterOption (input, option) {
      console.log(input, option)
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    },
    handleClear5 (value) {
      // 业务员
      this.ruleFormD.business = value
    }
  }
}
</script>

<style scoped lang="less">
.ant-btn1{
  display: flex;
  align-items: center;
  background: #14928b;
  margin-bottom: 20px;
  color: white;
  margin-left: 20px;
}
.ant-btn2 {
  margin-right: 20px;
  color: white;
  background: #14928b;
}
/deep/.ant-modal-header {
  background: #14928b;
  text-align: center;
  color: white;
  .ant-modal-title{
    color: white;
  }
}
::v-deep .anticon{
  color: white!important;
}
::v-deep .ant-modal-footer{
  display: none;
}
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
