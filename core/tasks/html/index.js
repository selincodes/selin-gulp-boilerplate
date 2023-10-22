// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

// Create task
export const html = () => {
  return pl.gulp
    .src([`${path.src}/*.pug`])
    .pipe(pl.gulpPug(config.pug))
    .pipe(pl.gulp.dest(path.dist))
}
