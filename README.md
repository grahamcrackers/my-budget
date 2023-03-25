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

# i can't get prisma to pick up environment variables from the root directory when running cli commands,
# so for now, just copy the one in the example folder
cp ./apps/api/.env.examples ./apps/api/.env

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

## Helpful Articles

-   [Atomic Component Design](https://atomicdesign.bradfrost.com/chapter-2/)
-   [Typescript + React Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
-   [Error Handling](https://medium.com/with-orus/the-5-commandments-of-clean-error-handling-in-typescript-93a9cbdf1af5)

## Emojis for Commit's
You can find more on [gitmoji](https://gitmoji.dev/) or [this list](https://gist.github.com/rxaviers/7360908) that contains all github emoji's. The one's below are the ones I've used so far or plan to use.

-   :sparkles: `:sparkles:` - features
-   :bug: `:bug:` - bugs
-   :memo: `:memo:` - documentation
-   :books: `:books:` - storybook/stories
-   :truck: `:truck:` - moving files
-   :package: `:package:` - package config
-   :earth_americas: `:earth_americas:` - .env/global variables
-   :whale: `:whale:` - docker/doc
-   :construction: `:construction:` - work in progress
