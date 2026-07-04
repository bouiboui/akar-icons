import babel from '@rollup/plugin-babel';
import path from 'path';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';

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
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
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
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel(babelOptions),
  ],
}];
