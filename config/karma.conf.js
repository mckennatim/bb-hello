module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js',
      'http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js',
      'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js',
      'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min.js',
      'http://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.7/backbone.localStorage-min.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [

    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-junit-reporter',
            'karma-script-launcher',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-jasmine',
            'karma-sinon',
            'karma-jquery'
            ],

    reporters: ['spec'],          

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
