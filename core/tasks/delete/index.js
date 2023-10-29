// Import path and plugins
import path from '../../config/path.js';
import pl from '../../config/plugins.js';

export const deleteFolder = () => {
  return pl.deleteAsync(pl.iif(pl.isDev, path.output, path.build)); // Delete output folder
};
