// Basic
import gulp from 'gulp';
import { deleteAsync } from 'del';

// HTML/Pug
import gulpPug from 'gulp-pug';

// Styles
import gsass from 'gulp-sass';
import * as sass from 'sass';
import rename from 'gulp-rename';
import autoPrefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';

export default {
  // Basic
  gulp,
  deleteAsync,
  // HTML/Pug
  gulpPug,

  // Styles
  gsass,
  sass,
  rename,
  autoPrefixer,
  gcmq,
};
