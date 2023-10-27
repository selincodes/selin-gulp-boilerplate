// Basic
import gulp from 'gulp';
import { deleteAsync } from 'del';
import rename from 'gulp-rename';
import newer from 'gulp-newer';
import replace from 'gulp-replace';
import flatten from 'gulp-flatten';
import browserSync from 'browser-sync';

// HTML/Pug
import gulpPug from 'gulp-pug';

// Styles
import gsass from 'gulp-sass';
import * as sass from 'sass';
import autoPrefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';

// Images
import webp from 'gulp-webp';
import imageMin from 'gulp-imagemin';
import pngQuant from 'imagemin-pngquant';
import svgMin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import svgSprite from 'gulp-svg-sprite';
import avif from 'gulp-avif';

// Fonts
import ttf2woff from 'gulp-ttf2woff2';

export default {
  // Basic
  gulp,
  deleteAsync,
  rename,
  newer,
  replace,
  flatten,
  browserSync,

  // HTML/Pug
  gulpPug,

  // Styles
  gsass,
  sass,
  autoPrefixer,
  gcmq,
  cleanCSS,

  // Images
  webp,
  imageMin,
  pngQuant,
  svgMin,
  cheerio,
  svgSprite,
  avif,

  // Fonts
  ttf2woff,
};
