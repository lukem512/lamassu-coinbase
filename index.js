'use strict';

var _ = require('lodash');

_.merge(exports, require('./config'));


// Ticker merhods:
exports.ticker = require('./lib/ticker').ticker;


// Trader methods:
var trader = require('./lib/trader');
exports.purchase = trader.purchase;
exports.sell = trader.sell;

// no-op
exports.balance = function(cb) { cb(new Error('Not implemented')); };
