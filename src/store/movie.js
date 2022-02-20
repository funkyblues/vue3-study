import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    movies: [],
    message: '',
    loading: false,
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      // ['movies', 'message', 'loading']
      // 위의 문자데이터가 하나의 key가 됩니다.
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      }) 
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  actions: {
    // context 매개변수를 객체 구조분할하여 commit() 메서드만 사용하겠음
    async searchMovies({ commit }, payload) {
      const { title, type, number, year} = payload
      const OMDB_API_KEY = 'a0a1e9a9'
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      console.log(res)
      // context.commit(~~)
      commit('updateState', {
        movies: Search,
      })
    }
  }
}