import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
      username: 'uname',
      password: '123'
    },
    // 任务查询
    ruleFormA: {},
    // 外呼查询
    ruleFormB: {},
    // 数据分配
    ruleFormC: {},
    // 新增数据
    ruleFormD: [],
    //  任务分配列表数据
    data: {},
    //   外呼配置信息列表
    dataA: []
  },
  getters: {
    listA: state => {
      console.log(state.data.filter(item => {
        console.log(item.PolicyNumber, state.ruleFormA.PolicyNumber)
        return item.PolicyNumber === state.ruleFormA.PolicyNumber
      }))
      return state.data.filter(item => item.PolicyNumber === state.ruleFormA.PolicyNumber)
    }
    // listB: state => state.dataA.filter(item => item.manufacturer === state.ruleFormB.manufacturer)
  },
  mutations: {
    // 登录时给绘画存储一份账号与密码
    form (state, val) {
      state.form = val
      const uname = JSON.stringify(state.form)
      sessionStorage.setItem('form', uname)
    },
    // 更改密码时的同步
    changeForm (state, val) {
      state.form.password = val
      const uname = JSON.stringify(state.form)
      sessionStorage.setItem('form', uname)
    },
    // 给任务查询的数据同步到state中
    ruleFormA (state, val) {
      state.ruleFormA = val
    },
    // 给任务查询的数据同步到state中
    ruleFormB (state, val) {
      console.log(state.dataA, val)
      state.ruleFormB = val
      state.dataA = state.dataA.filter(item => item.manufacturerName === val.manufacturer)
      console.log(state.dataA)
    },
    // 给任务查询的数据同步到state中
    ruleFormC (state, val) {
      state.ruleFormC = val
    },
    // 给新增配置的数据同步到state中
    ruleFormD (state, val) {
      state.dataA.push(val)
    }
    // filterB (state, val) {
    // }
  },
  actions: {
    async dataA (context) {
      const { data: { list: res } } = await axios.get('/json/TableData.json')
      context.state.data = res
    },
    async dataB (context) {
      const { data: { list: res } } = await axios.get('/json/tsconfig.json')
      console.log(res)
      context.state.dataA = res
    }
  },
  modules: {
  }
})
