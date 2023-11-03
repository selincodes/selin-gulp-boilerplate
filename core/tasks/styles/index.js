// Import path and plugins
import path from '../../config/path.js';
import plugins from '../../config/plugins.js';

// Import task config
import config from './config.js';

// const sass = pl.gsass(pl.sass);

export const styles = () => {
  const {
    isDev,
    gulp,
    browserSync,
    autoPrefixer,
    cleanCSS,
    rename,
    gcmq,
    sourceMaps,
    noop,
    gsass,
    sass,
  } = plugins;
  const sassCompile = gsass(sass);
  const { dest } = gulp;
  const { sassConfig, renameConfig, cleanConfig } = config;
  const { output, build, src } = path.styles;

  return (
    gulp
      .src(src) // source directory
      .pipe(isDev ? sourceMaps.init() : noop()) // Init source maps
      .pipe(sassCompile(sassConfig)) // compiling scss
      .pipe(gcmq()) // grouping media queries
      .pipe(rename(renameConfig)) // added suffix min to main.css
      .pipe(autoPrefixer()) // added auto prefixer
      .pipe(isDev ? noop() : cleanCSS(cleanConfig)) // clean and minify css
      .pipe(isDev ? sourceMaps.write('../maps') : noop()) // write source maps
      .pipe(isDev ? dest(output) : dest(build)) // Output directory

      // Browser reload
      .pipe(isDev ? browserSync.stream() : noop())
  );
};
