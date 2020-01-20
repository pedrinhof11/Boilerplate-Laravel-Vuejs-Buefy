
export default class Menu {
  constructor (name, icon, to, permission) {
    this._name = name
    this._icon = icon
    this._to = to
    this._permission = permission
  }

  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
  }

  get icon () {
    return this._icon
  }

  set icon (value) {
    this._icon = value
  }

  get to () {
    return this._to
  }

  set to (value) {
    this._to = value
  }

  get permission () {
    return this._permission
  }

  set permission (value) {
    this._permission = value
  }
}
