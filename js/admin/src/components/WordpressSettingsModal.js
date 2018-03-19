import SettingsModal from 'flarum/components/SettingsModal';

export default class WordPressSettingsModal extends SettingsModal {
  className() {
    return 'WordPressSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.client-id')}</label>
        <input className="FormControl" bidi={this.setting('krombox-auth-wordpress.client_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.client-secret')}</label>
        <input className="FormControl" bidi={this.setting('krombox-auth-wordpress.client_secret')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.domain')}</label>
        <input className="FormControl" bidi={this.setting('krombox-auth-wordpress.domain')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.login-button-title')}</label>
        <input className="FormControl" bidi={this.setting('krombox-auth-wordpress.login_button_title')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.login-button-color')}</label>
        <input className="FormControl" bidi={this.setting('krombox-auth-wordpress.login_button_color')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('krombox-auth-wordpress.admin.wordpress_settings.field.login-button-bg-color')}</label>
        <input className="FormControl" bidi={this.setting('krombox-auth-wordpress.login_button_bg_color')}/>
      </div>
    ];
  }
}
