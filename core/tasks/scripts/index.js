// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

export const scripts = () => {
  return (
    pl.gulp
      .src(`${path.scripts.src}/main.js`, { sourcemaps: pl.isDev }) // source directory
      .pipe(pl.webpackStream(config.webPack)) // webpack settings
      .pipe(pl.babel(config.babel)) // Use next generation js with babel
      .pipe(pl.iif(pl.isBuild, pl.uglify())) // Minify srcipts

      // output directory
      .pipe(
        pl.iif(
          pl.isDev, // is dev?
          pl.gulp.dest(path.scripts.output), // dev output
          pl.gulp.dest(path.scripts.build), // build output
        ),
      )

      // browser reload
      .pipe(pl.iif(pl.isDev, pl.browserSync.stream()))
  );
};
