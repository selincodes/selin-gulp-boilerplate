// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

// Font conversion task
export const fonts = () => {
  return (
    pl.gulp
      .src(path.fonts.src) // source directory
      .pipe(pl.ttf2woff()) // conversion ttf to woff2
      .pipe(pl.gulp.dest(path.fonts.output)) // output directory
      // browser reload
      .pipe(pl.browserSync.stream())
  );
};
