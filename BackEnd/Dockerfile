# FROM node:16.15.1

# WORKDIR /usr/src/projectmanager-api

# COPY ./ ./

# RUN npm install


# CMD ["/bin/bash"]

###########################
FROM node:16.15.1

# Create app directory
RUN mkdir -p /usr/src/projectmanager-api
WORKDIR /usr/src/projectmanager-api

# Install app dependencies
COPY package.json /usr/src/projectmanager-api
RUN npm install

# Bundle app source
COPY . /usr/src/projectmanager-api

# Build arguments
ARG NODE_VERSION=16.15.1

# Environment
ENV NODE_VERSION $NODE_VERSION