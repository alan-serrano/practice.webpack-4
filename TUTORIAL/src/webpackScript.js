import Heading from './components/heading/heading';
import WebpackImage from './components/webpack-image/webpack-image'
import React from 'react';
const heading = new Heading();
heading.render('Webpack');

const webpackImage = new WebpackImage();
webpackImage.render();

