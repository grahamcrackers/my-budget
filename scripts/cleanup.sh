#!/bin/bash

list=$(find . -type d -name 'node_modules' -maxdepth 3 | grep -v 'node_modules/')

for folder in $list
do
    rm -rf $folder
    echo "$folder removed"
done
