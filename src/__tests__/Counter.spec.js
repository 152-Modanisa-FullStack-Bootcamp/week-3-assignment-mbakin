import Counter from "@/Counter";
import {mount, shallowMount} from "@vue/test-utils";


describe('Counter.vue component', () => {
  it('should component exists', () => {
    const wrapper = mount(Counter)
    expect(wrapper.exists()).toBeTruthy()
  })
})