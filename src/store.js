import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import router from './router'

let api = axios.create({
  baseURL: 'https://battlecardz.herokuapp.com/api/games',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {
      opponent: {
        hand: [],
        cardId: ''
      },
      player: {
        hand: []
      }
    }
  },
  mutations: {
    setGame(state, game) {
      state.game = game
    },
    setOC(state, cardId) {
      state.game.opponent.cardId = cardId
    }
  },
  actions: {
    startGame({ commit }) {
      api.post('/')
        .then(res => {
          console.log(res)
          commit('setGame', res.data.game)
          router.push({ name: 'game', params: { id: res.data.game.id } })
        })
    },
    getGame({ commit }, id) {
      api.get('/' + id)
        .then(res => {
          console.log(res)
          commit('setGame', res.data.data)
        })
    },
    setOpponentCard({ commit }, cardId) {
      commit('setOC', cardId)
    }

  }
})
