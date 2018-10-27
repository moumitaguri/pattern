#! /bin/bash

for testfile in ../test/*.js
do
  echo passing tests for $testfile;
  node $testfile;
done
