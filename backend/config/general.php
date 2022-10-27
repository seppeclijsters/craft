<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

return [
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 1,

        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,

        // The URI segment that tells Craft to load the control panel
        'cpTrigger' => App::env('CP_TRIGGER') ?: 'admin',

        // Keep users logged in as long as their browser is open
        'userSessionDuration' => 0,

        // Whether non-ASCII characters in auto-generated slugs should be converted to ASCII
        'limitAutoSlugsToAscii' => true,

        'aliases' => [
            '@defaultSiteUrl' => getenv('PRIMARY_SITE_URL'),
            '@assetsUrl' => getenv('PRIMARY_SITE_URL') . 'assets',
            '@assetsPath' => realpath(dirname(__DIR__) . '/web/assets'),
            '@web' => 'http://localhost:8888/'
        ],

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => App::env('SECURITY_KEY'),

        // Set the correct timezone
        'timezone' => 'Europe/Brussels',

        // Whether administrative changes should be allowed
        'allowAdminChanges' => false,

        'enableGraphqlCaching' => false,
    ],

    // Dev environment settings
    'dev' => [
        'devMode' => true,
        'enableTemplateCaching' => false,
        /*'testToEmailAddress' => 'webmaster@the-craft.be',*/
        // Enable project config changes
        'allowAdminChanges' => true
    ],

    // Staging environment settings
    'staging' => [
        // Base site URL
        'devMode' => false
    ],

    // Production environment settings
    'production' => [],

];