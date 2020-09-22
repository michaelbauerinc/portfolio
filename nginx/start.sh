#!/bin/bash
sh ./utils/gen-conf-from-template.sh
service nginx restart
sleep infinity