<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data2">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        <span></span>
      </a-card>
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  name: 'PolicyInformationC',
  props: ['list'],
  data () {
    return {
      data2: this.list
    }
  }
}
</script>

<style scoped>
/*/deep/.ant-card-bordered{*/
/*  display: flex;*/
/*}*/
/deep/.ant-col{
  padding: 0!important;
  width: 50%;
  margin: 0;
}
/deep/.ant-list-item{
  margin: 0!important;
}
/deep/.ant-card-head {
  width: 40%;
  border-right: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
}
/deep/.ant-card-body{
  width: 60%;
  border-right: 1px solid #e8e8e8;
}
/deep/.ant-card-bordered{
  display: flex;
  border-right: 0;
  border-left: 0;
}
/deep/.ant-row {
  margin: 0 !important;
  border-left: 1px solid #e8e8e8;
}
</style>
