// Import path and plugins
import path from '../../config/path.js';
import plugins from '../../config/plugins.js';

// Import task config
import config from './config.js';

const {
  isDev,
  gulp,
  browserSync,
  noop,
  flatten,
  newer,
  svgMin,
  cheerio,
  replace,
  svgSprite,
  webp,
  imageMin,
} = plugins;
const { output, build, src, modulesSrc, srcSvg, modulesSvg, spriteSrc } = path.images;
const { dest } = gulp;
const { svgminConfig, cheerioConfig, spriteConfig, webpConfig, imageMinConfig } = config;

// The task of moving svg images
export const copySVG = () => {
  return (
    gulp
      .src([srcSvg, modulesSvg]) // source directory
      .pipe(flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(isDev ? newer(output) : noop()) // check if the file have changed
      .pipe(isDev ? dest(output) : dest(build)) // output directory

      // browser reload
      .pipe(isDev ? browserSync.stream() : noop())
  );
};

// The task of moving images
export const images = () => {
  return (
    gulp
      .src([src, modulesSrc])
      .pipe(flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(webp(webpConfig))
      .pipe(gulp.src([src, modulesSrc]))
      .pipe(flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(isDev ? newer(output) : noop()) // check if the file have changed
      .pipe(isDev ? noop() : imageMin(imageMinConfig))
      .pipe(isDev ? dest(output) : dest(build)) // output directory

      // browser reload
      .pipe(isDev ? browserSync.stream() : noop())
  );
};

// The task of automactic creation sprite
export const sprite = () => {
  return (
    gulp
      .src(spriteSrc) // source directory
      .pipe(svgMin(svgminConfig)) // icon optimization
      .pipe(cheerio(cheerioConfig)) // removing attributes
      .pipe(replace('>', '>'))
      .pipe(svgSprite(spriteConfig)) // create sprite
      .pipe(isDev ? dest(output) : dest(build)) // output directory

      // browser reload
      .pipe(isDev ? browserSync.stream() : noop())
  );
};
