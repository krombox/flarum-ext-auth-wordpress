import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('krombox-auth-wordpress', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('wordpress',
      <LogInButton
        className="Button LogInButton--wordpress"
        icon="wordpress"
        path="/auth/wordpress">        
        {app.forum.attribute('krombox.auth-wordpress.loginButtonTitle')}        
      </LogInButton>
    );
  });
});
