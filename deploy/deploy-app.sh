#!/bin/bash
source env.sh

# Clone Repo
ssh -t -i ~/.ssh/${DEPLOY_KEY_PAIR_NAME}.pem -o StrictHostKeyChecking=no ${AWS_HOST} "git clone https://github.com/michaelbauerinc/portfolio.git"

# Copy env.sh
scp -i ~/.ssh/${DEPLOY_KEY_PAIR_NAME}.pem -o StrictHostKeyChecking=no env.sh ${AWS_HOST}:~/portfolio/env.sh

# Install docker
ssh -t -i ~/.ssh/${DEPLOY_KEY_PAIR_NAME}.pem -o StrictHostKeyChecking=no ${AWS_HOST} "bash -s" < ./deploy/install-docker.sh