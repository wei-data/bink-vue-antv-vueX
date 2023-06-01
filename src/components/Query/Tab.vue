<template>
 <div>
   <Allocation></Allocation>
   <a-table
     :columns="columns"
     :data-source="dataA"
     :row-key="record => record.id"
     :pagination="pagination"
     hideDefaultSelections
     :scroll="{ x: 1500, y: 300 }"
     :row-selection="{ onChange: onSelectChange }">
     <a slot="action" slot-scope="" >保单详细消息</a>
     <template slot="position" slot-scope="">
       <a-pagination size="small" :total="50" show-size-changer show-quick-jumper />
     </template>
   </a-table>
<!--   <p>{{this.listA}}</p>-->
<!--给table的每一项添加一个key 值-->
<!--   :row-key="record => record.id"-->
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Allocation from '@/components/Query/Allocation.vue'
const columns = [
  { title: '保单号', width: 200, dataIndex: 'PolicyNumber', key: '1' },
  { title: '保单状态', width: 180, dataIndex: 'state', key: '2' },
  { title: '本期应缴日期', dataIndex: 'ExpirationDate', key: '3', width: 180 },
  { title: '本期缴费次数', dataIndex: 'address', key: '4', width: 180 },
  { title: '应缴保费', dataIndex: 'address', key: '5', width: 180 },
  { title: '本期缴费截止日', dataIndex: 'address', key: '6', width: 180 },
  { title: '本期是否缴费', dataIndex: 'address', key: '7', width: 180 },
  { title: '客户姓名', dataIndex: 'CustomerName', key: '8', width: 180 },
  { title: '客户性别', dataIndex: 'CustomerSex', key: '9', width: 180 },
  { title: '渠道', dataIndex: 'channel', key: '10', width: 180 },
  { title: '子渠道', dataIndex: 'subChannel', key: '11', width: 180 },
  { title: '保单管理机构名称', dataIndex: 'OrganizationName', key: '12', width: 180 },
  { title: '保单管理机构编辑', dataIndex: 'MechanismCoding', key: '13', width: 180 },
  { title: '代理机构', dataIndex: 'channel', key: '14', width: 180 },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 120,
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  name: 'TabA',
  computed: {
    ...mapGetters(['listA'])
  },
  components: {
    Allocation
  },
  data () {
    return {
      dataA: this.$store.getters.listA,
      columns,
      pagination: { // 表格自带分页器的属性定义
        defaultPageSize: 1, // 默认每页显示10条数据
        showTotal: total => `共${total}条数据`,
        showSizeChanger: true,
        pageSizeOptions: ['1', '2', '3', '4'], // 自定义每页显示多少条数据
        // eslint-disable-next-line no-return-assign
        onShowSizeChange: (current, pageSize) => {
          console.log(current, pageSize)
          this.pageSize = pageSize
        },
        showQuickJumper: true // 允许跳转至xx页
      }
    }
  },
  methods: {
    onSelectChange (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    }
  }
}
</script>

<style scoped>
::v-deep .ant-table-thead > tr > th{
  background: rgb(238, 241, 246);
}
/deep/.ant-table-pagination.ant-pagination{
  margin-right: 30px;
}
</style>
