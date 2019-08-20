/* eslint-disable */

import getOffset from "./getOffset"

export default function (orgEl, targetEl, duration = 1500, curve = 10) {
  const orgCords = getOffset(orgEl, false)
  const currentPos = { ...orgCords }
  const targetCords = getOffset(targetEl)
  const intervalMs = 10
  const deltaX = (intervalMs / duration) * (targetCords.left - orgCords.left)
  const heightDiff = orgCords.top - targetCords.top
  orgEl.style.transform = 'scale(1)'
  orgEl.style.transition = `transform ${duration/1000}s cubic-bezier(0.6, -0.28, 0.74, 0.05)`
  orgEl.style.transform = 'scale(0)'
  let currentTime = 0
  console.log(heightDiff)
  const intervalJob = setInterval(() =>{
    currentTime += intervalMs
    currentPos.left += deltaX
    orgEl.style.left = currentPos.left + 'px'
    const deltaY = (curve - 2 * currentTime * (curve * duration - heightDiff) / (duration * duration))
    console.log(deltaY)
    currentPos.top -= deltaY
    orgEl.style.top = currentPos.top + 'px'
  }, intervalMs)

  //clear animation
  setTimeout(() => {
    clearInterval(intervalJob)
    orgEl.parentNode.removeChild(orgEl)
  }, duration)
}
