# LearnLoop – Development Setup & Team Collaboration

## 🚀 1. Docker Development Setup (Start Here)

LearnLoop uses Docker to provide a consistent development environment for all team members. The frontend (React + Vite) and backend (Node.js + Express) run in separate containers managed through Docker Compose.

**No need to install Node.js dependencies manually on your local machine. Docker handles the development environment.**

### Prerequisites

Install the following software:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/downloads)
- [VS Code](https://code.visualstudio.com/)
- GitHub account

For Windows, ensure Docker Desktop is configured to use the WSL 2 Linux engine.

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone <YOUR_REPOSITORY_URL>
cd LearnLoop
```

Open the project in VS Code:

```bash
code .
```

### Step 2: Project Structure

```text
LearnLoop/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── server/
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

### Step 3: Client Dockerfile

Location: `client/Dockerfile`

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
```

### Step 4: Server Dockerfile

Location: `server/Dockerfile`

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
```

Make sure the server `package.json` contains:

```json
{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  }
}
```

Install Nodemon if required:

```bash
npm install --save-dev nodemon
```

Replace `server.js` with your actual backend entry-point filename if different.

Your Express application must listen on:

```javascript
app.listen(5000, "0.0.0.0", () => {
    console.log("Server running on port 5000");
});
```

### Step 5: Docker Compose Configuration

Create `docker-compose.yml` in the project root:

```yaml
services:

  client:
    build:
      context: ./client
      dockerfile: Dockerfile

    container_name: learnloop-client

    ports:
      - "5173:5173"

    volumes:
      - ./client:/app
      - /app/node_modules

    depends_on:
      - server

  server:
    build:
      context: ./server
      dockerfile: Dockerfile

    container_name: learnloop-server

    ports:
      - "5000:5000"

    volumes:
      - ./server:/app
      - /app/node_modules

    env_file:
      - ./server/.env

    environment:
      NODE_ENV: development
```

### Step 6: Docker Ignore Files

Create `client/.dockerignore`:

```text
node_modules
dist
.git
.env
```

Create `server/.dockerignore`:

```text
node_modules
.git
.env
npm-debug.log
```

### Step 7: Environment Variables

Create `server/.env` locally:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Create `client/.env` locally:

```env
VITE_API_URL=http://localhost:5000
```

Use the frontend API variable:

```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

**Important:** Never commit `.env` files, passwords, database credentials, or API keys to GitHub.

### Step 8: Start the Project Using Docker

Make sure Docker Desktop is running.

Verify Docker:

```bash
docker version
```

From the LearnLoop root directory, execute:

```bash
docker compose up --build
```

This will:

1. Build the frontend image.
2. Build the backend image.
3. Create both containers.
4. Start the React development server.
5. Start the Node.js development server.

### Access the Application

| Service                   | URL                                            |
| ------------------------- | ---------------------------------------------- |
| React + Vite Frontend     | [http://localhost:5173](http://localhost:5173) |
| Node.js + Express Backend | [http://localhost:5000](http://localhost:5000) |

### Useful Docker Commands

| Command                         | Description                |
| ------------------------------- | -------------------------- |
| `docker compose up`             | Start containers           |
| `docker compose up --build`     | Build and start containers |
| `docker compose up -d`          | Run in background          |
| `docker compose down`           | Stop and remove containers |
| `docker compose ps`             | Check container status     |
| `docker compose logs -f`        | View application logs      |
| `docker compose logs -f server` | View backend logs          |
| `docker compose logs -f client` | View frontend logs         |
| `docker compose restart server` | Restart backend            |
| `docker compose exec server sh` | Enter backend container    |

**Development Benefits:**

- No production build required for the frontend.
- React Vite Hot Module Replacement (HMR).
- Nodemon automatically restarts the backend.
- Changes in local files are reflected inside containers.
- All developers use the same Docker development configuration.

**Note:** Rebuild the images when dependencies or Docker configuration changes. Normal source-code changes do not require rebuilding.

---

## 📚 2. Project Overview

LearnLoop is an adaptive learning platform designed to help students identify their learning gaps, understand their current skill levels, and receive personalized learning recommendations.

The platform aims to provide:

- Personalized learning paths.
- Topic-wise skill analysis.
- Quiz and assessment functionality.
- Learning progress tracking.
- Intelligent recommendations.

## 🛠️ 3. Technology Stack

| Component               | Technology             |
| ----------------------- | ---------------------- |
| Frontend                | React.js, Tailwind CSS |
| Backend                 | Node.js, Express.js    |
| Database                | MongoDB                |
| Development Environment | Docker, Docker Compose |
| Version Control         | Git and GitHub         |
| API Testing             | Postman                |

## 👥 4. Team Collaboration and Git Workflow

LearnLoop is developed by five collaborators using Git and GitHub. Each member has a dedicated remote branch named after them. All development happens on these individual branches, and changes are merged into `main` only through Pull Requests.

### 4.1 Branch Structure

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

### 4.2 Repository Owner – Initial Setup

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

### 4.3 Every Member – Clone the Repository

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

### 4.4 Switch to Your Own Branch

For example, Member 1 should run:

```bash
git fetch origin
git switch --track origin/member-1
```

If the local branch already exists:

```bash
git switch member-1
```

Other members should switch to their respective branches.

Verify your current branch:

```bash
git branch --show-current
```

### 4.5 Work and Commit Changes

Make your changes on your own branch.

```bash
git status
git add .
git commit -m "Add login functionality"
```

Commit messages should describe the changes made. You can make multiple commits while working.

### 4.6 Push Changes to Your Own Remote Branch

The first push can be performed with:

```bash
git push -u origin member-1
```

After upstream tracking is established, use:

```bash
git push
```

Each member must replace `member-1` with their own branch name.

Your commits will appear on your remote branch on GitHub. They will not automatically be added to `main`.

### 4.7 Keep Your Local `main` Updated

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

### 4.8 Create a Pull Request

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

### 4.9 After Your Pull Request Is Merged

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

### 4.10 Daily Workflow Summary

**Start working:**

```bash
git switch main
git pull --ff-only origin main
git switch member-1
git fetch origin
git merge origin/main
```

**Start the development environment:**

```bash
docker compose up
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

### 4.11 Important Team Rules

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

---

## 🐳 5. Docker Troubleshooting

### Docker Engine Not Running

If you encounter:

```text
failed to connect to the docker API
dockerDesktopLinuxEngine
The system cannot find the file specified
```

Solution:

1. Open Docker Desktop.
2. Wait until the Docker Engine starts.
3. Open PowerShell and execute:

```bash
wsl --shutdown
```

4. Restart Docker Desktop.
5. Verify the connection:

```bash
docker version
```

### Port Already in Use

If port `5173` or `5000` is already occupied, stop the conflicting application or change the host port in `docker-compose.yml`.

### Dependency Changes

When a team member adds a new npm dependency, rebuild the relevant image:

```bash
docker compose up --build
```

### Check Running Containers

```bash
docker compose ps
docker compose logs -f
```

---

## 🤝 6. Contribution Guidelines

We welcome contributions from all five team members.

Before submitting changes:

- Follow the established folder structure.
- Use meaningful variable and function names.
- Test your changes locally using Docker.
- Avoid committing unnecessary files.
- Keep environment variables private.
- Write meaningful commit messages.
- Submit changes through Pull Requests.

**Happy Coding! 🚀**

*LearnLoop – Learn what matters next.*
