import path from 'path';
// import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';
import purl from "rollup-plugin-url"

export default {
  input: 'src/index.js',
  output: {
    file: path.resolve(__dirname, './lib', 'index.js'),
    format: 'cjs',
    name: 'output-js-name',
    exports: 'named' // this for { export xxx }
  },
  external: ['vue'],
  plugins: [
  	// terser()
    postcss({
      plugins: [
        autoprefixer({
          browsers: ['Android >= 4.0', 'iOS >= 7']
        }),
        pxtorem({
          rootValue: 37.5,
          propList: ['*']  
        }),
        // for image in css inline means to base64
        url({ 
          url: 'inline'
        })
      ]  
    }),
    purl({
      limit: 10 * 1024,
      include: [
        "**/*.svg",
        "**/*.png",
        "**/*.jpg",
        "**/*.gif",
      ], // defaults to .svg, .png, .jpg and .gif files
      emitFiles: true,
      fileName: "[dirname][hash][extname]",
      sourceDir: path.join(__dirname, "src")
    }),
    vue({
      css: false
    }),
    babel({
      runtimeHelpers: true,
      // sourceMap: false,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
    }),
    resolve(),
    commonjs() 
  ]
};