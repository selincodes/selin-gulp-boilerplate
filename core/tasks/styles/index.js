// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

const sass = pl.gsass(pl.sass);

export const styles = () => {
  return (
    pl.gulp
      .src(path.styles.src) // source directory
      .pipe(sass(config.sassConfig)) // compiling scss
      .pipe(pl.gcmq()) // grouping media queries
      .pipe(pl.rename(config.rename)) // added suffix min to main.css
      .pipe(pl.autoPrefixer()) // added auto prefixer
      .pipe(pl.cleanCSS(config.cleanCSS)) // clean and minify css
      .pipe(pl.gulp.dest(path.styles.output)) // output directory
      // browser reload
      .pipe(pl.browserSync.stream())
  );
};
