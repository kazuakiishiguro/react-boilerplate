#!/bin/bash

set -eu

dirs=(".cache" "dist" "build")

for dir in "${dirs[@]}"
do
  if [ -e ${dir} ]; then
    rm -rf ${dir}
    echo "Cleaned ${dir} directory!"
  fi
done
