s8fleet-hub(1) -- Create a hub for drones to connect.
===================================================

## SYNOPSIS

    s8fleet hub [<options>]

## DESCRIPTION

This command will create and update a file called `s8fleet.json` in your git
project root so that you don't need to type `--hub` and `--secret` all the time.

## OPTIONS

* --port - port to listen on
* --secret - optional plaintext passphrase

## EXAMPLE

    s8fleet hub --port=7000 --secret=beepboop
