<template>
  <!--保单信息-->
  <div>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="保单信息">
        <PolicyInformationC :list="data1"></PolicyInformationC>
      </a-tab-pane>
      <a-tab-pane key="2" tab="投保人信息" force-render>
        <PolicyInformationC :list="data2"></PolicyInformationC>
      </a-tab-pane>
      <a-tab-pane key="3" tab="被保人信息">
        <TabA></TabA>
      </a-tab-pane>
      <a-tab-pane key="4" tab="收益人信息">
        <TabB></TabB>
      </a-tab-pane>
      <a-tab-pane key="5" tab="产品信息" force-render>
        <PolicyInformationC :list="data3"></PolicyInformationC>      </a-tab-pane>
      <a-tab-pane key="6" tab="保单缴费信息">
        <PolicyInformationC :list="data3"></PolicyInformationC>
      </a-tab-pane>
      <a-tab-pane key="7" tab="服务人员信息">
        <h2>人员信息</h2>
        <PolicyInformationC :list="data3"></PolicyInformationC>
        <h2>北京人员信息</h2>
        <PolicyInformationC :list="data3"></PolicyInformationC>
      </a-tab-pane>
      <a-tab-pane key="8" tab="管理机构信息" force-render>
        <h3>管理机构信息</h3>
        <PolicyInformationC :list="data3"></PolicyInformationC>
      </a-tab-pane>
      <a-tab-pane key="9" tab="拨打记录">
        <TabC></TabC>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import PolicyInformationC from '@/components/Query/Message/PolicyInformationC.vue'
import TabA from '@/components/Query/Message/TabA.vue'
import TabB from '@/components/Query/Message/TabB.vue'
import TabC from '@/components/Query/Message/TabC.vue'
export default {
  name: 'PolicyInformation',
  data () {
    return {
      listA: this.$store.state.ruleFormA,
      data1:
        [{
          title: '保单号'
          // val: '1'
          // val: `"${this.listA.PolicyNumber === undefined ? '' : this.listA.PolicyNumber}"`
        }, {
          title: '本期是否缴费'
          // val: `${this.listA.pay || ''}`
        }, {
          title: '保单管理机构'
          // val: `${this.listA.mechanism}`
        }, {
          title: '是否是孤儿'
          // val: `${this.listA.orphan}`
        }, {
          title: '失效日期'
          // val: `${this.listA.failure}`
        }, {
          title: '应缴保费区间'
          // val: `${this.listA.payable}`
        }, {
          title: '保单出单渠道'
          // val: `${this.listA.channel}`
        }, {
          title: '保单状态'
          // val: `${this.listA.state}`
        }],
      data2:
        [{
          title: '投保人'
          // val: '1'
          // val: `"${this.listA.PolicyNumber === undefined ? '' : this.listA.PolicyNumber}"`
        }, {
          title: '应保人'
          // val: `${this.listA.pay || ''}`
        }, {
          title: '性别'
          // val: `${this.listA.mechanism}`
        }, {
          title: '手机号码'
          // val: `${this.listA.orphan}`
        }, {
          title: '证件类型'
          // val: `${this.listA.failure}`
        }, {
          title: '缴费方式'
          // val: `${this.listA.payable}`
        }, {
          title: '缴费频率'
          // val: `${this.listA.channel}`
        }, {
          title: '保单状态'
          // val: `${this.listA.state}`
        }, {
          title: '区间'
          // val: `${this.listA.channel}`
        }, {
          title: '家庭住址'
          // val: `${this.listA.state}`
        }],
      data3:
        [{
          title: '缴费人'
          // val: '1'
          // val: `"${this.listA.PolicyNumber === undefined ? '' : this.listA.PolicyNumber}"`
        }, {
          title: '收费人'
          // val: `${this.listA.pay || ''}`
        }, {
          title: '性别'
          // val: `${this.listA.mechanism}`
        }, {
          title: '手机号码'
          // val: `${this.listA.orphan}`
        }, {
          title: '证件类型'
          // val: `${this.listA.failure}`
        }, {
          title: '缴费方式'
          // val: `${this.listA.payable}`
        }, {
          title: '缴费频率'
          // val: `${this.listA.channel}`
        }, {
          title: '保单状态'
          // val: `${this.listA.state}`
        }, {
          title: '账户开销'
          // val: `${this.listA.channel}`
        }, {
          title: '家庭住址'
          // val: `${this.listA.state}`
        }]
    }
  },
  components: {
    PolicyInformationC,
    TabA,
    TabB,
    TabC
  },
  methods: {
    callback (key) {
      console.log(key)
      console.log(this.listA)
    }
  }
}
</script>

<style scoped>

</style>
