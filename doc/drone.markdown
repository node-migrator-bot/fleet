s8fleet-drone(1) -- Connect to a hub as a worker.
===============================================

## SYNOPSIS

    s8fleet drone [<options>]

## DESCRIPTION

Connect to a s8fleet hub and register as a worker drone.

## OPTIONS

* --hub - connect to this hub as a `host:port` string
* --secret - optional passphrase to connect to the hub

## EXAMPLE

    s8fleet drone --hub=10.0.5.2:7000 --secret=beepboop
