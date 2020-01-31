import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'index.ts',
  output: {
    dir: '.',
    format: 'amd',
    name: 'fisk-engine',
    globals: {
      howler: 'howler'
    }
  },
  external: ['howler'],
  plugins: [
    typescript({
      lib: ["es5", "es6", "dom"], 
      target: "es6"
    })
  ]
};