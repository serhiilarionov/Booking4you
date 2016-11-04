/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'scripts', // 'dist',
    '@angular': 'node_modules/@angular',
    'ng2-translate': 'node_modules/ng2-translate/bundles',
    'rxjs': 'node_modules/rxjs',
    'angular2-google-maps': 'node_modules/angular2-google-maps',
    'info-box': 'vendor/v3-utility-library/infobox',
    'rich-marker': 'vendor/v3-utility-library/richmarker',
    'moment': 'node_modules/moment',
    'bootstrap-datetimepicker': 'vendor/eonasdan-bootstrap-datetimepicker/build/js/',
    'socket.io-client': '/node_modules/socket.io-client/'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-google-maps/core':  { main: 'index.js',  defaultExtension: 'js' },
    'info-box':                   { main: 'src/infobox.js',  defaultExtension: 'js' },
    'rich-marker':                { main: 'src/richmarker-compiled.js', defaultExtension: 'js' },
    'ng2-translate':              { defaultExtension: 'js' },
    'moment':                     { format: 'global', main: 'moment.js', defaultExtension: 'js' },
    'bootstrap-datetimepicker':   { format: 'global', main: 'bootstrap-datetimepicker.min', defaultExtension: 'js'},
    'socket.io-client':           { main: 'socket.io.js', defaultExtension: 'js'}
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
