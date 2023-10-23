// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

const sass = pl.gsass(pl.sass);

export const styles = () => {
  return pl.gulp
    .src(path.styles.src)
    // compile scss
    .pipe(sass(config.sassConfig))
    // added suffix min to main.css
    .pipe(pl.rename(config.rename))
    //added auto prefixer
    .pipe(pl.autoPrefixer())
    // output main.min.css
    .pipe(pl.gulp.dest(path.styles.dist))
}
