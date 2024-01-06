// Import path and plugins
import path from '../../config/path.js';
import plugins from '../../config/plugins.js';

// Font conversion task
export const fonts = () => {
  const { isDev, ttf2woff, gulp, browserSync, noop } = plugins;
  const { dest, src } = gulp;
  const { output, build, srcFonts, woffSrc } = path.fonts;

  return (
    gulp
      .src(woffSrc) // source directory

      // output directory
      .pipe(isDev ? dest(output) : dest(build)) // Output directory

      .pipe(src(srcFonts))

      .pipe(ttf2woff()) // conversion ttf to woff2

      // output directory
      .pipe(isDev ? dest(output) : dest(build)) // Output directory

      // browser reload
      .pipe(isDev ? browserSync.stream() : noop())
  );
};
