
module.exports = function (api) {
  const isTest = api.env('test');

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
        useBuiltIns: "usage",
      },
    ],
    '@babel/preset-react',
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-transform-runtime", {
      helpers: true,
      regenerator: true,
    }],
  ];

  return {
    presets,
    plugins,
  };
}