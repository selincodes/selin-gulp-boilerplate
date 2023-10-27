// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

export const scripts = () => {
  return (
    pl.gulp
      .src(`${path.scripts.src}/main.js`, { sourcemaps: true }) // source directory
      .pipe(pl.webpackStream(config.webPack)) // webpack settings
      .pipe(pl.babel(config.babel)) // Use next generation js with babel
      .pipe(pl.uglify()) // Minify srcipts
      .pipe(pl.gulp.dest(path.scripts.output)) // output directory
      // browser reload
      .pipe(pl.browserSync.stream())
  );
};
