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
    title: '人员编号',
    dataIndex: 'CustomerNumber',
    width: 150
  },
  {
    title: '人员姓名',
    dataIndex: 'name',
    width: 150
  },
  {
    title: '日期',
    dataIndex: 'gender'
  },
  {
    title: '一级结束',
    dataIndex: 'relationship',
    width: 150
  },
  {
    title: '二级结束',
    dataIndex: 'phoneNumber'
  },
  {
    title: '三级结束',
    dataIndex: 'aaa',
    width: 150
  },
  {
    title: '预约时间',
    dataIndex: 'document',
    width: 150
  },
  {
    title: '备注',
    dataIndex: 'documentNumber'
  }
]

const data = [{
  CustomerNumber: '112233',
  name: '一样',
  gender: '20023-04-17',
  relationship: '双赢',
  phoneNumber: '预约下次难点',
  aaa: '',
  document: '2023-04-20 00:00:00',
  documentNumber: '12315'
},
{
  CustomerNumber: '112233',
  name: '一样',
  gender: '20023-04-17',
  relationship: '双赢',
  phoneNumber: '预约下次难点',
  aaa: '',
  document: '2023-04-20 00:00:00',
  documentNumber: '12315'
}, {
  CustomerNumber: '112233',
  name: '一样',
  gender: '20023-04-17',
  relationship: '双赢',
  phoneNumber: '预约下次难点',
  aaa: '',
  document: '2023-04-20 00:00:00',
  documentNumber: '12315'
}, {
  CustomerNumber: '112233',
  name: '一样',
  gender: '20023-04-17',
  relationship: '双赢',
  phoneNumber: '预约下次难点',
  aaa: '',
  document: '2023-04-20 00:00:00',
  documentNumber: '12315'
}, {
  CustomerNumber: '112233',
  name: '一样',
  gender: '20023-04-17',
  relationship: '双赢',
  phoneNumber: '预约下次难点',
  aaa: '',
  document: '2023-04-20 00:00:00',
  documentNumber: '12315'
}, {
  CustomerNumber: '112233',
  name: '一样',
  gender: '20023-04-17',
  relationship: '双赢',
  phoneNumber: '预约下次难点',
  aaa: '',
  document: '2023-04-20 00:00:00',
  documentNumber: '12315'
}, {
  CustomerNumber: '112233',
  name: '一样',
  gender: '20023-04-17',
  relationship: '双赢',
  phoneNumber: '预约下次难点',
  aaa: '',
  document: '2023-04-20 00:00:00',
  documentNumber: '12315'
}, {
  CustomerNumber: '112233',
  name: '一样',
  gender: '20023-04-17',
  relationship: '双赢',
  phoneNumber: '预约下次难点',
  aaa: '',
  document: '2023-04-20 00:00:00',
  documentNumber: '12315'
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
