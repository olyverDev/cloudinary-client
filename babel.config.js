
module.exports = function (api) {
  const isTest = api.env('test');

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
      },
    ],
    '@babel/preset-react',
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
}