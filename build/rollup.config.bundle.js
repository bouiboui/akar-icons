import babel from '@rollup/plugin-babel';
import path from 'path';
import copy from 'rollup-plugin-copy';

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

const babelOptions = {
  exclude: 'node_modules/**',
  babelHelpers: 'bundled',
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
  ],
};

const external = ['react', 'prop-types'];
const input = 'src/icons.js';

export default [{
  input,
  output: {
    dir: 'dist/esm',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  external,
  plugins: [
    copy({
      targets: [
        { src: resolveFile('src/icons.d.ts'), dest: resolveFile('dist/') }
      ]
    }),
    babel(babelOptions),
  ],
}, {
  input: 'src/icons.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named',
  },
  external,
  plugins: [
    babel(babelOptions),
  ],
}];
