import app from 'flarum/app';

import WordpressSettingsModal from 'krombox/auth/wordpress/components/WordpressSettingsModal';

app.initializers.add('krombox-auth-wordpress', () => {
  app.extensionSettings['krombox-auth-wordpress'] = () => app.modal.show(new WordpressSettingsModal());
});
