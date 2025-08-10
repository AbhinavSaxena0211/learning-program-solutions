# Git Branching and Merging Hands-on Lab

#Objectives
- Explain branching and merging in Git
- Demonstrate creating a branch request in GitLab/GitHub
- Demonstrate merging a branch into main/master

#In this lab, I learned:
- How to create and switch between branches
- How to commit changes in a branch
- How to merge a branch into the main branch
- How to delete branches after merging

---

#Prerequisites
- Git installed and configured on the system
- Optional: P4Merge tool installed for visual diff
- Local Git repository connected to a GitHub or GitLab remote

---

#Steps Performed

# Create a new branch
git branch GitNewBranch
```

List branches

git branch -a
```
Switch to the new branch

git checkout GitNewBranch
```

Create and edit a file in the branch

echo This file is created in GitNewBranch. > branch-file.txt
git add branch-file.txt
git commit -m "Add branch-file.txt in GitNewBranch"
```

Check branch status

git status
```

---

Merging Steps

 Switch back to main/master

git checkout main
```

View differences (CLI)

git diff main..GitNewBranch
```

View differences (P4Merge, optional)

git difftool main..GitNewBranch
```

Merge branch into main

git merge GitNewBranch
```

View merge log

git log --oneline --graph --decorate
```

Delete the branch after merging

git branch -d GitNewBranch
```

---

Explanation
- **Branching:** Allows working on a separate line of development without affecting the main branch.
- **Merging:** Combines changes from one branch into another.
- **Branch Request (Pull Request in GitHub):** Formal request to merge changes.
- **Merge Request in GitLab:** Same concept as Pull Request in GitHub.

---

Outcome
- Successfully created and merged a branch into main.
- Verified merge history and branch deletion.
