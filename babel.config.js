module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  env: {
    development: {
      presets: [['@babel/preset-react', { development: true }]],
    },
  },
  plugins: ['@babel/plugin-transform-react-jsx'],
};
