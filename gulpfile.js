import path from './core/config/path.js';
import pl from './core/config/plugins.js';

// Import tasks
import { pug } from './core/tasks/pug/index.js';
import { styles } from './core/tasks/styles/index.js';
import { deleteFolder } from './core/tasks/delete/index.js';
import { images, sprite, copySVG } from './core/tasks/images/index.js';
import { server } from './core/tasks/server/index.js';
import { fonts } from './core/tasks/fonts/index.js';
import { scripts } from './core/tasks/scripts/index.js';

// Task watcher
const watcher = () => {
  pl.gulp.watch(`${path.src}/**/*.pug`, pug); // pug files

  // assets
  pl.gulp.watch(path.styles.src, styles); // styles from assets
  pl.gulp.watch(path.images.src, images); // images from assets
  pl.gulp.watch(path.images.svg, copySVG); // svg from assets
  pl.gulp.watch(path.images.sprite, sprite); // sprite
  pl.gulp.watch(path.fonts.src, fonts); // fonts
  pl.gulp.watch(`${path.scripts.src}/**/*.js`, scripts); // scripts from assets

  // modules
  pl.gulp.watch(`${path.src}/pug/modules/**/*.scss`, styles); // styles from modules
  pl.gulp.watch(path.images.modules, images); // images from modules
  pl.gulp.watch(path.images.modulesSvg, copySVG); // svg from modules
  pl.gulp.watch(`${path.src}/pug/modules/**/*.js`, scripts); // scripts from modules
};

const mainTasks = pl.gulp.parallel(pug, styles, images, copySVG, sprite, fonts, scripts);

const banner = async () => {
  console.log('========================');
  console.log(' Selin Gulp Boilerplate ');
  console.log('  https://selin.codes  ');
  console.log('========================');
};

const dev = pl.gulp.series(banner, deleteFolder, mainTasks, pl.gulp.parallel(watcher, server));

pl.gulp.task('default', dev);
