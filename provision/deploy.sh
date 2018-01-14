#!/bin/bash

set -eux

export AWS_PROFILE=kazuya

yarn build
aws s3 sync build/ s3://id-design/
