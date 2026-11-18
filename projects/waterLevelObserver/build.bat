@echo off
cd /d "%~dp0"

set "JAVAC="
set "JAR="
for /d %%d in ("C:\Program Files\Java\jdk*" "C:\Program Files\Eclipse Adoptium\jdk*" "C:\Program Files\Microsoft\jdk*" "C:\Program Files\Amazon Corretto\jdk*" "C:\Program Files\Zulu\zulu*" "C:\Program Files (x86)\Java\jdk*") do (
  if exist "%%d\bin\jar.exe" (
    set "JAVAC=%%d\bin\javac.exe"
    set "JAR=%%d\bin\jar.exe"
  )
)

if not defined JAR (
  echo.
  echo Could not find jar.exe in the usual JDK folders.
  goto fail
)

echo Using: %JAR%
del *.class 2>nul
"%JAVAC%" --release 8 Demo.java
if errorlevel 1 goto fail
"%JAR%" cfe WaterLevel.jar Demo *.class
if errorlevel 1 goto fail
del *.class
echo.
echo SUCCESS: WaterLevel.jar was created
pause
exit /b

:fail
echo.
echo FAILED - read the error above
pause


