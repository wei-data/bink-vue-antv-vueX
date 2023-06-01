<template>
<div>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 240 }"
  />
</div>
</template>

<script>
// import { mapState } from 'vuex'

const columns = [
  {
    key: '1',
    title: '管理机构名称',
    dataIndex: 'mechanismName'
  },
  {
    key: '2',
    title: '管理机构编码',
    dataIndex: 'coding'
  },
  {
    key: '3',
    title: '外呼厂商名称',
    dataIndex: 'manufacturerName'
  },
  {
    key: '4',
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    key: '5',
    title: '状态',
    dataIndex: 'state'
  },
  {
    key: '6',
    title: '操作',
    dataIndex: ''
  }
]
export default {
  name: 'TableA',
  data () {
    return {
      // 把数据给data数据
      data: this.$store.state.dataA,
      columns
    }
  }
  // computed: {
  //   // ...mapState(['ruleFormB'])
  // }
  // methods: {
  //   filterA () {
  //     this.data = this.data.filter(item => item.manufacturer === this.ruleFormB.manufacturer)
  //   }
  // }
}
</script>

<style scoped>

</style>
