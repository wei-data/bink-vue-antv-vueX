<template>
<div>
<!--  外呼配置-->
  <SelectB></SelectB>
  <Add></Add>
  <TableA></TableA>
</div>
</template>

<script>
import SelectB from '@/components/Configurration/Select.vue'
import Add from '@/components/Configurration/Add.vue'
import TableA from '@/components/Configurration/Table.vue'
export default {
  name: 'ConfigurationA',
  components: { SelectB, Add, TableA }
}
</script>

<style scoped>

</style>
