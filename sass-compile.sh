#!/bin/sh
yarn run node-sass --include-path ./sass sass/local.scss >public/css/local.css
yarn run node-sass --include-path ./sass sass/taxes-ds.scss >public/css/taxes-ds.css