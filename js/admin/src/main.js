import app from 'flarum/app';

import WordPressSettingsModal from 'krombox/auth/wordpress/components/WordPressSettingsModal';

app.initializers.add('krombox-auth-wordpress', () => {
  app.extensionSettings['krombox-auth-wordpress'] = () => app.modal.show(new WordPressSettingsModal());
});
