import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface SnackbarOptions {
  states: boolean;
  promptText: string;
  color: string;
}

export default new Vuex.Store({
  state: {
    loading: false,
    stepperState: 1,
    snackbar: {
      states: false,
      promptText: '',
      color: ''
    }
  },
  mutations: {
    changeLoadingState(state) {
      state.loading = !state.loading;
    },
    goToNextStep(state) {
      if (state.stepperState == 3){
        state.stepperState = 1;
        return
      }
      state.stepperState = state.stepperState + 1;
    },
    changeSnackbarState(state, payload: SnackbarOptions) {
      state.snackbar = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
