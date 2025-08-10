Git Ignore Hands-on Lab

Objectives
- Explain `.gitignore`
- Demonstrate how to ignore unwanted files using `.gitignore`

What I Learned
In this lab, I learned:
- How to create a `.gitignore` file.
- How to ignore specific file types and folders in a Git repository.
- How to verify that ignored files are not tracked by Git.

#Prerequisites
- Git installed and configured (`git config` user.name and user.email set).
- Notepad++ integrated as the default Git editor (optional).
- A local Git repository connected to a remote GitHub repository.

#Steps Performed
1. Created test files to ignore
   ```cmd
   echo This is a log file for testing .gitignore functionality. > error.log
   mkdir logs
   echo This is a sample log inside logs folder. > logs\sample.txt
   ```

2. Created `.gitignore` file
   ```cmd
   echo *.log> .gitignore
   echo logs/>> .gitignore
   ```

3. Checked `.gitignore` content
   ```cmd
   type .gitignore
   ```

4. Staged and committed `.gitignore`
   ```cmd
   git add .gitignore
   git commit -m "Add .gitignore to ignore .log files and logs folder"
   ```

5. Pushed changes to GitHub
   ```cmd
   git push origin main
   ```

6. Verified ignored files
   ```cmd
   git status
   git check-ignore -v error.log
   git check-ignore -v logs\sample.txt
   ```

#Explanation of `.gitignore`
- `.gitignore` tells Git which files or folders to skip tracking.
- Commonly used to ignore:
  - Log files (`*.log`)
  - Build artifacts
  - Temporary/system files
  - Secrets or credentials
- Rules in this lab:
  ```
  *.log
  logs/
  ```

Outcome
- `.gitignore` successfully ignores:
  - All files ending in `.log`
  - Entire `logs/` folder
- These files are **not** pushed to GitHub.

GitHub - https://github.com/AbhinavSaxena0211/GitDemo
