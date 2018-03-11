var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    'navigation_links': [
      { 'url': '#typography', 'text': 'Typography' },
      { 'url': '#grid', 'text': 'Grid' },
      { 'url': '#links', 'text': 'Links' },
      { 'url': '#cards', 'text': 'Cards' },
      { 'url': '#tabs', 'text': 'Tabs' }
    ],
    'card_example_links': [
      { 'url': '#', 'text': 'This is a link.' },
      { 'url': '#', 'text': 'This is also a link.' }
    ],
    'card_example_links_2': [
      { 'url': '#', 'text': 'This is a link.' },
      { 'url': '#', 'text': 'This is also a link.' },
      { 'url': 'https://www.google.com', 'text': 'This link opens in a new tab/window.', newTab: true }
    ]
  });
});

module.exports = router;