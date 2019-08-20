/* eslint-disable */

import getOffset from "./getOffset"

export default function (el) {
  const cp = el.cloneNode(true)
  document.querySelector('body').appendChild(cp)
  cp.style.cssText = document.defaultView.getComputedStyle(el, "").cssText

  // set position
  const offset = getOffset(el, false)
  cp.style.position = 'fixed'
  cp.style.top = offset.top + 'px'
  cp.style.left = offset.left + 'px'
  cp.style.zIndex = '10001'
  cp.style.margin = '0'
  cp.style.padding = '0'
  return cp
}
