/* eslint-disable */

import getOffset from "./lib/getOffset"
import copyElementToBody from "./lib/copyElementToBody"
import flyAndDropAnimation from "./lib/flyAndDropAnimation"

export default function (orgEl, binding) {
  const targetEle = binding.value
  console.log(orgEl)
  console.log(binding)
  if (targetEle) {
    console.log(getOffset(targetEle))
    orgEl.addEventListener('click', function() {
      const cp = copyElementToBody(orgEl)
      flyAndDropAnimation(cp, targetEle)
    })
  }
}
