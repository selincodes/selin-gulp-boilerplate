// Import plugins
import pl from '../../config/plugins.js';

// Import task config
import config from './config.js';

export const server = (done) => {
  pl.browserSync.init(config.browser);
};
