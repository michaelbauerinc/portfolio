#!/bin/bash

# Latest stable
VERSION=12.18.3

echo "installing nodejs $VERSION and npm"
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

# Add $NVM_DIR environment variable on current shell session
export NVM_DIR="$HOME/.nvm"
# Run nvm.sh script if it exists, i.e. [ -s “$NVM_DIR/nvm.sh” ]
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# Run bash_completion script if it exists
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Install/use version
nvm install $VERSION
nvm alias default $VERSION
nvm use $VERSION

# Create symlinks to make npm/node available as root
ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/node" "/usr/local/bin/node"
ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npm" "/usr/local/bin/npm"