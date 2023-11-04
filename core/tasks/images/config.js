import pl from '../../config/plugins.js';

export default {
  webpConfig: {
    quality: 80,
  },
  imageMinConfig: {
    progressive: true,
    svgoPlugin: [{ removeViewBox: false }],
    interlanced: true,
    optimizationLevel: 3,
    use: [pl.pngQuant()],
  },
  svgminConfig: {
    js2svg: {
      pretty: true,
    },
  },
  cheerioConfig: {
    run: ($) => {
      $('[fill]').removeAttr('fill');
      $('[stroke]').removeAttr('strole');
      $('[style]').removeAttr('style');
    },
    parserOptions: {
      xmlMode: true,
    },
  },
  spriteConfig: {
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
