// Basic
import gulp from 'gulp';
import { deleteAsync } from 'del';
import rename from 'gulp-rename';
import newer from 'gulp-newer';
import replace from 'gulp-replace';
import flatten from 'gulp-flatten';
import browserSync from 'browser-sync';
import sourceMaps from 'gulp-sourcemaps';
import iif from 'gulp-if';

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
import responsive from 'gulp-optimize-images';

// Fonts
import ttf2woff from 'gulp-ttf2woff2';

// Scripts
import babel from 'gulp-babel';
import webpackStream from 'webpack-stream';
import terserPlugin from 'terser-webpack-plugin';
import uglify from 'gulp-uglify';

export default {
  // Basic
  gulp,
  deleteAsync,
  rename,
  newer,
  replace,
  flatten,
  browserSync,
  sourceMaps,
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  iif,

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
  responsive,

  // Fonts
  ttf2woff,

  // Scripts
  babel,
  webpackStream,
  terserPlugin,
  uglify,
};
