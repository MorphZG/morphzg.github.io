---
date: 2024-11-06
source: web
status: useful
tags:
  - devops
  - coding
  - software
title: Git and GitHub Reference
type: reference
URL:
---

# Git and GitHub Reference

## Table of Contents
- [[#Git Basics]]
- [[#Configuring Git]]
- [[#Working with Repositories]]
- [[#Branching and Merging]]
- [[#Staging and Committing]]
- [[#Undoing Changes]]
- [[#Working with Remotes]]
- [[#GitHub Collaboration]]
- [[#Common Git Commands]]
- [[#Tips and Best Practices]]
- [[#Read more]]

---

## Git Basics
Git is a distributed version control system that tracks changes in your code.

### Key Concepts
- **Repository (Repo):** A project managed by Git.
- **Commit:** A snapshot of changes.
- **Branch:** A separate line of development.
- **Merge:** Combining branches.
- **Remote:** Repositories stored on another server (e.g., GitHub).
- **Clone:** A local copy of a remote repository.

---

## Configuring Git

```bash
# Set global username and email
$ git config --global user.name "Your Name"
$ git config --global user.email "you@example.com"

# Check current configuration
$ git config --list

# Set default editor
$ git config --global core.editor "code --wait"
```

---

## Working with Repositories

```bash
# Initialize a new repository
$ git init

# Clone an existing repository
$ git clone <repository-url>

# Check repository status
$ git status
```

---

## Branching and Merging

```bash
# List branches
$ git branch

# Create a new branch
$ git branch <branch-name>

# Switch to a branch
$ git checkout <branch-name>

# Create and switch to a branch
$ git checkout -b <branch-name>

# Merge a branch into the current branch
$ git merge <branch-name>

# Delete a branch
$ git branch -d <branch-name>
```

---

## Staging and Committing

```bash
# Stage files for commit
$ git add <file>

# Stage all files
$ git add .

# Commit changes
$ git commit -m "Commit message"

# Amend the last commit
$ git commit --amend
```

---

## Undoing Changes

```bash
# Unstage files
$ git reset <file>

# Undo last commit (keep changes unstaged)
$ git reset --soft HEAD~1

# Undo last commit (discard changes)
$ git reset --hard HEAD~1

# Revert a specific commit
$ git revert <commit-hash>
```

---

## Working with Remotes

```bash
# Add a remote
$ git remote add origin <url>

# List remotes
$ git remote -v

# Push changes to remote
$ git push origin <branch-name>

# Pull changes from remote
$ git pull origin <branch-name>
```

---

## GitHub Collaboration

```bash
# Fork a repository (done on GitHub UI)

# Create a pull request (done on GitHub UI)

# Fetch and merge changes from the main branch
$ git fetch upstream
$ git merge upstream/main

# Rebase from main
$ git rebase main
```

---

## Common Git Commands

| Command                            | Description                                   |
|------------------------------------|-----------------------------------------------|
| `git log`                          | Show commit history                           |
| `git diff`                         | Show changes between commits                  |
| `git stash`                        | Temporarily save changes                      |
| `git stash pop`                    | Apply stashed changes                         |
| `git tag`                          | Create a tag for a specific commit            |
| `git blame <file>`                 | Show who last modified each line              |
| `git show <commit-hash>`           | Show details of a specific commit             |
| `git reflog`                       | View the reference log of changes             |
| `git cherry-pick <commit-hash>`    | Apply a specific commit to the current branch |

---

## Tips and Best Practices

- Write Clear Commit Messages: Summarise changes and include details when necessary.
- Avoid Committing Large Files: Use `.gitignore` for files that don’t need to be tracked.
- Branch Often: Use branches for new features, bug fixes, or experiments.
- Pull Regularly: Sync with the main branch frequently to avoid merge conflicts. Always pull the latest changes before pushing.
- Squash Commits Before Merging: Combine small commits to keep history clean.
- Use `.gitignore` to exclude files from being tracked.

## Read more

- [[00_Fleeting_inbox/git workflows|git workflows]] - personal note
- [git-scm.com/documentation](https://git-scm.com/doc) - Official Git documentation
- [youtube.com/video](https://www.youtube.com/watch?v=S7XpTAnSDL4) - "Git & Github tutorial | Visualised git course for beginner & professional developers in 2024" by JavaScript Mastery
- [youtube.com/video](https://www.youtube.com/watch?v=8JJ101D3knE) - "Git tutorial for beginners: Learn git in 1 hour" by Programming with Mosh
