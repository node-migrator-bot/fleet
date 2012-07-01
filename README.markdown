s8fleet
=======

A tweaked version of @substack's [fleet](https://github.com/substack/fleet)
module for Node.js.

install
=======

With [npm](http://npmjs.org) do:

```
npm install -g s8fleet
```

usage
=====

See [fleet](https://github.com/substack/fleet)

additions
=========

- `s8fleet spawn` supports new options:
    - `count` - how many to spawn per drone (default: 1)
    - `limit` - max processes per commit per drone
    - `errlimit` - max respawns to allow in the first 30 seconds (default: 1)
- `s8fleet stop` supports new options:
    - `drone` - now defaults to `*`
    - `all` - stop all processes on each selected drone
    - `commit` - stop processes by commit hash on each selected drone
- `s8fleet hosts` - List drones grouped by IP address.

license
=======

MIT
