<?php

namespace Krombox\Auth\WordPress\Listener;

use DirectoryIterator;
use Flarum\Event\ConfigureWebApp;
use Flarum\Event\ConfigureLocales;
use Flarum\Event\PrepareApiAttributes;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class AddClientAssets
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureWebApp::class, [$this, 'addAssets']);
        $events->listen(ConfigureLocales::class, [$this, 'addLocales']);
        $events->listen(PrepareApiAttributes::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * @param ConfigureClientView $event
     */
    public function addAssets(ConfigureWebApp $event)
    {
        $css = $event->view->getCss();
        $localeCss = $event->view->getLocaleCss();

        $lessVariables = function () {
            $less = '';

            foreach ($this->getLessVariables() as $name => $value) {
                $less .= "@$name: $value;";
            }            
            return $less;
        };             
            $css->addString($lessVariables);   
            $localeCss->addString($lessVariables);
        
        if ($event->isForum()) {
            $event->addAssets([
                __DIR__.'/../../js/forum/dist/extension.js',                
                __DIR__.'/../../less/forum/extension.less'
            ]);            
            $event->addBootstrapper('krombox/auth/wordpress/main');
        }

        if ($event->isAdmin()) {
            $event->addAssets([
                __DIR__.'/../../js/admin/dist/extension.js'                
            ]);
            $event->addBootstrapper('krombox/auth/wordpress/main');
        }
    }

    /**     
     * @param ConfigureLocales $event
     */
    public function addLocales(ConfigureLocales $event)
    {        
        foreach (new DirectoryIterator(__DIR__ . '/../../locale') as $file) {
            if ($file->isFile() && in_array($file->getExtension(), ['yml', 'yaml'])) {
                $event->locales->addTranslations($file->getBasename('.' . $file->getExtension()), $file->getPathname());
            }
        }
    }

    /**
     * @param PrepareApiAttributes $event
     */
    public function prepareApiAttributes(PrepareApiAttributes $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['krombox.auth-wordpress.loginButtonTitle'] = $this->settings->get('krombox-auth-wordpress.login_button_title');
        }
    }

    /**
     * Get the values of any LESS variables to compile into the CSS, based on
     * the forum's configuration.
     *
     * @return array
     */
    private function getLessVariables()
    {
        return [
            'config-login-button-wordpress-color' => $this->settings->get('krombox-auth-wordpress.login_button_color') ?: $this->settings->get('theme_secondary_color'),
            'config-login-button-wordpress-bg-color' => $this->settings->get('krombox-auth-wordpress.login_button_bg_color') ?: $this->settings->get('theme_primary_color')
        ];
    }
}