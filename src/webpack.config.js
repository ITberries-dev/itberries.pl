module.exports = (baseConfig, env) => {
    baseConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
  
    baseConfig.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ],
    })
  
    baseConfig.resolve.extensions.push('.ts', '.tsx', '.css');
    return baseConfig;
  };