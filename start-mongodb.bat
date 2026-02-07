@echo off
echo Starting MongoDB...
mongod --dbpath ./mongodb-data --port 27017
pause