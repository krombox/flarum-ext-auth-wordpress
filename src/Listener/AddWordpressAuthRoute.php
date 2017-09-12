<?php

namespace Krombox\Auth\Wordpress\Listener;

use Flarum\Event\ConfigureForumRoutes;
use Illuminate\Contracts\Events\Dispatcher;

class AddWordpressAuthRoute
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureForumRoutes::class, [$this, 'configureForumRoutes']);
    }

    /**
     * @param ConfigureForumRoutes $event
     */
    public function configureForumRoutes(ConfigureForumRoutes $event)
    {        
        $event->get('/auth/wordpress', 'auth.wordpress', 'Krombox\Auth\Wordpress\Controller\WordpressAuthController');
    }
}