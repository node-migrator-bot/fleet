s8fleet-hosts(1) -- List drones grouped by IP address.
====================================================

## SYNOPSIS

    s8fleet hosts [<options>]

## DESCRIPTION

List drone IDs and their corresponding IP addresses, in an
`/etc/hosts`-style format.

## OPTIONS

If you haven't set a remote with `s8fleet remote`, you'll need to specify these
options:

* hub - location of the hub as a "host:port" string
* secret - optional passphrase to connect to the hub

## EXAMPLE

    $ s8fleet hosts
    1.2.3.4      3b9eb90e c3d8c947
    2.3.4.5      a2d5cf47 420de29a
