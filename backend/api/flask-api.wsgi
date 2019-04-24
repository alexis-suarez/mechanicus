#!/usr/bin/python3
import sys
import logging
# logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/api/")

from API import app as application

# Main fuction in debug Mode
if __name__ == "__main__":
    application.run(debug=False)