exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Changuk',
      age: 26,
      email: 'dnr8874@gmail.com'
    })
  }
}