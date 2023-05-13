---
title: "Try again with sudo: _sudo"
date: 2021-11-11
tags: "sudo, su, bash, sh, shell"
---
Sometimes you want to run without sudo if you can... and run with sudo if you can't.

`_sudo.sh`
```
$@ || sudo $@
```