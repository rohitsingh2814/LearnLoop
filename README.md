## 👥 Team Collaboration and Git Workflow

LearnLoop is developed by five collaborators using Git and GitHub. Each member has a dedicated remote branch named after them. All development happens on these individual branches, and changes are merged into `main` only through Pull Requests.

### 1. Branch Structure

```text
LearnLoop
│
├── main
├── member-1
├── member-2
├── member-3
├── member-4
└── member-5
```

Replace `member-1` through `member-5` with the actual GitHub usernames or agreed-upon names of your five team members.

**Rules:**
- `main` contains the stable project code.
- Each member works on their own permanent branch.
- Never push directly to `main`.
- Merge changes into `main` only through an approved Pull Request.
- Keep your local `main` synchronized with GitHub.
- Do not push your changes to another member's branch.

### 2. Repository Owner — Initial Setup

The repository owner should:

1. Create the LearnLoop repository on GitHub.
2. Push the initial project files to `main`.
3. Invite the other four members through repository settings.
4. Create one permanent branch for each member.
5. Protect `main` by requiring Pull Requests before merging.

Create the member branches from the latest `main`:

```bash
git switch main
git pull --ff-only origin main

git branch member-1
git branch member-2
git branch member-3
git branch member-4
git branch member-5

git push origin member-1
git push origin member-2
git push origin member-3
git push origin member-4
git push origin member-5
```

Replace the example branch names with your agreed-upon member names.

### 3. Every Member — Clone the Repository

Each collaborator runs these commands once:

```bash
git clone <YOUR_REPOSITORY_URL>
cd LearnLoop
git switch main
git pull --ff-only origin main
```

Configure your Git identity:

```bash
git config user.name "Your Name"
git config user.email "your-email@example.com"
```

### 4. Switch to Your Own Branch

For example, Member 1 should run:

```bash
git fetch origin
git switch --track origin/member-1
```

If the local branch already exists, use:

```bash
git switch member-1
```

Other members should switch to their respective branches.

Verify your current branch:

```bash
git branch --show-current
```

### 5. Work and Commit Changes

Make your changes on your own branch.

```bash
git status
git add .
git commit -m "Add login functionality"
```

Commit messages should describe the changes made. You can make multiple commits while working.

### 6. Push Changes to Your Own Remote Branch

The first push can be performed with:

```bash
git push -u origin member-1
```

After upstream tracking is established, use:

```bash
git push
```

Each member must replace `member-1` with their own branch name.

Your commits will appear on your remote branch on GitHub. They will **not automatically be added to `main`**.

### 7. Keep Your Local `main` Updated

Before beginning a new task, synchronize your local `main`:

```bash
git switch main
git pull --ff-only origin main
```

Return to your permanent member branch:

```bash
git switch member-1
```

Bring the latest changes from `main` into your branch:

```bash
git fetch origin
git merge origin/main
```

Resolve conflicts if necessary, test the project, and push your branch:

```bash
git push
```

This keeps your branch updated without pushing directly to `main`.

### 8. Create a Pull Request

When your changes are ready:

1. Push your member branch to GitHub.
2. Open the LearnLoop repository.
3. Select **Pull requests → New pull request**.
4. Set the base branch to `main`.
5. Set the compare branch to your member branch.
6. Describe your changes and testing.
7. Request a review from another member.
8. Merge the PR after the required review and checks pass.

Example:

```text
Base branch:    main
Compare branch: member-1
```

Only the approved Pull Request should merge changes into `main`.

### 9. After Your Pull Request Is Merged

Update your local `main`:

```bash
git switch main
git pull --ff-only origin main
```

Return to your permanent member branch:

```bash
git switch member-1
```

Synchronize it with the newly updated `main`:

```bash
git merge origin/main
git push
```

Repeat the process whenever you need to incorporate newer changes from `main`.

### 10. Daily Workflow Summary

**Start working:**

```bash
git switch main
git pull --ff-only origin main
git switch member-1
git fetch origin
git merge origin/main
```

**Save and publish your work:**

```bash
git add .
git commit -m "Describe your changes"
git push
```

**Submit your changes:**

Create a Pull Request from `member-1` into `main`, obtain the required approval, and merge it.

**After merging:**

```bash
git switch main
git pull --ff-only origin main
git switch member-1
git merge origin/main
git push
```

Replace `member-1` with your own branch name in all relevant commands.

### 11. Important Team Rules

1. Every member works on their own permanent branch.
2. Do not create `feature/` branches for routine work under this workflow.
3. Never commit or push directly to `main`.
4. Always synchronize local `main` before starting a new task.
5. Push commits to your own remote branch regularly.
6. Open a Pull Request whenever you want to merge work into `main`.
7. Review code and resolve conflicts before merging.
8. Never force-push to shared branches.
9. Never commit `.env` files, passwords, or API keys.
10. Keep the project tested and the `main` branch stable.

**Remember:** One repository, five permanent member branches, one protected `main` branch, and Pull Requests for every merge into `main`.