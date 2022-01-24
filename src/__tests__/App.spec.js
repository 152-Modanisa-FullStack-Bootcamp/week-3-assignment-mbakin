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

})