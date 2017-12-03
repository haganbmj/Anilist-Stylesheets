# Anilist-Stylesheets

[![Greenkeeper badge](https://badges.greenkeeper.io/haganbmj/Anilist-Stylesheets.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/haganbmj/Anilist-Stylesheets.svg?branch=master)](https://travis-ci.org/haganbmj/Anilist-Stylesheets)

Stylesheets for use with [anilist.co](http://anilist.co).

Feel free to use whatever you'd like in your own stylesheets. Built files can be found [on the gh-pages branch](https://github.com/haganbmj/Anilist-Stylesheets/tree/gh-pages).

This project makes use of [Sass](http://sass-lang.com/), for more information visit their website.

## Compiling
```sh
npm install
npm run build
```

All final `*.css` files will be build in the `css` directory. These are also automatically deployed to the `gh-pages` branch.

## Hot Reloading
```sh
npm install
npm start
```

Will start up a development server on port 8080 that will serve built css files and update them as necessary.

Paired with the Greasemonkey script [`js/anilist-inject.user.js`](js/anilist-inject.user.js) you can inject and update your list style live on Anilist.co without reloading the page. There's like a better way to do this involving a proxy server and injecting the script, but I wasn't having luck getting that to work. The userscript will detect if the development server is loaded, strip any existing user styles, then listen for changes and immediately update.

The greasemonkey script is hardcoded at the moment to only inject whatever you have in [`src/index.scss`](src.index.scss), so just update the `@import` as necessary to swap between stylesheets.

I'll reapproach that idea at some point if editing stylesheets is still something people even want to do on anilist.

## Development
If you would like to fork this and enable travis linting/builds on your repository, add `GH_TOKEN` as an environment variable in your travis configuration. You can generate a new Github token **[here](https://github.com/settings/tokens/new)**.

## Miscellaneous
[🔹 Say hi to me on anilist! 🔹](https://anilist.co/user/haganbmj)
