var perfUtil = require('angular2/e2e_test/perf_util');

describe('ng1.x compiler benchmark', function () {

  var URL = 'benchmarks_external/src/compiler/compiler_benchmark.html';

  afterEach(perfUtil.verifyNoBrowserErrors);

  it('should log withBinding stats', function() {
    perfUtil.runClickBenchmark({
      url: URL,
      buttons: ['#compileWithBindings'],
      id: 'ng1.compile.withBindings',
      params: [{
        name: 'elements', value: 150, scale: 'linear'
      }]
    });
  });

  it('should log noBindings stats', function() {
    perfUtil.runClickBenchmark({
      url: URL,
      buttons: ['#compileNoBindings'],
      id: 'ng1.compile.noBindings',
      params: [{
        name: 'elements', value: 150, scale: 'linear'
      }]
    });
  });

});
