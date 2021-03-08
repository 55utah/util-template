import path from 'path'
import babel from 'rollup-plugin-babel';
import buble from 'rollup-plugin-buble'; 
import typescript from 'rollup-plugin-typescript2';
// import terser from 'rollup-plugin-terser';

const resolveFile = function(filePath) {
  return path.join(__dirname, '.', filePath)
}

const name = __dirname.split('/').pop()


module.exports = [
  {
    input: resolveFile('./src/index.ts'),
    output: [
      {
        file: resolveFile(`./dist/${name}.js`),
        format: 'umd',
        name,
      },
      {
        file: resolveFile(`./dist/${name}.es.js`),
        format: 'esm', // 设置esm才可以配合sideEffects: false支持tree-shaking
        name,
      }
    ],
    plugins: [
        typescript({
            tsconfigOverride: {
                    compilerOptions: {
                    module: 'es2015',
                },
            },
        }),
        buble(),
        babel({
            exclude: '**/node_modules/**',
            runtimeHelpers: true,
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            babelrc: false,
        }),
    ],
  },
]
