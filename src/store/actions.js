import axios from 'axios'
import mutationsType from './mutationsType'

const baseUrl = 'http://localhost:8088/items';

export const actions = {

  getItems({ commit }) {
    axios.get(baseUrl).then(response => commit(mutationsType.RE_LOAD_ITEMS, response.data));
  },
  addItem(context, data) {
    axios.post(baseUrl, data).then(() => this.dispatch('getItems'));
  },
  updateItem(context, data) {
    axios.put(`${baseUrl}`, data).then(() => this.dispatch('getItems'));
  },
  deleteItem(context, data) {
    axios.deleteItem(`${baseUrl}/${data.id}`, data).then(() => this.dispatch('getItems'));
  }
}