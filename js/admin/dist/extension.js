'use strict';

System.register('krombox/auth/wordpress/components/WordPressSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, WordPressSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      WordPressSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(WordPressSettingsModal, _SettingsModal);

        function WordPressSettingsModal() {
          babelHelpers.classCallCheck(this, WordPressSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (WordPressSettingsModal.__proto__ || Object.getPrototypeOf(WordPressSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(WordPressSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'WordPressSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.client-id')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('krombox-auth-wordpress.client_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.client-secret')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('krombox-auth-wordpress.client_secret') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.domain')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('krombox-auth-wordpress.domain') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.login-button-title')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('krombox-auth-wordpress.login_button_title') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.login-button-color')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('krombox-auth-wordpress.login_button_color') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.login-button-bg-color')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('krombox-auth-wordpress.login_button_bg_color') })
            )];
          }
        }]);
        return WordPressSettingsModal;
      }(SettingsModal);

      _export('default', WordPressSettingsModal);
    }
  };
});;
'use strict';

System.register('krombox/auth/wordpress/main', ['flarum/app', 'krombox/auth/wordpress/components/WordPressSettingsModal'], function (_export, _context) {
  "use strict";

  var app, WordPressSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_kromboxAuthWordPressComponentsWordPressSettingsModal) {
      WordPressSettingsModal = _kromboxAuthWordPressComponentsWordPressSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('krombox-auth-wordpress', function () {
        app.extensionSettings['krombox-auth-wordpress'] = function () {
          return app.modal.show(new WordPressSettingsModal());
        };
      });
    }
  };
});