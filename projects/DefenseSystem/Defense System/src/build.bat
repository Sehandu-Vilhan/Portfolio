@echo off
setlocal enabledelayedexpansion

set "SRC=C:\Users\Admin\Desktop\icet\Portfolio\projects\DefenseSystem\Defense System\src"
set "OUTJAR=C:\Users\Admin\Desktop\icet\Portfolio\projects\DefenseSystem\DefenseSystem.jar"

:: Leave empty to auto-detect. If it picks the wrong class, type it here, e.g. MainController.Starter
set "MAINCLASS="

set "BUILD=%TEMP%\defense_build"
set "LIST=%TEMP%\defense_sources.txt"

if not exist "%SRC%" (
  echo Source folder not found: %SRC%
  goto fail
)
cd /d "%SRC%"

set "JAVAC="
set "JAR="
for /d %%d in ("C:\Program Files\Java\jdk*" "C:\Program Files\Eclipse Adoptium\jdk*" "C:\Program Files\Microsoft\jdk*" "C:\Program Files\Amazon Corretto\jdk*" "C:\Program Files\Zulu\zulu*" "C:\Program Files (x86)\Java\jdk*") do (
  if exist "%%d\bin\jar.exe" (
    set "JAVAC=%%d\bin\javac.exe"
    set "JAR=%%d\bin\jar.exe"
  )
)
if not defined JAR (
  echo Could not find jar.exe in the usual JDK folders.
  goto fail
)
echo Using JDK: %JAR%
echo.

:: Find the class that has main()
echo Classes with a main method:
findstr /s /m /c:"public static void main" *.java
echo.
if not defined MAINCLASS (
  for /f "delims=" %%f in ('findstr /s /m /c:"public static void main" *.java') do (
    if not defined MAINCLASS (
      set "REL=%%f"
      set "REL=!REL:.java=!"
      set "REL=!REL:\=.!"
      set "MAINCLASS=!REL!"
    )
  )
)
if not defined MAINCLASS (
  echo No class with main found. Set MAINCLASS at the top of this file.
  goto fail
)
echo Main class: !MAINCLASS!
echo.

:: List every .java file (javac wants forward slashes in this list)
if exist "%LIST%" del "%LIST%"
for /r "%SRC%" %%f in (*.java) do (
  set "p=%%f"
  set "p=!p:\=/!"
  echo "!p!">>"%LIST%"
)

if exist "%BUILD%" rmdir /s /q "%BUILD%"
mkdir "%BUILD%"

echo Compiling all files together...
"%JAVAC%" --release 8 -encoding UTF-8 -d "%BUILD%" "@%LIST%"
if errorlevel 1 goto fail

:: Copy images and other non-code files, if any
robocopy "%SRC%" "%BUILD%" /E /XF *.java *.form >nul
if errorlevel 8 goto fail

echo Creating DefenseSystem.jar...
"%JAR%" cfe "%OUTJAR%" !MAINCLASS! -C "%BUILD%" .
if errorlevel 1 goto fail

rmdir /s /q "%BUILD%"
del "%LIST%"

echo.
echo SUCCESS: %OUTJAR%
pause
exit /b

:fail
echo.
echo FAILED - read the error above
pause
