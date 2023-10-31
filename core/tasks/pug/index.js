// Import path and plugins
import path from '../../config/path.js';
import plugins from '../../config/plugins.js';

// Import task config
import config from './config.js';

// Create task
export const pug = () => {
  const { isDev, gulpPug, gulp, browserSync, noop } = plugins;
  const { dest } = gulp;
  const { pug: pugConfig } = config;
  const { output, build, src } = path;

  return (
    gulp
      .src([`${src}/index.pug`]) // Source directory
      .pipe(gulpPug(pugConfig)) // Compile Pug
      .pipe(isDev ? dest(output) : dest(build)) // Output directory

      // Browser reload
      .pipe(isDev ? browserSync.stream() : noop())
  );
};
