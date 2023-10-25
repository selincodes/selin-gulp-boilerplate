import path from './core/config/path.js';
import pl from './core/config/plugins.js';

// Import tasks
import { pug } from './core/tasks/pug/index.js';
import { styles } from './core/tasks/styles/index.js';
import { deleteFolder } from './core/tasks/delete/index.js';
import { images, moduleImages, sprite } from './core/tasks/images/index.js';
import { server } from './core/tasks/server/index.js';

// Task watcher
const watcher = () => {
  pl.gulp.watch(`${path.src}/**/*.pug`, pug);
  pl.gulp.watch(`${path.styles.src}`, styles);
  pl.gulp.watch(`${path.src}/modules/**/*.scss`, styles);
  pl.gulp.watch(`${path.images.src}`, images);
  pl.gulp.watch(`${path.images.modules}`, moduleImages);
  pl.gulp.watch(`${path.images.sprite}`, sprite);
};

const mainTasks = pl.gulp.parallel(pug, styles, images, moduleImages, sprite);

const banner = async () => {
  console.log('========================');
  console.log(' Selin Gulp Boilerplate ');
  console.log('  https://selin.codes  ');
  console.log('========================');
};

const dev = pl.gulp.series(banner, deleteFolder, mainTasks, pl.gulp.parallel(watcher, server));

pl.gulp.task('default', dev);
