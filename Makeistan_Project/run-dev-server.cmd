@echo off
cd /d "%~dp0"
"C:\Program Files\nodejs\npm.cmd" run dev -- -p 3010 >> next-dev.log 2>> next-dev.err.log
