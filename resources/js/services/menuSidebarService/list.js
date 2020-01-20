import Menu from './Menu'

export const menuListAdmin = (permissons) => {
  return [
    new Menu('Dashboard', 'view-dashboard', {name: 'Admin'}, true),
    new Menu('Usuários', 'account-group', {name: 'Admin.Usuarios'}, true),
  ]
}
