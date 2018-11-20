const baseApi = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/'

module.exports = {
  baseApi: baseApi
}