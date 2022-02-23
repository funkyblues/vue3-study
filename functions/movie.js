const axios = require('axios')

exports.handler = async function (event/*,context*/) {
  // 이 속성들을 어떻게 얻어올 것인가?
  // 아래와 같이 작성해주면 됨
  // 그러나 주의: 네트워크 상으로 데이터를 주고받을 때는 메모리 or 용량의 문제로
  // 데이터를 문자데이터로 변경해서 사용하게 됨.
  // 따라서 JSON.parse()로 문자 데이터를 객체 데이터로 변환해주어야 한다.
  
  // 이 event는 어떻게 생겼냐? 확인해보쟈
  
  console.log(event)

  const payload = JSON.parse(event.body)
  const { title, type, year, page, id } = payload
  // 이제 APIkey를 프론트엔드가 아닌, serverless에서 사용할 수 있게 되었음.
  const OMDB_API_KEY = 'a0a1e9a9'
  const url = id 
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` 
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

  try {
    // GET Method로 받는 객체 데이터의 속성 data를 바로 사용하겠다는 의미의
    // 객체 구조분할
    const { data } = await axios.get(url)
    if ( data.Error ) {
      return {
        statusCode: '400',
        body: data.Error
      }
    }
    return {
      statusCode: '200',
      // data는 객체 데이터이므로, JSON.stringify로 문자 데이터로 만들어 주어야 한다.
      body: JSON.stringify(data)
    }
  }
  catch (error) {
    return {
      // 어떻게 이런 객체들이 있는지 알 수 있나
      // axios 문서를 확인해보면 됨
      // 이런 문서들을 꼼꼼하게 읽는 습관.
      statusCode: error.response.status,
      body: error.message
    }
  }
}