module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-reanimated/plugin'],
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@icons': './src/icons',
          '@modules': './src/modules',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@utils': './src/utils'
        }
      }]
    ]
  }
}
