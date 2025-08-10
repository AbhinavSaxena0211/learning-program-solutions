# Git Merge Conflict Resolution Hands-on Lab

**Hands-on ID:** Git-T03-HOL_001  
**Estimated Time:** 30 minutes

---

## Objectives
- Explain how to resolve merge conflicts  
- Implement conflict resolution when multiple users update the same file in different branches

---

## Prerequisites
- Git installed on your system  
- (Optional) P4Merge tool installed for visual diff/merge  
- A Git repository initialized or cloned

---

## Step-by-step instructions (Windows Command Prompt compatible)

1. Open Command Prompt and navigate to your repo folder:
2. Verify master branch is clean: 
    git status

3. Create and switch to a new branch `GitWork`:
    git checkout -b GitWork

4. Create `hello.xml` in `GitWork` branch with branch-specific content:
echo "<message>Hello from GitWork branch</message>" > hello.xml

5. Stage and commit the file in `GitWork`:

git add hello.xml
git commit -m "Add hello.xml in GitWork branch"

6. Switch back to the `main` branch:

git checkout main


7. Create a conflicting `hello.xml` in `main` with different content:

echo "<message>Hello from main branch</message>" > hello.xml

8. Stage and commit in `main`:

git add hello.xml
git commit -m "Add hello.xml in main branch with different content"

9. Observe commit history graph:

git log --oneline --graph --decorate --all



10. Check differences between branches (text diff):

 ```
 git diff main..GitWork
 ```

11. (Optional) If P4Merge is installed and configured, visualize diff:

 ```
 git difftool main..GitWork
 ```

12. Merge `GitWork` into `main` (this will cause a conflict):

 ```
 git merge GitWork
 ```

 You will see a conflict message like:

 ```
 CONFLICT (content): Merge conflict in hello.xml
 Automatic merge failed; fix conflicts and then commit the result.
 ```

13. Open `hello.xml` in a text editor (Notepad, Notepad++, etc.) to resolve the conflict.

 The file will contain conflict markers:

 ```
 <<<<<<< HEAD
 <message>Hello from main branch</message>
 =======
 <message>Hello from GitWork branch</message>
 >>>>>>> GitWork
 ```

14. Edit the file to merge the content as desired, for example:

 ```xml
 <message>Hello from both main and GitWork — merged</message>
 ```

15. Save and close the file.

16. Mark the conflict as resolved:

 ```
 git add hello.xml
 ```

17. Commit the merge:

 ```
 git commit -m "Resolve merge conflict in hello.xml"
 ```

18. Add merge tool backup files to `.gitignore` to avoid tracking them:

 ```
 echo *.orig >> .gitignore
 git add .gitignore
 git commit -m "Ignore mergetool backup files (*.orig)"
 ```

19. List all branches:

 ```
 git branch -a
 ```

20. Delete the merged branch locally:

 ```
 git branch -d GitWork
 ```

 (If pushed remotely, delete remote branch as well:)

 ```
 git push origin --delete GitWork
 ```

21. Verify final log and clean status:

 ```
 git log --oneline --graph --decorate
 git status
 ```

 If you make a mistake resolving conflicts, you can abort the merge with:


git merge --abort

- For multiple conflicting files, repeat the conflict resolution for each file.

- Using P4Merge or other mergetools can simplify visual conflict resolution.


