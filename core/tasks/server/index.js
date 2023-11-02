// Import plugins
import plugins from '../../config/plugins.js';

// Import task config
import config from './config.js';

export const server = () => {
  const { browserSync } = plugins;
  const { browser: browserConfig } = config;

  browserSync.init(browserConfig);
};
