// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

// The task of moving images from assets
export const images = () => {
  return (
    pl.gulp
      .src(path.images.src)
      // output all images
      .pipe(pl.gulp.dest(path.images.dist))
      // convert to webp
      .pipe(pl.webp(config.webp))
      // output webp to dist
      .pipe(pl.gulp.dest(path.images.dist))
  );
};

// The task of moving images from modules
export const moduleImages = () => {
  return (
    pl.gulp
      .src(path.images.modules)
      // delete folder structure
      .pipe(pl.rename({ dirname: '' }))
      // output images
      .pipe(pl.gulp.dest(path.images.dist))
      // convert to webp
      .pipe(pl.webp(config.webp))
      // output webp to dist
      .pipe(pl.gulp.dest(path.images.dist))
  );
};
