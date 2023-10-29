// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Font conversion task
export const fonts = () => {
  return (
    pl.gulp
      .src(path.fonts.src) // source directory
      .pipe(pl.ttf2woff()) // conversion ttf to woff2

      // output directory
      .pipe(
        pl.iif(
          pl.isDev, // is dev?
          pl.gulp.dest(path.fonts.output), // dev output
          pl.gulp.dest(path.fonts.build), // build output
        ),
      )

      // browser reload
      .pipe(pl.iif(pl.isDev, pl.browserSync.stream()))
  );
};
