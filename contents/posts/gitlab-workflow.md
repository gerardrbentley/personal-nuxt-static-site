---
name: 'gitlab-workflow'
title: Managing Your Projects
year: 28 March 2020
color: '#710710'
id: 'gitlab-workflow'
description: |
  Demonstrating some useful git workflows for working with other developers and updating your projects over time.
tags: 
- 'beginner' 
- 'general-coding'
- 'git'
- 'guide'
---

# Gitlab Workflow
One goal of using Gitlab is to not clobber other contributers' work, even when working on different features and recombining new code.
Using it to manage a personal project will help you keep a history of your code, plan out what you want to add, and share your work so others can contribute or work on their own version.

For a fuller perspective on why we try to `branch` into development code to add features then `merge` that code back into our previous work,
[here](https://docs.gitlab.com/ee/topics/gitlab_flow.html) is a post from gitlab with some nice diagrams.

It's not important to understand every detail, but it highlights some best practices like using informative names and comments.

For motivation on why a system like git makes sense to use, here's a brief, not-so-technical post ['the git parable' by Tom Preston-Werner](https://tom.preston-werner.com/2009/05/19/the-git-parable.html)

## Action Item: Clone the Site
Your first task, which will hopefully be a useful example to reference in the future, is to change up this website by adding your information to the main page.

**NOTE**: You only have to do this once per project / repository.

- Navigate to the project website:
- Open a new <nuxt-link to="terminal">Terminal</nuxt-link> window (or Git Bash / Powershell on Windows) and enter the following commands one by one (you can replace `web-resources` with whatever folder name and `dev-YOURNAMEHERE` with something like `dev-gb`, just make sure to use the same every time, `TYPSO ARE BAD`)

```
git clone git@TODO:add LINK web-resources
```

Now you should have a folder with all the code for the site called `web-resources,` probably in your Home directory ('~/web-resources'). If you want to understand what's happening with these folders, check out my <nuxt-link to="terminal">intro to the Terminal post</nuxt-link>

### Start a feature / development branch

Make sure you Change Directories in the Terminal to your `/web-resources/` folder, then start a branch to work on (you can name it anything, easy to remember and spell is best)

```
cd web-resources
git checkout -b dev-YOURBRANCHNAME
```

**NOTE:** If you've already started a branch and are returning to working on it, you might not need this step, but may want to update your branch with code that others have added to master.

### Update feature branch to master
When returning to working on a project it's usually a good idea to use `git status` to find what branch you're on, `git fetch` to download any files that are new on the server, and `git pull origin BRANCHNAME` to update your local files if needed.

To make future merges easier and access others' code contributions, it is good to occasionally fetch changes from master and merge them into our feature / dev branch. I'll copy commands from [this gist](https://gist.github.com/santisbon/a1a60db1fb8eecd1beeacd986ae5d3ca), see the link for more explanation. 
This is similar to 'rebasing' 

```
git checkout master
git fetch -p origin
git merge origin/master
git checkout YOUR-FEATURE-BRANCH-NAME
git merge master
```

This may get you into Vim to complete the merge, see Common Issues below (or `esq` - `:wq` - `enter`)

Once the merge is done you can `git checkout YOUR-FEATURE-BRANCH-NAME`, work on it, add, commit, and finally `git push origin YOUR-FEATURE-BRANCH-NAME`

### Record what you're doing

When working on a new feature, we want to tell everyone that we're working on it in Issues

#### 1.
To tell the rest of the team what Issue / Task you're working on, go to the [Issues -> Boards](TODO: BOARD LINK) tab
#### 2.
Click the `+` Plus button on the top right of `To Do` or `Doing` and add a comment about what you're improving like "Adding my name to the website" (try to be specific)
#### 3.
Everyone can see that you are / were working on that task and that it needs to get done
#### BONUS: 
If you want to get real fancy, make a mental note of the number of your issue (`#5`, `#1`, `#47`, etc...) so that we can automatically set it to Done later

### Make some edits

- Add a headshot image to the folder `images/headshots/`. For this example the filename will be `my_headshot.jpg`
- Open up your <nuxt-link to="how-i-vs-code">Code Editor</nuxt-link> and open the file `web-resources/public/index.html`
- Add your name to the main page
- Save the file

### Send your changes to the server

Now we want to make your changes go live.

To do that, commit your code changes to the `dev-YOURBRANCHNAME` branch, push it to the online server to be saved, merge it into the master branch, and finally update the live website with the master branch

If anything goes wrong in this process or to understand it better, see the references below

### BONUS: 

If you remembered your issue number above (let it be 47 for now), add `fixes #47` or `closes #47` to your git commit message below (in the double quotes) and it automatically goes from Doing / To Do to Done!
```
git status
git add .
git commit -m "Added my name to the site, closes #47"
git push origin dev-YOURBRANCHNAME
```

### Merge your changes with the live / master branch
Now you're changes are saved online, but on your development branch. When we merge it into the master branch there may be conflicts / overwrites that need to be resolved.

**NOTE:** This is the traditional (command line) way to merge, using git commands in the Terminal. If any conflicts or errors arise, scroll down to check common issues

```
git checkout master
git merge dev-YOURBRANCHNAME
git push origin master
```

#### Alternative Merge

- Using the gitlab site to might help you get fewer: `error: failed to push some refs to ......` hangups
- Instead of the above commands, after you push your dev-YOURBRANCHNAME, navigate to the [project page](TODO: LINK)
- You should see a banner near the top like the following with the branch that you just pushed to (in this example `add-styling` branch), click the `Create Merge Request`:
[TODO IMAGE]
- On the next screen you should assign the task of merging to yourself and add comments if you wish. Near the bottom you can observe the files and changes affected by the merge. Continue creating the merge request.
- Once all conflicts are sorted out (if any), a testing pipeline will run (if in place), and you'll be able to press the green `Merge` button as below. (You don't need to check the `Delete Source branch` but you can always make a new branch):
[TODO IMAGE]

### Confirm your work on gitlab
Now a `pipeline` will be triggered to test and deploy your changes, which you can see in the [CI/CD -> Pipelines](TODO PIPELINE LINK) tab

You can click through to the `pages` job (either a blue semi circle or green check or red x) to see what the server is actually doing to execute your changes.

Hopefully that won't take too long and the Blue semi circle becomes a Green check (and not a Red x).

Now you can go back to the [Issues -> Boards](TODO BOARDS TAB) tab and drag your TO Do / Doing item to the Done Bin!

Check out the (main page)[TODO MAIN LINKE] to confirm your work.


# Common Git Issues
## Cloning and Branching:

## Fixing your local Repo:

### Reset my local Repo to whatever is online

If people have made many changes and you haven't caught up, it's sometimes easiest to just reset your local folder to whatever is on the server.

For more nuance, see this [stack overflow post](https://stackoverflow.com/questions/1628088/reset-local-repository-branch-to-be-just-like-remote-repository-head)

```
git fetch origin
git reset --hard origin/master
```

### git push origin master FAILS

If someone else changed `Master` and you haven't received those, you may get an error (probably in red and yellow) that resembles the following:

```
error: failed to push some refs to 'git@pom-itb-gitlab01.campus.pomona.edu:web-lab/web-resources.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
```

#### SOLUTION 1:
Try a simple git pull. If you didn't change the same files that others did then you should receive their changes painlessly.

``` bash
git pull origin master
```

This may get you into the land of Vim, a text editor that lives entirely in the terminal, it's ok to be confused, it happens to [most people trying to exit vim](https://www.reddit.com/r/ProgrammerHumor/comments/8poep0/a_vim_joke/).

To escape vim and save the merge, type the follow key cominations: `escape` then `shift+;` (a colon) then `w` then `q` then `enter`

#### SOLUTION 2:

If the git pull origin master command fails, you may get an error like the following:

``` bash
remote: Total 3 (delta 2), reused 1 (delta 0)
Unpacking objects: 100% (3/3), done.
From gitlab.com:username/web-resources
 * branch            master     -> FETCH_HEAD
   f62b1f8..118f52e  master     -> origin/master
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

This means that you tried to edit the same file that someone has already updated on the master branch of the server.

Opening up your <nuxt-link to="how-i-vs-code">code editor</nuxt-link> and opening the conflicting files you're trying to merge should give you several options:
- Keep only the work that the others added and discard your changes (probably not what you want)
- Keep only the work that you added and discard others' changes (also probably not the goal)
- Keep both (may need to add more lines, but often we want to collaborate, not clobber)
- Keep some of each (some work is mutually exclusive and needs to pick one or the other)


## Broken / Wrong Origin link:

## Hard reset all files (fetch other's work)

## Fixing the remote Repo:

### Pushed wrong files to Gitlab.

Sometimes you have temporary files / images locally that you don't need to push to everyone via Gitlab.
Sometimes those images / large files end up in the repo but others don't want to download them when they clone it, so we'll remove them

#### SOLUTION:
Files and folders listed in .gitignore will not be tracked by git (i.e. you can use `git add .` and it won't wrongfully add gitignored files). Learn more on gitignore syntax (https://www.atlassian.com/git/tutorials/saving-changes/gitignore)[here].

After updating .gitignore to list the files you want to remove from remote gitlab,

``` bash
git rm -r --cached .
git add .
git commit -m "Removed large files from repo..."
git push origin CURRENT-BRANCH-NAME
```

This assumes there are files you need to `re-ignore` in folders throughout the project. If it's a single folder (`./VERY_FULL_FOLDER/`) or file (`./path/to/one_file_to_remove.py`) then you should replace the `.` in the first command to that path (i.e. `./VERY_FULL_FOLDER`) and only the files in that folder will be searched.
