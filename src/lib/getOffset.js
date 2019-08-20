/* eslint-disable */

export default function offset(el, center = true) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return {
    top: rect.top + scrollTop + (center ? (rect.height / 2) : 0),
    left: rect.left + scrollLeft + (center ? (rect.width / 2) : 0)
  }
}
