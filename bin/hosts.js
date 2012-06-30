#!/usr/bin/env node
var propagit = require('propagit');
var argv = require('../lib/argv');
if (!argv.hub) return console.error('Specify a --hub or set a remote.');

var p = propagit(argv);
p.on('error', function (err) {
    console.dir(err);
});
var s = p.ps();

var addrs = {};
s.on('addr', function (name, addr) {
    addrs[addr] || (addrs[addr] = []);
    addrs[addr].push(name);
});

s.on('end', function () {
    if (argv.json) {
        console.log(JSON.stringify(addrs));
    }
    else {
        Object.keys(addrs).forEach(function(addr) {
            console.log(addr + "\t" + addrs[addr].join(' '));
        });
    }
    p.hub.close();
});