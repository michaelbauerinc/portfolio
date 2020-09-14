#!/bin/bash
IMAGE=$(docker images portfolio_base_image --format "{{.Repository}}")
if [ "$IMAGE" ]; then
    echo "Found base image. No need to build.";

    exit 0;
fi

docker build . -t portfolio_base_image