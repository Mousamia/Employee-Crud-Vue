const { defineConfig } = require('@vue/cli-service')


module.exports = {
  publicPath: process.env.Node_ENV === 'production'
  ?'/Employee-Crud-Vue/'
  :'/'
}
