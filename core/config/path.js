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
    srcNoSvg: `${src}/assets/img/**/*.{jpg,jpeg,png,gif}`,
    output: `${output}/img`,
    modules: `${src}/modules/**/img/*.{jpg,jpeg,png,webp,svg}`,
    modulesNoSvg: `${src}/modules/**/img/*.{jpg,jpeg,png,gif}`,
    sprite: `${src}/assets/sprite/*.svg`,
  },
};
