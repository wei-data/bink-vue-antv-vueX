<template>
<!--  任务查询-->
<div class="content">
  <a-tabs default-active-key="1">
  <a-tab-pane key="1" activeKey>
      <span slot="tab">
        待分配
      </span>
    <Select></Select>
    <Tab></Tab>
    <PolicyInformation></PolicyInformation>
  </a-tab-pane>
  <a-tab-pane key="2">
      <span slot="tab">
        已分配
      </span>
    <Select></Select>
    <Tab></Tab>
    <PolicyInformation></PolicyInformation>
  </a-tab-pane>
  </a-tabs>
</div>
</template>

<script>
import Select from '@/components/Query/Select.vue'
import Tab from '@/components/Query/Tab.vue'
import PolicyInformation from '@/components/Query/PolicyInformation.vue'
export default {
  name: 'QueryA',
  components: {
    PolicyInformation,
    Select,
    Tab
  }
}
</script>

<style lang="less" scoped>
/deep/.ant-tabs-nav-scroll{
  display: flex;
}
/deep/.ant-tabs-nav .ant-tabs-tab:hover{
  color: #14928b;
}
/deep/.ant-tabs-top .ant-tabs-ink-bar-animated, .ant-tabs-bottom .ant-tabs-ink-bar-animated{
  background: #14928b;
}
/deep/.ant-tabs-nav .ant-tabs-tab-active{
  color: #14928b;
}

</style>
