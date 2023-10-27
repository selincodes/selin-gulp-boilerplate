const src = './src';
const output = './app';
const build = './build';

export default {
  src,
  output,
  build,
  styles: {
    src: `${src}/assets/scss/**/*.scss`,
    output: `${output}/css`,
  },
  images: {
    src: `${src}/assets/img/**/*.{jpg,jpeg,png,webp,svg}`,
    output: `${output}/img`,
    modules: `${src}/modules/**/img/*.{jpg,jpeg,png,webp,svg}`,
    sprite: `${src}/assets/sprite/*.svg`,
  },
};
