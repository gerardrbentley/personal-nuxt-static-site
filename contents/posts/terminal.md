---
name: 'terminal'
title: Scared of the Terminal? Try starting here.
year: 3 April 2020
color: '#710710'
id: 'terminal'
description: |
  Go over some basics of Command Line usage, hopefully demistifying some things in the way.
tags: 
- 'beginner'
- 'guide'
- 'general-coding'
---

## Why Keyboard Over Mouse?

The Terminal, which you might also hear called shell, console, or command line (with a fair bit of [nuance]((https://askubuntu.com/questions/506510/what-is-the-difference-between-terminal-console-shell-and-command-line)))
lets you access apps and files and execute programs without using a mouse or other windows, it all stays in the terminal, it all stays in text, it can all be automated.
It also gives you access to the Kernel of your OS, the software in control of basically all your applications, so you can take back your technological freedom.
Finally, Graphical (GUI) interfaces aren't available for all programs, especially a lot of the older software.
It's generally easier to develop a program that takes a few Command Line arguments than a full blown GUI Application.

## Basic Navigation

When you open Terminal.app (on mac you can use command-spacebar then search `Terminal`) all you get is a blank command line prompt, probably ending with `$`

The terminal works like a filesystem/Finder window in that you need to navigate 'up' and 'down' folders to find different files.
When you open a new Terminal it is most likely located at your account's Home folder (also referred to as ~).

**NOTE:** On Mac the ~ can be replaced with /Users/YOUR-USERNAME/ for an absolute path ([absolute vs relative](https://www.linuxnix.com/abslute-path-vs-relative-path-in-linuxunix/) explanation)
For reference, your Desktop folder is located at ~/Desktop, your Documents at ~/Documents

Now for the 3 Basic commands that will help you navigate around:

     pwd

`Print Working Directory`: Tells you where in the filesystem the command line is currently pointed. On a fresh Terminal window it should show /Users/YOUR-USERNAME/

     ls

`List`: Lists out all the files and directories in the current directory you're pointed at. Also helps you know where in the filesystem you are

     cd

`Change Directory`: Actually moves where the command line is pointed to a different directory / folder.

The common uses of `cd` and `ls`:

### Go to your project folder

On my personal computer I try to keep all my coding projects under a folder called `research` (in their own individual folders) which is in my Home folder (~/research or /Users/Gerard/research)

So to get to my project I open terminal and enter

     cd research/my-project-folder

**NOTE**: This works because the Terminal is already pointed at my ~/ directory and `research` is in that directory. You can use `ls` to see if `research` is present

If you don't remember the project-folder name you can do the following

     cd research
     ls

This will show you all the files and folders in `research`, then you can simply

     cd project-folder-i-remember-now


### Go back one or more directories
As `~/` is equivalent to `/Users/YOUR-USERNAME/` on mac, `./` is equivalent to `pwd`/

By this I mean that `.` represents the current working directory, where the terminal command line is pointed.

So the same command from before works the same like this (from a fresh Terminal located at `~/`)

     cd ./research/my-project-folder

After executing that command, `pwd` will tell you the Terminal is at `/Users/Gerard/research/my-project-folder`, which we want because we just `cd`d into that directory

If we wanted to switch projects (to a different folder in `research`), we need to go 'up' a folder. To do this we use `..` to represent the folder 'above' the current folder

     cd ..

This brings us back to `research`, so `pwd` will say `/Users/Gerard/research/`

Now we can cd into a different folder

     cd my-other-project-folder

If we wanted to switch to a different project directly in one command we can use

     cd ../third-folder

I think of this as 'going to third-folder, which is in the folder above the current one'
