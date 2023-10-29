// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

// Create task
export const pug = () => {
  return (
    pl.gulp
      .src([`${path.src}/index.pug`]) // source directory
      .pipe(pl.gulpPug(config.pug)) // compiling pug

      // output directory
      .pipe(
        pl.iif(
          pl.isDev, // is dev?
          pl.gulp.dest(path.output), // dev output
          pl.gulp.dest(path.build), // build output
        ),
      )

      // browser reload
      .pipe(pl.iif(pl.isDev, pl.browserSync.stream()))
  );
};
