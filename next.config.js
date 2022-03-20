module.exports = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    }
  },
}
