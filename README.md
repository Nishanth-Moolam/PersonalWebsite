# PersonalWebsite

This application uses Django Rest Framework for a backend, and React for frontend, and calls an external API
to track COVID cases in Canada.

# Installation

Git clone the repo, cd into PersonalWebsite, and start a virtual environment

```
$ git clone
$ cd PersonalWebsite
$ python3 -m venv env
$ source env/bin/activate
```

To run backend, install requirements, cd into pwAPI and run server. Server will
run on localhost 8000.

```
$ pip install requirements.txt
$ cd pwAPI
$ python manage.py runserver
```

To run frontend, cd into pwfront, install packages and start react. Server will
run on localhost 3000.

```
$ cd pwfront
$ npm i
$ npm start
```
