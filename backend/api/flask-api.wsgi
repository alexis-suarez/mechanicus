#!/usr/bin/python3
import sys

# add your project directory to the sys.path
project_home = u'/var/www/api'
if project_home not in sys.path:
    sys.path = [project_home] + sys.path

# import flask app but need to call it "application" for WSGI to work
from API import app as application  # noqa