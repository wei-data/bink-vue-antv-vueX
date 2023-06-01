<template>
 <div class="select">
   <a-form-model ref="ruleForm" :model="ruleFormA">
     <a-form-model-item has-feedback label="保单状态" prop="state">
       <a-select
         placeholder="状态"
         @change="handleChange">
         <a-select-opt-group>
           <a-select-option value="有效保单">
             有效保单
           </a-select-option>
           <a-select-option value="可复效的失效保单">
             可复效的失效保单
           </a-select-option>
           <a-select-option value="不可复效的失效保单">
             不可复效的失效保单
           </a-select-option>
         </a-select-opt-group>
       </a-select>
     </a-form-model-item>
     <a-form-model-item has-feedback label="保单失效月：" prop="failure">
       <a-month-picker placeholder="日期" @change="onChange">
         <template slot="month" slot-scope="current">
           <div class="ant-calendar-date">
             {{ current }}
           </div>
         </template>
       </a-month-picker>
     </a-form-model-item>
     <a-form-model-item has-feedback label="保单管理机构" prop="mechanism">
       <a-select
         show-search
         placeholder="机构"
         option-filter-prop="children"
         :filter-option="filterOption"
         @change="handleChange1"
       >
         <a-select-option value="北京公安银保局">
           北京公安银保局
         </a-select-option>
         <a-select-option value="北京银保局">
           北京银保局
         </a-select-option>
         <a-select-option value="北京邮政局">
           北京邮政局
         </a-select-option>
       </a-select>
     </a-form-model-item>
     <a-form-model-item has-feedback label="保单号" prop="PolicyNumber">
       <a-input placeholder="保单号"  @blur="inputVal($event)"/>
     </a-form-model-item>
     <a-form-model-item has-feedback label="保单出单渠道" prop="channel">
       <a-select
         show-search
         placeholder="渠道"
         option-filter-prop="children"
         :filter-option="filterOption"
         @change="handleChange2"
       >
         <a-select-option value="代网">
           代网
         </a-select-option>
         <a-select-option value="直营">
           直营
         </a-select-option>
       </a-select>
     </a-form-model-item>
     <a-form-model-item has-feedback label="是否孤儿单" prop="orphan">
       <a-select
         show-search
         placeholder="是否孤儿？"
         option-filter-prop="children"
         :filter-option="filterOption"
         @change="handleChange3"
       >
         <a-select-option value="true">
           是
         </a-select-option>
         <a-select-option value="false">
           否
         </a-select-option>
       </a-select>
     </a-form-model-item>
     <a-form-model-item v-if="ruleFormA.state === '有效保单'" has-feedback label="应缴保单区间" prop="orphan">
       <a-select
         show-search
         placeholder="money"
         option-filter-prop="children"
         :filter-option="filterOption"
         @change="handleClear5"
       >
         <a-select-option value="1w以下">
           1W以下
         </a-select-option>
         <a-select-option value="1W-5W">
           1W-5W
         </a-select-option>
         <a-select-option value="5W-10W">
           5W-10W
         </a-select-option>
         <a-select-option value="10W-20W">
           10W-20W
         </a-select-option>
         <a-select-option value="20W-50W">
           20W-50W
         </a-select-option>
         <a-select-option value="50W-100W">
           50W-100W
         </a-select-option>
       </a-select>
     </a-form-model-item>
     <a-form-model-item v-if="ruleFormA.state === '有效保单'" has-feedback label="本期是否缴费" prop="orphan">
       <a-select
         show-search
         placeholder="money"
         option-filter-prop="children"
         :filter-option="filterOption"
         @change="handleChange4"
       >
         <a-select-option value="是">
           是
         </a-select-option>
         <a-select-option value="否">
           否
         </a-select-option>
       </a-select>
     </a-form-model-item>
   </a-form-model>
   <div class="OccupySpace">
     <a-button class="clear" type="primary" @click="submitFormA">
       查询
     </a-button>
   </div>
 </div>
</template>

<script>
export default {
  name: 'SelectA',
  data () {
    return {
      ruleFormA: {
        name: '任务查询',
        state: '',
        failure: '',
        mechanism: '',
        PolicyNumber: '',
        channel: '',
        orphan: '',
        payable: '',
        pay: ''
      },
      month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
  },
  methods: {
    submitFormA () {
      console.log(this.ruleFormA)
      this.$store.commit('ruleFormA', this.ruleFormA)
    },
    onChange (date, dateString) {
      // 拿取时间赋值给数据
      // console.log(date, dateString)
      this.ruleFormA.failure = dateString
    },
    handleChange (value) {
      // 保单状态
      console.log(`selected ${value}1111`)
      this.ruleFormA.state = value
    },
    handleChange1 (value) {
      // 机构
      console.log(`selected ${value}222222`)
      this.ruleFormA.mechanism = value
    },
    handleChange2 (value) {
      // 保单渠道
      console.log(`${value}33333`)
      this.ruleFormA.channel = value
    },
    handleChange3 (value) {
      // 孤儿
      console.log(`${value}44444`)
      this.ruleFormA.orphan = value
    },
    handleChange4 (value) {
      // 本期是否缴费
      console.log(value)
      this.ruleFormA.pay = value
    },
    handleClear5 (value) {
      // 应缴保单
      this.ruleFormA.payable = value
    },
    inputVal (e) {
      // 保单号
      console.log(e.target.value)
      this.ruleFormA.PolicyNumber = e.target.value
    },
    filterOption (input, option) {
      console.log(input, option)
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
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
.clear {
  float: right;
  margin-right: 300px;
  height: 32px;
  background: #14928b;
}
::v-deep.ant-select-dropdown-menu-item-group-title{
  height: 0!important;
}
.OccupySpace{
  height: 32px;
}
</style>
