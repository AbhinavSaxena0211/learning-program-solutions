GitHub Hands-on Lab

Objectives

Familiar with Git commands like:
- `git init`
- `git status`
- `git add`
- `git commit`
- `git push`
- `git pull`

In this hands-on lab, you will learn how to:
1. Setup your machine with Git configuration.
2. Integrate Notepad++ as the default Git editor.
3. Add a file to a source code repository.

---

#Prerequisites
- Install Git Bash on your machine: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Install Notepad++: [https://notepad-plus-plus.org/downloads/](https://notepad-plus-plus.org/downloads/)
- Create a free GitHub account (do not use company credentials).

---

#Step 1: Setup Your Machine with Git Configuration
1. Check Git installation:

git --version
```
2. Configure user details:

git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
3. Verify configuration:

git config --list
```

---

#Step 2: Integrate Notepad++ as Default Git Editor
1. Test if Notepad++ opens:

notepad++
```
   If not recognized, add its path to:
   **Control Panel → System → Advanced System Settings → Environment Variables → Path**.

2. Set as default Git editor:

git config --global core.editor "notepad++ -multiInst -nosession"
```
3. Verify:

git config --global -e
```

---

#Step 3: Add a File to the Repository
1. Create project folder & initialize Git:

mkdir GitDemo
cd GitDemo
git init
```
2. **Create a file:**

echo "Welcome to GitHub Hands-on" > welcome.txt
```
3. **Check file exists:**

ls
```
4. **View content:**

cat welcome.txt
```
5. **Check Git status:**

git status
```
6. **Stage and commit file:**

git add welcome.txt
git commit -m "Initial commit with welcome.txt"
```

---

#Step 4: Push to GitHub
1. Create a new repository on GitHub named `GitDemo`.
2. Connect local repo to remote:

git remote add origin https://github.com/YOUR_USERNAME/GitDemo.git
```
3. Push changes:

git branch -M main
git push -u origin main
```
4. To pull changes later:

git pull origin main
```

---

Result: You have successfully configured Git, set Notepad++ as the default editor, created a file, committed it, and pushed it to GitHub.
GitHub - https://github.com/AbhinavSaxena0211/GitDemo
