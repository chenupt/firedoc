/* global process */
/**
 * Copyright (c) 2011, Yahoo! Inc. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/yui/yuidoc/blob/master/LICENSE
 */
YUI.add('project', function (Y) {

  Y.Project = {
    mix: function (json, options) {
      if (json.project) {
        options = Y.merge(options, json.project);
      }

      if (options.title && !options.name) {
        options.name = options.title;
      }

      return options;
    },
    init: function (options) {
      var project = {};
      if (options.configfile) {
        project = Y.Files.getJSON(options.configfile);
      } else {
        Y.log('Scanning for yuidoc.json file.', 'info', 'yuidoc');
        project = Y.getProjectData();
        if (!project) {
          project = {};
        }
      }

      if (project.options && Object.keys(project.options).length) {
        options = Y.merge(project.options, options);
        delete project.options;
        options.project = project;
      }

      if (options.version && options.project) {
        options.project.version = options.version;
        delete options.version;
      }

      if (!options.outdir) {
        options.outdir = './out';
      }

      options.paths = Y.validatePaths(options.paths, options.ignorePaths);

      if (!options.paths.length) {
        Y.log('Paths argument was empty', 'warn', 'yuidoc');
        Y.showHelp();
        process.exit(1);
      }

      if (typeof options.tabtospace === 'number') {
        /*jshint onevar:false */
        options.tabspace = '';
        for (var s = 0; s < options.tabtospace; s++) {
          options.tabspace += ' ';
        }
      }
  	 
      return options;
    }
  };

});
