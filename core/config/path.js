const src = './src';
const dist = './dist';
const build = './build';

export default {
  src,
  dist,
  build,
  styles: {
    src: `${src}/assets/scss/**/*.scss`,
    dist: `${dist}/css`,
  },
  images: {
    src: `${src}/assets/img/**/*.{jpg,jpeg,png,webp,svg}`,
    dist: `${dist}/img`,
    modules: `${src}/modules/**/img/*.{jpg,jpeg,png,webp,svg}`,
    sprite: `${src}/assets/sprite/*.svg`,
  },
};
