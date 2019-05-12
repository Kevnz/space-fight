const ghpages = require('gh-pages');

ghpages.publish('public', function(err) {
  console.info('published')
});