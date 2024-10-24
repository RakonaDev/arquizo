
export function Navigation(el, instance = 0, setTrasladando, item) {
  const $el = document.querySelectorAll(el)[instance]
  setTrasladando(item)
  $el.scrollIntoView({ behavior: 'smooth' })
}