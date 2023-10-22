import path from './core/config/path.js';
import pl from './core/config/plugins.js';

const banner = async () => {
	console.log('========================');
	console.log(' Selin Gulp Boilerplate ');
	console.log('  https://selin.codes  ');
	console.log('========================');
}

const dev = pl.gulp.series(banner);

pl.gulp.task('default', dev);
