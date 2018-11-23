# node-vue-starter-pack
         
Very simple boilerplate to start developing node + vue applications.

Usage:

```
git clone git@bitbucket.org:kticka/node-vue-starter-pack.git someapp
cd someapp
npm install (don't forget use --no-bin-links if you are working with virtual machine on windows host)
gulp
open browser
http://localhost:3001 (change localhost to your dev machine ip address or host)
```

It includes:

```$xslt
express - serving static/dynamic content
ejs - template engine 
vue - reactive javascript framework 
vuex - state management for vue
axios - http client for xhr requests

webpack - compile javascript
browsersync - auto-reloading browser when something changes
nodemon - restarting http server when something changes
```

Most of build config lays in config.js including webpack, browsersync and http server settings.


