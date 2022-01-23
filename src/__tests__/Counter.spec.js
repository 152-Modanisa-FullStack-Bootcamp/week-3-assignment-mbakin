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
  it('should Increase button exist check',  () => {
    expect(wrapper.find("#increase-button").exists()).toBeTruthy()
  });
  it('should Decrease button exist check', () => {
    expect(wrapper.find("#decrease-button").exists()).toBeTruthy()
  })
  
  describe('Counter component elements functionality', () => {
    it('should increase button functionality', async () => {
      // Counter value should be 0 first status,
      // when click on increase button
      // Counter value should be 1 after click on increase button
      const increaseButton = wrapper.find("#increase-button");
      await increaseButton.trigger("click");
      const counterValue = wrapper.find("#count");
      expect(counterValue.text()).toBe("1k")
    })
    it('should decrease button functionality', async () => {
      // Counter value should be 0 first status,
      // when click on decrease button
      // Counter value should be -1 after click on decrease button
      const decreaseButton = wrapper.find("#decrease-button");
      await decreaseButton.trigger("click");
      const counterValue = wrapper.find("#count");
      expect(counterValue.text()).toBe("-1k")
    });
  })
})