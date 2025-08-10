# Git Clean Up and Push Back to Remote Hands-on Lab

#Objectives
- Explain how to clean up local repository state  
- Pull remote updates  
- Push local changes back to the remote Git repository

---

#Prerequisites
- Git installed  
- Access to the remote Git repository  
- Git Bash or Windows Command Prompt (instructions here for Windows CMD)

---

## Step-by-step instructions

1. Check out your main branch (replace `main` if your branch has a different name):
git checkout main


2. Verify if your working tree is clean:
git status


3. List all available branches (local and remote):
git branch -a


4. Pull latest changes from remote to your local branch:
git pull origin main


5. If you have local changes, stage and commit them:

git add .
git commit -m "Your commit message here"


6. Push your committed changes to the remote repository:
git push origin main


7. Verify if changes are reflected on remote (optional):
git fetch origin
git log origin/main --oneline -5

