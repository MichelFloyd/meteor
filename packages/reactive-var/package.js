Package.describe({
  summary: "Reactive variable",
  version: '1.0.7'
});

Package.onUse(function (api) {
  api.export('ReactiveVar');

  api.use('tracker');

  api.addFiles('reactive-var.js');
});
