const gulp = require('gulp')
  , sourcemaps = require('gulp-sourcemaps')
  , uglify = require('gulp-uglify')
  , jshint = require('gulp-jshint')
  , rename = require('gulp-rename')
  , clean = require('gulp-clean')
  , babel = require('gulp-babel')
  , size = require('gulp-size')
;

const path = {};
path.mainJs =
'dev/index.js';
path.js =
  [path.mainJs, 'dev/**/*.js'];


// Observa a mudança em qualquer arquivo listado abaixo e chama a respectiva task
gulp.task('watch', () => {
  gulp.watch(path.js, ['js']);
});

// Limpa a Pasta
gulp.task('clear', () => gulp.src('index.js', {read: false}).pipe( clean({force: true}) ) );

// Realiza Build de todas as tasks
gulp.task('build', ['js']);

// Task padrão, exibe uma lista de comandos disponíveis
gulp.task('default', () => {
  console.log('\nBem vindo ao Gulp :)\n\nA seguir, a lista de comandos configurados, volte sempre ;)');
  console.log('1 - gulp clear - Limpeza da pasta de build');
  console.log('2 - gulp build - Build único e completo do sistema');
  console.log('3 - gulp watch - Observa e realiza build a cada mudança');
  console.log('\nAconselhamos seguir a ordem listada acima. Vlw!');
});

// Imprimir os Erros na tela ao invés de Encerrar o Node
process.on('uncaughtException', e => {
  console.error(e.stack);
});


gulp.task('js', () => {
  gulp.src(path.js)
      .pipe( jshint() )
      .pipe( jshint.reporter('jshint-stylish') )
  ;
  gulp.src(path.mainJs)
      // .pipe( sourcemaps.init() )
      .pipe( babel({ presets: ['es2015'] }) )
      .pipe( uglify() )
      .pipe( rename('index.js') )
      // .pipe( sourcemaps.write('.') )
      .pipe( gulp.dest('./') )
      .pipe( size() )
  ;
});
