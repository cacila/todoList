export const state = () => ({
	undone: [],
  done: []
})

export const mutations = {
	updateUndone(state, pass) {
    let [message, editmessage] = pass.split('&');
		let index = state.undone.indexOf(editmessage);
    state.undone.splice(index, 1, message);
	},
  appendUndone(state, message) {
    state.undone.push(message);
  },
  deleteUndone(state, message) {
    let index = state.undone.indexOf(message);
    state.undone.splice(index, 1);
  },
  deleteDone(state, message) {
    let index = state.done.indexOf(message);
    state.done.splice(index, 1);
  },
  complete(state, message) {
    let index = state.undone.indexOf(message);
    state.done.push(message);
    state.undone.splice(index, 1);
  },
  back(state, message) {
    let index = state.done.indexOf(message);
    state.undone.push(message);
    state.done.splice(index, 1);
  }
}
