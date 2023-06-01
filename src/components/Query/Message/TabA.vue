<template>
  <a-table
    :columns="columns"
    :data-source="data"
    rowKey="id"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 240 }"
  />
</template>

<script>
const columns = [
  {
    title: '被保人客户号',
    dataIndex: 'CustomerNumber',
    width: 150
  },
  {
    title: '投保人姓名',
    dataIndex: 'name',
    width: 150
  },
  {
    title: '性别',
    dataIndex: 'gender'
  },
  {
    title: '关系',
    dataIndex: 'relationship',
    width: 150
  },
  {
    title: '手机号码',
    dataIndex: 'phoneNumber'
  },
  {
    title: '证件类型',
    dataIndex: 'document',
    width: 150
  },
  {
    title: '证件号',
    dataIndex: 'documentNumber'
  }
]

const data = [{
  CustomerNumber: '0054411a6424',
  name: '可以',
  gender: '男',
  relationship: '家人',
  phoneNumber: '2654156484',
  document: '身份证',
  documentNumber: '900***5554'
}]

export default {
  name: 'TabA',
  data () {
    return {
      data,
      columns
    }
  }
}
</script>

<style scoped>

</style>
