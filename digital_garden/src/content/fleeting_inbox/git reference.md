---
date: 2024-11-06
source:
  - web
tags:
  - devops
  - coding
  - software
title: Git and GitHub Reference
type: reference
URL: 
status: useful
---

# Git and GitHub Reference

A comprehensive guide to using Git and GitHub, ideal for quick reference.

---

## Table of Contents

[#1. Basic Concepts](#1.%20Basic%20Concepts)
[#2. Setup](#2.%20Setup)
[#3. Common Git Commands](#3.%20Common%20Git%20Commands)
[#4. Branching](#4.%20Branching)
[#5. Merging and Rebasing](#5.%20Merging%20and%20Rebasing)
[#6. Working with Remotes](#6.%20Working%20with%20Remotes)
[#7. Stashing](#7.%20Stashing)
[#8. GitHub Basics](#8.%20GitHub%20Basics)
[#9. Pull Requests](#9.%20Pull%20Requests)
[#10. Advanced Git Commands](#10.%20Advanced%20Git%20Commands)
[#11. Tips and Best Practices](#11.%20Tips%20and%20Best%20Practices)

---

## 1. Basic Concepts

### What is Git?

Git is a distributed version control system, meaning each developer has a full copy of the project history on their local machine.

### What is GitHub?

GitHub is a web-based platform that hosts Git repositories, allowing for collaboration, pull requests, and additional tools.

## 2. Setup

1. Install Git: Download from [git-scm.com](https://git-scm.com/).
2. Configure Git:

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

## 3. Common Git Commands

- Initialise a Repository:

  ```bash
  git init
  ```

- Clone a Repository:

  ```bash
  git clone <repository-url>
  ```

- Check Status:

  ```bash
  git status
  ```

- Add Files to Staging:

  ```bash
  git add <file>            # Add specific file
  git add .                 # Add all changes
  ```

- Commit Changes:

  ```bash
  git commit -m "Your commit message"
  ```

- Show Commit History:

  ```bash
  git log
  ```

- Undo Changes:

  ```bash
  git checkout -- <file>    # Discard changes in working directory
  git reset HEAD <file>     # Unstage a file
  ```

## 4. Branching

- Create a New Branch:

  ```bash
  git branch <branch-name>
  ```

- Switch Branches:

  ```bash
  git checkout <branch-name>
  ```

- Create and Switch to New Branch:

  ```bash
  git checkout -b <branch-name>
  ```

- Delete a Branch:

  ```bash
  git branch -d <branch-name>
  ```

## 5. Merging and Rebasing

- Merge Branches:

  ```bash
  git checkout <target-branch>
  git merge <source-branch>
  ```

- Rebase Branches:

  ```bash
  git checkout <feature-branch>
  git rebase <main-branch>
  ```

## 6. Working with Remotes

- Add a Remote Repository:

  ```bash
  git remote add origin <repository-url>
  ```

- View Remote Repositories:

  ```bash
  git remote -v
  ```

- Push Changes to Remote:

  ```bash
  git push origin <branch-name>
  ```

- Pull Changes from Remote:

  ```bash
  git pull origin <branch-name>
  ```

- Fetch Changes without Merging:

  ```bash
  git fetch origin
  ```

## 7. Stashing

- Stash Changes:

  ```bash
  git stash
  ```

- List Stashes:

  ```bash
  git stash list
  ```

- Apply Stash:

  ```bash
  git stash apply
  ```

- Apply and Drop Stash:

  ```bash
  git stash pop
  ```

## 8. GitHub Basics

- Create Repository:
  - Go to GitHub, click on "New," and follow the steps.

- Push an Existing Repo to GitHub:

  ```bash
  git remote add origin <repository-url>
  git push -u origin main
  ```

- Forking:
  - Click "Fork" on the GitHub repo page. This creates a copy of the repository in your account.

## 9. Pull Requests

1. Create a Pull Request:
   - Go to the GitHub repo page, select your branch, and click "New pull request."
2. Review and Merge:
   - Assign reviewers, add comments if necessary, and merge when ready.

## 10. Advanced Git Commands

- Revert a Commit:

  ```bash
  git revert <commit-hash>
  ```

- Interactive Rebase:

  ```bash
  git rebase -i <commit-hash>
  ```

- Cherry-pick a Commit:

  ```bash
  git cherry-pick <commit-hash>
  ```

- View Changes Since Last Commit:

  ```bash
  git diff
  ```

## 11. Tips and Best Practices

- Write Clear Commit Messages: Summarise changes and include details when necessary.
- Avoid Committing Large Files: Use `.gitignore` for files that don’t need to be tracked.
- Branch Often: Use branches for new features, bug fixes, or experiments.
- Pull Regularly: Sync with the main branch frequently to avoid merge conflicts.
- Squash Commits Before Merging: Combine small commits to keep history clean.

This guide should cover most basic and intermediate tasks you'll encounter with Git and GitHub. For more complex workflows or help with specific commands, refer to the [Git documentation](https://git-scm.com/doc).

## Read more

- [git workflows](fleeting_inbox/git%20workflows.md) - personal note
- [youtube.com/video](https://www.youtube.com/watch?v=S7XpTAnSDL4) - "Git & Github tutorial | Visualised git course for beginner & professional developers in 2024" by JavaScript Mastery
- [youtube.com/video](https://www.youtube.com/watch?v=8JJ101D3knE) - "Git tutorial for beginners: Learn git in 1 hour" by Programming with Mosh
- [git-scm.com/documentation](https://git-scm.com/doc) - "Official Git documentation"
