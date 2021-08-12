<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'herbare468');

/** MySQL database username */
define('DB_USER', 'herbare468');

/** MySQL database password */
define('DB_PASSWORD', 'QY4E5gNkq5tZ');

/** MySQL hostname */
define('DB_HOST', 'herbare468.mysql.db:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jgmXg3o3EZjb2ietyYXEcKeypoX5N7uWI/feLNe06JvrCIsO57GLCbi5szi2');
define('SECURE_AUTH_KEY',  '/q6tWhVyz1zhLWLz0qoqDYmUo+ANEoFsHykO+coSrTN3/OMacpxiqqmKP2h7');
define('LOGGED_IN_KEY',    '290dbdt6gc4svzC25KdV8xq0hQ3uZ2aOS3uownF9WnlAFeqRrguwMVk1zSex');
define('NONCE_KEY',        'DzqIDHo9dMs4Cax+Sl6MMEcsw4OTP2QatY/edli2qALeoT5y8484W4NdPyAe');
define('AUTH_SALT',        '2f245/r7MoySt9UyYkU2GkfqGhuGVGulDl/iCFZHlH4PR8o0gu4UJxu7plCU');
define('SECURE_AUTH_SALT', 'LRS3zcQ96v/tJp+6wu47zhp4BTn4Yu5PvPzrf4qJ8JrBxfm3hvUyOuQcv6sh');
define('LOGGED_IN_SALT',   'fCtReGawWXXMwe66ONdiJ+6pJE9A+ZIZIjKXRA0yjqna6ys/2tclkymTPwbc');
define('NONCE_SALT',       '6tJR1W+f234zjoVosJBWOXs/UYs6kR487zpZp+NnpWC60jxjAcnPt+/bOjQw');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'mod982_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/* Fixes "Add media button not working", see http://www.carnfieldwebdesign.co.uk/blog/wordpress-fix-add-media-button-not-working/ */
define('CONCATENATE_SCRIPTS', false );

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
