import gulp from "gulp";

// HTML/Pug
import gulpPug from 'gulp-pug';

// Styles
import gsass from 'gulp-sass';
import * as sass from 'sass';
import rename from 'gulp-rename';
import autoPrefixer from 'gulp-autoprefixer'

export default {
  gulp,
  // HTML/Pug
  gulpPug,

  // Styles
  gsass,
  sass,
  rename,
  autoPrefixer
};
