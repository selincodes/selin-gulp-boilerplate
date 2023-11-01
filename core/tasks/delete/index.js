// Import path and plugins
import path from '../../config/path.js';
import plugins from '../../config/plugins.js';

export const deleteFolder = () => {
  const { isDev, deleteAsync } = plugins;
  const { output, build } = path;

  return deleteAsync(isDev ? output : build); // Delete output folder
};
