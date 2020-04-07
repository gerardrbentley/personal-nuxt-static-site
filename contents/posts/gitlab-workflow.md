---
name: 'gitlab-workflow'
title: Share a website to the world in less than a day (Free for Students!)
year: 28 March 2020
color: '#710710'
id: 'gitlab-workflow'
description: |
  Using Google Domains, Gitlab Pages, and some basic HTML and CSS to make a fun public facing webpage.
tags: 
- 'beginner' 
- 'web-dev'
- 'deployment'
- 'guide'
---


One goal of using Gitlab is to not clobber one another's work, even when working on different features and recombining new code.

For a fuller perspective on why we try to `branch` into development code to add features then `merge` that code back into our previous work, 
[[https://docs.gitlab.com/ee/topics/gitlab_flow.html][here]] is a post from gitlab with some nice diagrams. 

It's not important to understand every detail, but it highlights some best practices like using informative names and issues.

For motivation on why a system like git makes sense to use, here's a brief, not-so-technical post 'the git parable' by [[https://tom.preston-werner.com/2009/05/19/the-git-parable.html][Tom Preston-Werner]]


* Action Item
** Contribute to the Site
Your first task, which will hopefully be a useful example to reference in the future, is to contribute to this website by adding your information to the [[file:people.org][People]] page.
*** Clone the website code 
NOTE: You only have to do this once per project / repository.

- Navigate to the project website: [[https://pom-itb-gitlab01.campus.pomona.edu/faim-lab/faim-resources]]
- Open a new [[file:./terminal.org][Terminal]] window (or Git Bash / Powershell on Windows) and enter the following commands one by one (you can replace `faim-resources` with whatever folder name and `dev-YOURNAMEHERE` with something like `dev-gb`, just make sure to use the same every time, TYPSO ARE BAD)
#+BEGIN_SRC bash
git clone git@pom-itb-gitlab01.campus.pomona.edu:faim-lab/faim-resources.git faim-resources
#+END_SRC
Now you should have a folder with all the code for the site called `faim-resources,` probably in your Home directory (~/faim-resources). If you want to understand what's happening with these folders, check out the [[file:./terminal.org][Intro to Terminal Commands]]

*** Start a feature / development branch
- Make sure you Change Directories in the Terminal to your `/faim-resources/` folder, then start a branch to work on (you can name it anything, easy to remember and spell is best)
#+BEGIN_SRC bash
cd faim-resources
git checkout -b dev-YOURBRANCHNAME
#+END_SRC
**** NOTE: If you've already started a branch and are returning to working on it, you might not need this step, but may want to update your branch with code that others have added to master.

*** Update feature branch to master
When returning to working on a project it's usually a good idea to use `git status` to find what branch you're on and `git pull origin BRANCHNAME` to fetch relevant changes if any others have added any

To make future merges easier and access others' code contributions, it is good to occasionally fetch changes from master and merge them into our feature / dev branch. I'll copy commands from [[https://gist.github.com/santisbon/a1a60db1fb8eecd1beeacd986ae5d3ca][this gist]], see the link for more explanation

#+BEGIN_SRC
git checkout master
git fetch -p origin
git merge origin/master
git checkout YOUR-FEATURE-BRANCH-NAME
git merge master
#+END_SRC

This may get you into Vim to complete the merge, see Common Issues below (or esq - :wq - enter)

Once the merge is done you can `git checkout YOUR-FEATURE-BRANCH-NAME`, work on it, add, commit, and finally `git push origin YOUR-FEATURE-BRANCH-NAME`

*** Record what you're doing
When working on a new feature, we want to tell everyone that we're working on it in Issues
- To tell the rest of the team what Issue / Task you're working on, go to the Issues -> [[https://pom-itb-gitlab01.campus.pomona.edu/faim-lab/faim-resources/-/boards][Boards]] tab
- Click the + Plus button on the top right of `To Do` or `Doing` and add a comment about what you're improving like "Adding my name to the website" (try to be specific)
- Everyone can see that you are / were working on that task and that it needs to get done
**** BONUS: If you want to get real fancy, make a mental note of the Number of your issue (#5, #1, #47, etc...) so that we can automatically set it to Done later

*** Make some edits
- Add a headshot image to the folder `images/headshots/`. For this example the filename will be `my_headshot.jpg`
- Open up your [[file:./code_editors.org][code editor]] and open the file `faim-resources/people.org`
- Add your name and MatrixID to the list
- Add a comment with your CAS ID (4 letter pomona ID)
- Add a link to the headshot you added and make sure it's the right size by adding two lines like the following (but with your file): 
#+BEGIN_SRC org
#+ATTR_HTML: :width 150
['[./images/headshots/my_headshot.jpg]']
#+END_SRC
- In [[https://orgmode.org/][org-mode]] Image links display the linked file and are created with double brackets ['[LINK_CONTENT]'] (but without the quotes)
- Save the file

*** Send your changes to the server
Now we want to make your changes go live.

To do that, commit your code changes to the `dev-YOURBRANCHNAME` branch, push it to the online server to be saved, merge it into the master branch, and finally update the live website with the master branch

If anything goes wrong in this process or to understand it better, see the references below
**** BONUS: If you remembered your issue number above (let it be 47 for now), add `fixes #47` or `closes #47` to your git commit message below (in the double quotes) and it automatically goes from Doing / To Do to Done!
#+BEGIN_SRC bash
git status
git add .
git commit -m "Added my name to the site, closes #47"
git push origin dev-YOURBRANCHNAME
#+END_SRC

*** Merge your changes with the live / master branch
Now you're changes are saved online, but on your development branch. When we merge it into the master branch there may be conflicts / overwrites that need to be resolved.
- This is the traditional way to merge, using git commands in the Terminal. If any conflicts or errors arise, scroll down to check common issues
#+BEGIN_SRC bash
git checkout master
git merge dev-YOURBRANCHNAME
git push origin master
#+END_SRC

**** Alternative
- Using the gitlab site to merge can result in fewer: `error: failed to push some refs to ......` hangups
- Instead of the above commands, after you push your dev-YOURBRANCHNAME, navigate to the [[https://pom-itb-gitlab01.campus.pomona.edu/faim-lab/faim-resources][project page]]
- You should see a banner near the top like the following with the branch that you just pushed to (in this example `add-styling` branch), click the `Create Merge Request`:
[[../images/gitlab_merge.png]]
- On the next screen you should assign the task of merging to yourself and add comments if you wish. Near the bottom you can observe the files and changes affected by the merge. Continue creating the merge request.
- Once all conflicts are sorted out (if any), a testing pipeline will run (if in place), and you'll be able to press the green `Merge` button as below. (You don't need to check the `Delete Source branch` but you can always make a new branch):
[[../images/gitlab_merge_2.png]]



*** Confirm your work on gitlab
Now a `pipeline` will be triggered to test and deploy your changes, which you can see in the CI/CD -> [[https://pom-itb-gitlab01.campus.pomona.edu/faim-lab/faim-resources/pipelines][Pipelines]] tab

You can click through to the `pages` job (either a blue semi circle or green check or red x) to see what the server is actually doing to execute your changes.

Hopefully that won't take too long and the Blue semi circle becomes a Green check (and not a Red x).

Now you can go back to the Issues -> [[https://pom-itb-gitlab01.campus.pomona.edu/faim-lab/faim-resources/-/boards][Boards]] tab and drag your TO Do / Doing item to the Done Bin!

Check out the [[file:../misc/people.org][people]] page to confirm your work.


* Common Git Issues
** Cloning and Branching:

** Fixing your local Repo:

*** Reset my local Repo to whatever is online
If people have made many changes and you haven't caught up, it's sometimes easiest to just reset your local folder to whatever is on the server.

For more nuance, see this [[https://stackoverflow.com/questions/1628088/reset-local-repository-branch-to-be-just-like-remote-repository-head][stack overflow post]]

#+BEGIN_SRC
git fetch origin
git reset --hard origin/master
#+END_SRC

*** git push origin master FAILS
If someone else changed `Master` and you haven't received those, you may get an error (probably in red and yellow) that resembles the following:
#+BEGIN_SRC bash
error: failed to push some refs to 'git@pom-itb-gitlab01.campus.pomona.edu:faim-lab/faim-resources.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
#+END_SRC
[[../images/push_failed.png]]

**** SOLUTION 1:
Try a simple git pull. If you didn't change the same files that others did then you should receive their changes painlessly.
#+BEGIN_SRC bash
git pull origin master
#+END_SRC
This may get you into the land of Vim, a text editor that lives entirely in the terminal, it's ok to be confused, it happens to [[https://www.reddit.com/r/ProgrammerHumor/comments/8poep0/a_vim_joke/][most people trying to exit vim]]. 
[[../images/merge_vim.png]]
To escape vim and save the merge, type the follow key cominations: `escape` then `shift+;` (a colon) then `w` then `q` then `enter`

**** SOLUTION 2:
If the git pull origin master command fails, you may get an error like the following:
 
#+BEGIN_SRC bash
remote: Total 3 (delta 2), reused 1 (delta 0)
Unpacking objects: 100% (3/3), done.
From pom-itb-gitlab01.campus.pomona.edu:faim-lab/faim-resources
 * branch            master     -> FETCH_HEAD
   f62b1f8..118f52e  master     -> origin/master
Auto-merging org_blogs.org
CONFLICT (content): Merge conflict in org_blogs.org
Automatic merge failed; fix conflicts and then commit the result.
#+END_SRC
[[../images/merge_conflict.png]]


This means that you tried to edit the same file that someone has already updated on the master branch of the server.

Opening up your [[file:./code_editors.org][code editor]] and opening the conflicting files you're trying to merge should give you several options:
- Keep only the work that the others added and discard your changes (probably not what you want)
- Keep only the work that you added and discard others' changes (also probably not the goal)
- Keep both (may need to add more lines, but often we want to collaborate, not clobber)
- Keep some of each (some work is mutually exclusive and needs to pick one or the other)
[[../images/merge_vscode.png]]


** Broken / Wrong Origin link:

** Hard reset all files (fetch other's work)

** Fixing the remote Repo:

*** Pushed wrong files to Gitlab. 
Sometimes you have temporary files / images locally that you don't need to push to everyone via Gitlab.

**** SOLUTION:
Files and folders listed in .gitignore will not be tracked by git (i.e. you can use `add .` and it won't wrongfully add gitignored files). Learn more on gitignore syntax [[https://www.atlassian.com/git/tutorials/saving-changes/gitignore][here]].

After updating .gitignore to list the files you want to remove from remote gitlab,
#+BEGIN_SRC bash
git rm -r --cached .
git add .
#+END_SRC
This assumes there are files you need to `re-ignore` in folders throughout the project. If it's a single folder ('./VERY_FULL_FOLDER') or file ('./path/to/one_file_to_remove.py')
then you should replace the `.` in the first command to that path (i.e. `./VERY_FULL_FOLDER`) and only the files in that folder will be searched.
