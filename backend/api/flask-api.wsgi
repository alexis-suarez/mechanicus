#!/usr/bin/python
import sys
import logging
# logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/api/")

from API import app as application