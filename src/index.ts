import { Directive } from "vue"

export const clickOutside: Directive = {
  mounted(el, binding) {
    el.clickOutsideEvent = function (event: PointerEvent) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el)
      }
    }
    document.addEventListener("click", el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent)
  },
}
