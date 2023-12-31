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
    build: `${build}/css`,
  },
  images: {
    src: `${src}/assets/img/**/*.{jpg,jpeg,png,git}`,
    srcSvg: `${src}/assets/img/**/*.svg`,
    output: `${output}/img`,
    modulesSrc: `${src}/pug/modules/**/img/*.{jpg,jpeg,png,gif}`,
    modulesSvg: `${src}/pug/modules/**/img/*.svg`,
    spriteSrc: `${src}/assets/sprite/*.svg`,
    build: `${build}/img`,
  },
  fonts: {
    srcFonts: `${src}/assets/fonts/**/*.ttf`,
    woffSrc: `${src}/assets/fonts/**/*.woff2`,
    output: `${output}/fonts`,
    build: `${build}/fonts`,
  },
  scripts: {
    src: `${src}/assets/js`,
    output: `${output}/js`,
    build: `${build}/js`,
  },
};
