import { menuList, menuListAdmin } from './list'

export default {
  getMenuSidebar: state => {
    let list = [];

    if (state.user && state.user.role === 'C') {
      list = menuList(state.permissoes)
    }
    if (state.user && state.user.role === 'A') {
      list = menuListAdmin(state.permissoes)
    }
    return list
  }
}
