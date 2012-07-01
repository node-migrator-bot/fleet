#!/bin/bash
if test -z "$*"; then
  s8fleet-help
else
  s8fleet-$*
fi
