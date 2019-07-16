# Addressbook

Demo project to deploy on DigitalOcean Kubernetes using Semaphore CI/CD.

## Local

### Build

    npm install
    cp env-sample .env

Set your database credentials in .env

Start test postgres and create database objects:

    . ./.env
    npm run migrate

### Tests

    npm run test
    npm run lint

### Run

    npm run start

or with nodemon

    npm run start:dev

## DigitalOcean

Provision Services:
 - postgres cluster: create a database `addressbook_db` and a user `addressbook_user`
 - kubernetes cluster: set the cluster name `addressbook-server`

### Create secrets

- dockerhub:
  - DOCKER_USERNAME=YOUR_USERNAME
  - DOCKER_PASSWORD=YOUR_PASSWORD
- do-access-token
  - DO_ACCESS_TOKEN=YOUR_DIGITALOCEAN_TOKEN
- env-production
  - environment file mapped to /home/semaphore/env-production




