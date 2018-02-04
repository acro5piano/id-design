#!/bin/bash

PROFILE=kazuya
BUCKET_NAME=id-design

export AWS_PROFILE=$PROFILE

function s3 {
  aws s3api create-bucket --region ap-northeast-1 --acl public-read --bucket $BUCKET_NAME
  aws s3api put-bucket-acl --bucket $BUCKET_NAME --acl public-read
  aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://provision/s3-policy.json
  aws s3 website s3://id-design --index-document index.html --error-document index.html --profile kazuya
}

s3
