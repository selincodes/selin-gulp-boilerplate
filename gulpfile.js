import path from './core/config/path.js';
import pl from './core/config/plugins.js';

// Import tasks
import { pug } from './core/tasks/pug/index.js';
import { styles } from './core/tasks/styles/index.js';
import { deleteFolder } from './core/tasks/delete/index.js';

const mainTasks = pl.gulp.parallel(pug, styles);

const banner = async () => {
  console.log('========================');
  console.log(' Selin Gulp Boilerplate ');
  console.log('  https://selin.codes  ');
  console.log('========================');
};

const dev = pl.gulp.series(banner, deleteFolder, mainTasks);

pl.gulp.task('default', dev);
