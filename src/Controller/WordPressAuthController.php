<?php

namespace Krombox\Auth\WordPress\Controller;

use Flarum\Forum\AuthenticationResponseFactory;
use Flarum\Forum\Controller\AbstractOAuth2Controller;
use Flarum\Settings\SettingsRepositoryInterface;
use Krombox\OAuth2\Client\Provider\WordPress;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class WordPressAuthController extends AbstractOAuth2Controller
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param AuthenticationResponseFactory $authResponse
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(AuthenticationResponseFactory $authResponse, SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
        $this->authResponse = $authResponse;
    }

    /**
     * {@inheritdoc}
     */
    protected function getProvider($redirectUri)
    {        
        return  new WordPress([
            'clientId'     => $this->settings->get('krombox-auth-wordpress.client_id'),
            'clientSecret' => $this->settings->get('krombox-auth-wordpress.client_secret'),
            'domain' => $this->settings->get('krombox-auth-wordpress.domain'),
            'redirectUri'  => $redirectUri            
        ]);        
    }

    /**
     * {@inheritdoc}
     */
    protected function getAuthorizationUrlOptions()
    {
        return [];        
    }

    /**
     * {@inheritdoc}
     */
    protected function getIdentification(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'email' => $resourceOwner->getEmail()
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function getSuggestions(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'username' => $resourceOwner->getUsername(),
            'avatarUrl' => $resourceOwner->getAvatarUrl()
        ];
    }
}