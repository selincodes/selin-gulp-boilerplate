import pl from '../../config/plugins.js';
export default {
  webp: {
    quality: 80,
  },
  imageMin: {
    progressive: true,
    svgoPlugin: [{ removeViewBox: false }],
    interlanced: true,
    optimizationLevel: 3,
    use: [pl.pngQuant()],
  },
  svgmin: {
    js2svg: {
      pretty: true,
    },
  },
  cheerio: {
    run: function ($) {
      $('[fill]').removeAttr('fill');
      $('[stroke]').removeAttr('strole');
      $('[style]').removeAttr('style');
    },
    parserOptions: {
      xmlMode: true,
    },
  },
  sprite: {
    mode: {
      symbol: {
        sprite: '../sprite.svg',
        render: {
          scss: {
            dest: '../../../src/assets/scss/sprite/_sprite.scss',
            template: './src/assets/scss/sprite/_sprite_template.scss',
          },
        },
        example: true,
      },
    },
  },
};
