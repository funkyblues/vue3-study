export default {
  namespaced: true,
  // state: 데이터. 하나의 함수로 만들어 주면 됩니다.
  // 왜 함수로?
  // 객체 데이터는 하나의 참조형 데이터 -> 따라서 불변성 X
  // 그러므로 데이터의 불변성을 유지하려면, 함수로 만들어서 반환해주어야 
  // state에서 사용하는 데이터를 고유하게 유지할 수 있습니다.
  // 객체를 반환해주려면 ({}) 와 같이 작성해주어야 합니다.
  state: () => ({
    name: 'CHANGUK',
    email: 'dnr8874@gmail.com',
    blog: 'wukddang.github.io',
    phone: '+82-10-4332-8874',
    image: 'https://raw.githubusercontent.com/funkyblues/vue3-study/bb23abc5536bb1472fdd37e147867d5583ace843/src/assets/logo.jpg'
  })
}
