// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

// The task of moving images from assets
export const images = () => {
  return (
    pl.gulp
      // avif
      .src(path.images.srcNoSvg) // source directory
      .pipe(pl.flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(
        pl.rename((imagePath) => {
          imagePath.dirname += `/${imagePath.basename}`;
        }),
      )
      .pipe(pl.newer(path.images.output)) // check if the files have changed
      .pipe(pl.avif()) // convert to avif
      .pipe(pl.gulp.dest(path.images.output)) // output directory

      // webp
      .pipe(pl.gulp.src(path.images.src)) // source directory
      .pipe(pl.flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(
        pl.rename((imagePath) => {
          imagePath.dirname += `/${imagePath.basename}`;
        }),
      )
      .pipe(pl.newer(path.images.output)) // check if the files have changed
      .pipe(pl.webp(config.webp)) // convert to webp
      .pipe(pl.gulp.dest(path.images.output)) // output directory
      // all images
      .pipe(pl.gulp.src(path.images.src))
      .pipe(pl.flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(
        pl.rename((imagePath) => {
          imagePath.dirname += `/${imagePath.basename}`;
        }),
      )
      .pipe(pl.newer(path.images.output))
      .pipe(pl.imageMin(config.imageMin))
      .pipe(pl.gulp.dest(path.images.output)) // output directory
      // browser reload
      .pipe(pl.browserSync.stream())
  );
};

// The task of moving images from modules
export const moduleImages = () => {
  return (
    pl.gulp
      // avif
      .src(path.images.modulesNoSvg) // source directory
      .pipe(pl.flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(
        pl.rename((imagePath) => {
          imagePath.dirname += `/${imagePath.basename}`;
        }),
      )
      .pipe(pl.newer(path.images.output)) // check if the files have changed
      .pipe(pl.avif()) // convert to avif
      .pipe(pl.gulp.dest(path.images.output)) // output directory

      // webp
      .pipe(pl.gulp.src(path.images.modules)) // source directory
      .pipe(pl.flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(
        pl.rename((imagePath) => {
          imagePath.dirname += `/${imagePath.basename}`;
        }),
      )
      .pipe(pl.newer(path.images.output)) // check if the files have changed
      .pipe(pl.webp(config.webp)) // convert to webp
      .pipe(pl.gulp.dest(path.images.output)) // output directory

      // all images
      .pipe(pl.gulp.src(path.images.modules))
      .pipe(pl.flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(
        pl.rename((imagePath) => {
          imagePath.dirname += `/${imagePath.basename}`;
        }),
      )
      .pipe(pl.newer(path.images.output))
      .pipe(pl.imageMin(config.imageMin))
      .pipe(pl.gulp.dest(path.images.output)) // output directory

      // browser reload
      .pipe(pl.browserSync.stream())
  );
};

// The task of automactic creation sprite
export const sprite = () => {
  return (
    pl.gulp
      .src(path.images.sprite) // source directory
      .pipe(pl.svgMin(config.svgmin)) // icon optimization
      .pipe(pl.cheerio(config.cheerio)) // removing attributes
      .pipe(pl.replace('>', '>'))
      .pipe(pl.svgSprite(config.sprite)) // removing attributes
      .pipe(pl.gulp.dest(path.images.output)) // output directory
      // browser reload
      .pipe(pl.browserSync.stream())
  );
};
