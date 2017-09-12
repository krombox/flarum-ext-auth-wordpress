'use strict';

System.register('krombox/auth/wordpress/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('krombox-auth-wordpress', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('wordpress', m(
            LogInButton,
            {
              className: 'Button LogInButton--wordpress',
              icon: 'wordpress',
              path: '/auth/wordpress' },
            app.forum.attribute('krombox.auth-wordpress.loginButtonTitle')
          ));
        });
      });
    }
  };
});