import {createLocalVue, mount} from "@vue/test-utils";
import App from "@/App";
import {getters, state} from "@/store";
import Vuex from "vuex";

function mountComponent() {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  
  return mount(App, {
    localVue,
    store: new Vuex.Store({
      state,
      getters
    })
  });
}

describe( 'App.vue component', () =>{
  it('sanity check', () => {
    expect(true).toBe(true);
  });
  
  it('should h1 element exists',  () => {
    const wrapper = mountComponent();
    expect(wrapper.find('h1').exists()).toBe(true);
  });
  it('should h1 text equals to `Daily Corona Cases in Turkey` ', () => {
    const wrapper = mountComponent();
    expect(wrapper.find('h1').text()).toBe('Daily Corona Cases in Turkey');
  });
  
  test('Notification Area text message check', () => {
    const dailyCountValue = 3
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const wrapper = mount(App, {
      localVue,
      store: new Vuex.Store({
        state:{
          count: dailyCountValue
        },
        getters,
      })
    })
    
    const expectCountText = wrapper.find('.notificationArea').text()
    expect(expectCountText).toEqual(`So safe. Case count is ${dailyCountValue}k`)
  })
})