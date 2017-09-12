'use strict';

System.register('krombox/auth/wordpress/components/WordpressSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, WordpressSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      WordpressSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(WordpressSettingsModal, _SettingsModal);

        function WordpressSettingsModal() {
          babelHelpers.classCallCheck(this, WordpressSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (WordpressSettingsModal.__proto__ || Object.getPrototypeOf(WordpressSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(WordpressSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'WordpressSettingsModal Modal--small';
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
        return WordpressSettingsModal;
      }(SettingsModal);

      _export('default', WordpressSettingsModal);
    }
  };
});;
'use strict';

System.register('krombox/auth/wordpress/main', ['flarum/app', 'krombox/auth/wordpress/components/WordpressSettingsModal'], function (_export, _context) {
  "use strict";

  var app, WordpressSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_kromboxAuthWordpressComponentsWordpressSettingsModal) {
      WordpressSettingsModal = _kromboxAuthWordpressComponentsWordpressSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('krombox-auth-wordpress', function () {
        app.extensionSettings['krombox-auth-wordpress'] = function () {
          return app.modal.show(new WordpressSettingsModal());
        };
      });
    }
  };
});