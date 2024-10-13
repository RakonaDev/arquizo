
export function Navigation(el, instance = 0) {
  const $el = document.querySelectorAll(el)[instance]
  $el.scrollIntoView({ behavior: 'smooth' })
}