# My Budget

An open source envelope budgeting application. What makes this better than other budgeting applications out there? Nothing. This is purely made because I want to use some newer technologies and have a need to start budgeting my life goals.

# Getting Started

We use docker compose to spin up an image of postgresql and [Keycloak](https://www.keycloak.org/) for oid-connect authentication with our backend api. There's a couple of scripts you should run to make sure everything is installed. You will also need docker installed on your local machine. Once you've downloaded the repo, you can run these commands

```bash
# install node packages
yarn install

# copy .env.example file
# these values should work for initial development, but you may want to change them
cp .env.example .env

# initialize docker compose
docker compose up -d

# run the api and web app
# todo: move this docker-compose
yarn dev
```

If you want to spin down the image you can run

```bash
# will stop the current images from running
docker compose down

# removes the database in our mounted volume
docker compose down -v
```

-   Note: The `JWT_KEY_OR_SECRET` in the .env file should match the `secret` field in the `./config/mybudget-realm.json` file. I haven't figured out a way to inject the secret from the `.env` to the docker container yet.
