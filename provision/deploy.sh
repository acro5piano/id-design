#!/bin/bash

set -eux

export AWS_PROFILE=kazuya

# yarn build
rm -rf build/**.mp4
rm -rf build/**/*.{png,jpg}
aws s3 sync build/ s3://id-design/
