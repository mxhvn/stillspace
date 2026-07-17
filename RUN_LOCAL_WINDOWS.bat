@echo off
cd /d "%~dp0"
start "" "http://localhost:8080/?reset=1"
python -m http.server 8080
pause
