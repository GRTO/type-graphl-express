# type-graphl-express
This a little demo  with **type-graphql** and express server. Avoding the use of apollo server

## Configuration

Before to run the project, create the **env file** with the following structure:

```
SP_BASE_URL=[BASE_URL]
AUTH_HEADER=[AUTH_HEADER]
COOKIE_SESSION=[COOKIE_SESSION]
```

**Note:** The name of the _env file_ have to be **.env** for a develop server and **production.env** for a production server.

## Run the project

First, execute the following command

```
npm install
```

Then, if you want to run production mode, execute:

```
npm run build
```

If you want development mode, execute:

```
npm run serve
```
