import Counter from "@/Counter";
import {mount, shallowMount} from "@vue/test-utils";
import store from "@/store";


describe('Counter.vue component', () => {
  it('sanity check', () => {
    expect(true).toBe(true)
  })
  
  const wrapper = shallowMount(Counter, {
    mocks: {
      $store: store
    }
  });
  
  it('should component exists', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  
})