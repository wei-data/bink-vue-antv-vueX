<template>
  <a-layout id="layout">
    <!--    collapsed 判断收与放-->
    <a-layout-sider v-model="collapsed" collapsedWidth="0" :trigger="null" collapsible>
      <div class="logo">
        <h3>续期催收</h3>
      </div>
      <a-menu  theme="dark" mode="inline" :defaultOpenKeys="expansion" :default-selected-keys="selectKeys" v-if="!collapsed">
        <a-sub-menu key="任务查询">
          <span slot="title"><a-icon type="github" /><span>银保保单任务管理</span></span>
          <a-menu-item key="/Home/QueryA">
            <router-link to="/Home/QueryA" tag="div">
              <a-icon type="appstore" />
              <span>任务查询</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="外呼信息配置">
          <span slot="title"><a-icon type="ant-design" /><span>外呼管理</span></span>
          <a-menu-item key="/Home/ConfigurationA">
            <router-link to="/Home/ConfigurationA" tag="div">
              <a-icon type="cluster" />
              <span>外呼信息配置</span>
              </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="topNav" style="position: relative">
        <div class="tag">
          <div class="logo" v-if="collapsed">
            <h3>续期催收</h3>
          </div>
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </div>
        <div>
          <a-avatar>
            <a-icon slot="icon" type="user" />
          </a-avatar>
          <a-button type="danger" class="btn" @click="exit">
            退出登录
          </a-button>
        </div>
        <a-breadcrumb class="Breadcrumb" ref="bread">
          <div v-if="collapsed">
            <a-breadcrumb-item  separator="|">
              <router-link to="/Home">
                <a-icon type="home"  @click="homeA"/>
                <span>首页</span>
              </router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item separator="|">
              <router-link  to="/Home/QueryA">
                <a-icon type="user"/>
                <span>任务查询</span>
              </router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item separator="">
              <router-link to="/Home/ConfigurationA">
                外呼信息配置
              </router-link>
            </a-breadcrumb-item>
          </div>
          <div v-else-if="!collapsed">
            <a-breadcrumb-item v-for="(item,index) of $route.matched" :key="index+1"  separator="|">
              <router-link  :to="item.path" style="font-size:14px">
                <a-icon v-if=" !item.meta.title " type="home" />
                {{ item.meta.title }}
              </router-link>
            </a-breadcrumb-item>
          </div>
        </a-breadcrumb>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '40px 16px 20px',overflowY: 'scroll', padding: '24px', background: '#fff', minHeight: '280px', position: 'relative', width: w}"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: 'HomeA',
  data () {
    return {
      collapsed: false,
      selectKeys: [],
      expansion: [],
      w: '',
      l: ''
    }
  },
  computed: {
  },
  methods: {
    exit () {
      this.$message.warning('退出登录中,请稍后...', 2, () => {
        this.$router.push({
          path: '/LogIn'
        })
      })
    },
    homeA () {
      this.selectKeys = []
      console.log(this.selectKeys)
    }
  },
  beforeMount () {
    // 把对应的路由的地址赋给导航栏高亮的配置:default-selected-keys
    console.log(this.$route.matched)
    this.selectKeys = [`${this.$route.path}`]
    if (this.$route.meta.module) {
      // 把对应的路由的地址赋给导航栏展开的配置:defaultOpenKeys
      this.expansion = [`${this.$route.meta.module}`]
      console.log(this.$route.meta.module)
    }
    // 控制路由的宽度
    if (this.$route.path === '/Home/Main') {
      this.w = '250px'
    }
  },
  watch: {
    $route: {
      handler (newA, oldA) {
        // 监听路由的宽度
        console.log(this.$router)
        if (this.$route.path === '/Home/Main') {
          this.w = '250px'
          this.l = '230px'
        } else {
          this.w = '100%'
          this.l = '10px'
        }
        this.selectKeys = [`${this.$route.path}`]
      }
    }
  }
}
</script>
<style lang="less">
#layout{
  height: 100vh;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .logo {
    width: 200px;
    box-sizing: border-box;
    background: #009688;
    padding: 16px;

    h3 {
      line-height: 32px;
      color: white;
      background: #126a65;
      margin-bottom: 0;
      font-family: 楷体_GB2312;
    }
  }
  .topNav {
    background: #009688;
    display: flex;
    padding: 0 30px 0 0;
    box-sizing: border-box;
    justify-content: space-between;
    .btn{
      margin-left: 20px;
    }
    .trigger{
      color: white;
    }
    .tag{
      display: flex;
    }
  }
  .Breadcrumb {
    position: absolute;
    bottom: -30px;
    left: 20px;
  }
}
</style>
