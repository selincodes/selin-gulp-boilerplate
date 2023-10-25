// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

// Create task
export const pug = () => {
  return (
    pl.gulp
      .src([`${path.src}/*.pug`]) // source directory
      .pipe(pl.gulpPug(config.pug)) //compiling pug
      .pipe(pl.gulp.dest(path.dist)) // output directory
      // browser reload
      .pipe(pl.browserSync.stream())
  );
};
