import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

const _defaultMessage = 'Search for the movie title!'

export default {
  namespaced: true,
  state: () => ({
    movies: [],
    message: _defaultMessage,
    loading: false,
    theMovie: {}
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      }) 
    },
    resetMovies(state) {
      state.movies = []
      state.message = _defaultMessage
      state.loading = false
    }
  },
  actions: {
    async searchMovies({ state, commit }, payload) {
      if (state.loading) {
        return 
      }
      commit('updateState', {
        message: '',
        loading: true
      })
      try {
        const res = await _fetchMovie({
          ...payload,
          page: 1
        })
        const { Search, totalResults } = res.data
        console.log(res)
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID'),
        })
  
        const total = parseInt(totalResults, 10)
        const pageLength = Math.ceil(total / 10) 

        if (pageLength > 1) {
          for (let page = 2; page <= pageLength; page += 1) {
            if (page > (payload.number / 10)) {
              break
            }
            const res = await _fetchMovie({
              ...payload,
              page // page: page
            })
            const { Search } = res.data
            commit('updateState', {
              movies: [
                ...state.movies, 
                ..._uniqBy(Search, 'imdbID')
              ]
            })
          }
        }
        // error로 받는 객체 데이터를 바로 객체 구조분할을 통해 message로 사용하겠다는 의미입니다.
      } catch ( { message } ) {
        commit('updateState', {
          // 현재 _fetchMovie가 netlify의 serverless 함수와 연결되어 동작하고 있기 떄문에,
          // 네트워크로 주고 받은 객체 데이터의 속성을 가져와서 할당해 주어야 합니다.
          movies: [],
          message
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    },
    async searchMovieWithId( { state, commit }, payload) {
      if (state.loading) {
        return
      }
      commit('updateState', {
        theMovie: {},
        loading: true
      })

      try {
        const res = await _fetchMovie(payload)
        console.log(res)
        commit('updateState', {
          theMovie: res.data
        })


      } catch (error) {
        commit('updateState', {
          theMovie: {}
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    }
  }
}

async function _fetchMovie(payload) {
  // 이젠 POST Method로 데이터를 넘겨주어야 함
  // axios의 post 메서드를 통해 serverless 함수 주소로 특정 데이터를 전송
  // get : 쿼리스트링에 정보를 담아서 클라이언트에서 서버로 요청하는 것
  // post : payload에 담아서 전송(?). 서버에서 클라이언트로 보내주는 것

  // 비동기로 동작하는 개념
  return await axios.post('/.netlify/functions/movie', payload)
}

