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
    describe('Counter elements exist', () =>{
      it('should component exists', () => {
        expect(wrapper.exists()).toBeTruthy()
      })
      it('should Increase button exist check',  () => {
        expect(wrapper.find("#increase-button").exists()).toBeTruthy()
      });
      it('should Decrease button exist check', () => {
        expect(wrapper.find("#decrease-button").exists()).toBeTruthy()
      })
    })
})