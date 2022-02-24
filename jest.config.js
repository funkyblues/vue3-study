module.exports = {
  // 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자의 목록입니다.
  // 일반적으로 많이 사용되는 모듈의 확장자를 지정합니다.
  // Ex. `import HelloWorld from '~/components/HelloWorld';`
  moduleFileExtensions: [
    'js',
    'vue'
  ],

  // `~` 같은 경로 별칭을 매핑합니다.
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  // Ex. `import HelloWorld from '~/components/HelloWorld';`
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
    // . : 임의의 하나의 문자
    // * : 최대한 많이 일치하도록 하는 정규식
    // $1: 모든 경로를 의미
    // 즉 <rootDir>/src/에 있는 $1으로 통칭되는 모든 경로들을 
    // 위의 정규식과 매핑해서 사용하겠다는 의미.
  },

  // 일치하는 경로에서 모듈을 가져오지 않습니다.
  // `<rootDir>`토큰을 사용해 루트 경로를 참조할 수 있습니다.
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist'
  ],

  // jsdom 환경에(HTML과 유사) 대한 URL을 설정합니다.
  // https://github.com/facebook/jest/issues/6766
  testURL: 'http://localhost',

  // 정규식과 일치하는 파일의 변환 모듈을 지정합니다.

  // jest는 VueJS만을 테스트하기 위해 만들어진것이 아니기 때문에 우리의
  // 프로젝트 환경에 맞게 세팅해주면 됩니다.
  // .vue로 끝나는 파일들은 vue-jest라는 패키지를 사용해서 변환해주면 되는 것이고
  // .js로 끝나는 파일들은 bable-jest라는 패키지를 사용해서 변환해주면 되는 것입니다.
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  }
}