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
      .pipe(pl.iif(pl.isDev, pl.sourceMaps.init())) // init source maps
      .pipe(sass(config.sassConfig)) // compiling scss
      .pipe(pl.gcmq()) // grouping media queries
      .pipe(pl.rename(config.rename)) // added suffix min to main.css
      .pipe(pl.autoPrefixer()) // added auto prefixer
      .pipe(pl.iif(pl.isBuild, pl.cleanCSS(config.cleanCSS))) // clean and minify css
      .pipe(pl.iif(pl.isDev, pl.sourceMaps.write('../maps'))) // write source maps

      // output directory
      .pipe(
        pl.iif(
          pl.isDev, // is dev?
          pl.gulp.dest(path.styles.output), // dev output
          pl.gulp.dest(path.styles.build), // build output
        ),
      )

      // browser reload
      .pipe(pl.iif(pl.isDev, pl.browserSync.stream()))
  );
};
