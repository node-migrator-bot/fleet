s8fleet-remote(1) -- manage the set of remote s8fleet hubs
======================================================

## SYNOPSIS

    s8fleet remote add <name> [<options>]
    s8fleet remote rm <name>
    s8fleet remote ls

## DESCRIPTION

This command will create and update a file called `s8fleet.json` in your git
project root so that you don't need to type `--hub` and `--secret` all the time.

## COMMANDS

### s8fleet remote add `<name>` [`<options>`]

Add a remote named `<name>` to store the parameters from `<options>`.

`<options>` can include:

* hub - where the s8fleet hub is running as a "host:port" string
* secret - the plaintext password to use for authentication
* env.`<name>` - Set environment variables to use with spawn and exec


Example usage:

    s8fleet remote add default --hub=10.0.5.2:6002 --secret=rawr

Add remote with environment variables:

    s8fleet remote add default --hub=10.0.5.2:6002 --secret=rawr --env.FOO=3 --env.BAR=kapow


### s8fleet remote rm `<name>`

Delete a remote named `<name>`.

### s8fleet remote ls

List all the remotes from the `s8fleet.json`.
