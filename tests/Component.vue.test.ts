import { mount, VueWrapper } from "@vue/test-utils"

import clickOutside from "../src"

import Component from "./Component.vue"

let wrapper: VueWrapper

function mountWrapper() {
  const a = mount(Component)
  wrapper = mount(Component)
}

describe("Component.vue", () => {
  beforeEach(function () {
    mountWrapper()
  })

  it("should have box element not visible at first", () => {
    expect(wrapper.find(".box").exists()).toBe(true)
  })

  it("should have box counter increased if button is clicked", async () => {
    expect(wrapper.find(".box").exists()).toBe(true)

    const button = wrapper.find(".box")
    await button.trigger("click")

    expect(wrapper.find(".box").text()).toBe("BOX 1")
  })

  // TODO: fix it.
  it("should have box element invisible if data visible is false", async () => {
    const wrapper = mount(Component, {
      global: {
        directives: {
          clickOutside,
        },
      },
    })

    const box = wrapper.find(".box")
    const main = wrapper.find("main")

    expect(box.exists()).toBe(true)

    await main.trigger("click")

    expect(box.isVisible()).toBe(false)
  })
})
