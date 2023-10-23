// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

const sass = pl.gsass(pl.sass);

export const styles = () => {
  return pl.gulp
    .src(path.styles.src)
    .pipe(sass(config.sassConfig))
    .pipe(pl.gulp.dest(path.styles.dist))

}
