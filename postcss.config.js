module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    postcss: {
      postcssPlugin: 'internal:charset-removal',
      AtRule: {
        charset: (atRule) => {
          if (atRule.name === 'charset') {
            atRule.remove()
          }
        },
      },
    },
  },
}
