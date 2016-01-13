Package.describe({
  name: 'retani:jquery-autosize',
  summary: 'Automatically adjust textarea height based on user input.',
  version: '1.18.0',
  git: "https://github.com/retani/jquery-autosize.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('jquery', 'client');
  api.add_files(['lib/jquery.autosize.js'], 'client');
  
});
