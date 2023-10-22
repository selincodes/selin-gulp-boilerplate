import path from './core/config/path.js';
import pl from './core/config/plugins.js';

// Import tasks
import { html } from './core/tasks/html/index.js';

const mainTasks = pl.gulp.parallel(
  html
)

const banner = async () => {
  console.log('========================');
  console.log(' Selin Gulp Boilerplate ');
  console.log('  https://selin.codes  ');
  console.log('========================');
};

const dev = pl.gulp.series(banner, mainTasks);

pl.gulp.task('default', dev);
