<template>
  <div>
    <navbar />
    <div class="is-flex layout">
      <aside class="menu layout-sidebar">
        <ul class="menu-list">
          <template v-for="(menu, index) in menuSidebar">
            <li v-if="menu.permission" :key="index">
              <router-link :to="menu.to" exact :class="{'tooltip is-tooltip-right': minify}" :data-tooltip="menu.name">
                <b-icon :icon="menu.icon" />
                <span>{{ menu.name }}</span>
              </router-link>
            </li>
          </template>
        </ul>
      </aside>
      <main class="layout-main">
        <child />
      </main>
    </div>
  </div>
</template>

<script>
import Child from '../components/Child'
import navbar from '../components/Navbar'
import { menuListAdmin } from '../services/menuSidebarService/list'

export default {
  name: 'MainLayout',
  components: { Child, navbar },
  data () {
    return {
      menuSidebar: menuListAdmin(null),
      minify: false
    }
  }
}
</script>

<style lang="scss">
  .layout{
    .layout-sidebar{
      padding: 1rem .75rem;
      width: 200px;
      height: calc(100vh - 52px);
      background: hsl(204, 73%, 27%);
    }
  }
</style>
