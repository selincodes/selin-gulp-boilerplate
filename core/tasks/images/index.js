// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

// The task of moving svg images
export const copySVG = () => {
  return (
    pl.gulp
      // svg
      .src([path.images.svg, path.images.modulesSvg]) // source directory
      .pipe(pl.flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(pl.newer(path.images.output)) // check if the files have changed
      .pipe(pl.gulp.dest(path.images.output)) // output directory
      // browser reload
      .pipe(pl.browserSync.stream())
  );
};

// The task of moving images
export const images = () => {
  const sizes = [400, 450, 800, 1000, 1300, 1650];
  const sharpOptions = {
    limitInputPixels: true,
  };
  return (
    pl.gulp
      // resize images
      .src([path.images.src, path.images.modules]) // source directory
      .pipe(pl.flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(pl.newer(path.images.output)) // check if the files have changed
      .pipe(
        pl.responsive({
          sharpOptions,
          sizes,
        }),
      )
      .pipe(pl.gulp.dest(path.images.output)) // output directory

      // webp
      .pipe(pl.flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(pl.newer(path.images.output)) // check if the files have changed
      .pipe(pl.webp(config.webp)) // convert to webp
      .pipe(pl.gulp.dest(path.images.output)) // output directory

      // all images
      .pipe(pl.flatten({ includeParents: -1, subPath: 1 })) // delete folder structure
      .pipe(pl.newer(path.images.output))
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
