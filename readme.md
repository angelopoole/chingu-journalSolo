[![Demo](https://img.shields.io/badge/Demo-Heroku%3AOnline-brightgreen)](https://chingu-journalsolo.herokuapp.com/)
[![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/angelopoole/chingu-journalSolo)

## Contents

- [Chingu Journal](#chingu-journal)
  - [overveiw](#overveiw)
  - [Features](#features)
  - [Running the project](#running-the-project)

# Chingu Journal

![project image](../static-media/images/Screen%20Shot%202021-08-27%20at%2012.52.10%20PM.png?raw=true)

## overveiw

chingu journal is a simple crud applciation with both a frontend and backend.
Made to fit the requirements of the chingu.io before voyage solo project.

## Features

you can register/sign in, create notes, edit notes, and delete notes.

## Running the project

clone or fork this repo

cd into file directory and create a .env file, inside of it create the following env variables

```
PORT = 4000
NODE = development
MONGO_URI = your-mongo-uri
JWT_SECRET = your-random-jwt-secret
```

run

```bash
npm run installDeps
```

This will install the dependency's for the client and the backend.

to run the application in dev mode, run

```bash
npm run dev-server
```

:)
