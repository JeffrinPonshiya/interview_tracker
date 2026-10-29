# Prepstead - Interview Preparation Tracker

A Web Technology project using React, Express, Node.js and MongoDB. Each role has exactly **10 sidebar items**. The project focuses on interview tracking, study planning, coding practice and progress.

## Student workspace

| Item            | Route               | Purpose                                                                           |
| --------------- | ------------------- | --------------------------------------------------------------------------------- |
| Dashboard       | /student            | Preparation totals, goals, recent activity, announcements and interview schedules |
| My interviews   | /student/interviews | Track company, position, interview date and stage                                 |
| Coding problems | /student/problems   | Save problems, difficulty, status and practice notes                              |
| Study planner   | /student/planner    | Plan tasks and record completion and study minutes                                |
| Goals           | /student/goals      | Set daily or weekly preparation targets                                           |
| Personal notes  | /student/notes      | Save notes by topic and company                                                   |
| Question bank   | /student/questions  | Read published practice questions and explanations                                |
| Study resources | /student/resources  | Browse published learning links                                                   |
| My progress     | /student/analytics  | Completion percentages, topic progress and recent activity                        |
| My account      | /student/account    | Update profile and manage password and sessions                                   |

## Admin workspace

Dashboard, Students, Companies, Question bank, Study resources, Announcements, Interview schedules, Student progress, Audit log and My account.

Admins maintain shared content and student access. Students see announcements and their assigned interview schedules on the dashboard, without additional sidebar pages. Private preparation records belong to their student owner. Progress is calculated from saved records.

## Run locally in PowerShell

Use Node.js 22.12+ and npm. Install dependencies once:

```powershell
cd D:\interview_tracker
npm.cmd install
npm.cmd run setup:dev
```

Terminal 1 - start MongoDB and leave it running:

```powershell
npm.cmd run dev:db
```

Terminal 2 - start the frontend and backend:

```powershell
npm.cmd run dev
```

Open **http://127.0.0.1:5173**. The backend allows this exact origin by default; localhost is a different origin. API health: http://127.0.0.1:4000/api/v1/health.

Register a student in the app. Create an admin using your own credentials:

```powershell
npm.cmd run setup:admin
```

## Show the database in MongoDB Compass

Choose Add New Connection and paste:

```text
mongodb://127.0.0.1:27017/interview_tracker?replicaSet=ipt-dev
```

Connect, expand interview_tracker, select a collection and open Documents. Register a student, add a planner task or note through the app, then refresh Compass to demonstrate persistence. Keep the database terminal open. Data persists under backend/.data/mongo.

There are 10 navigation items per role, not 10 collections. MongoDB also stores authentication, profiles, activity and reference data. See [the data model](docs/DATA_MODEL.md) for the active collections.

## Reduced scope

Timed assessments, attempt evaluation, mock interviews, notifications, readiness scoring, assignments and milestones are retired. Their API routes are unmounted and their models are no longer registered or initialized. Question forms now contain practice questions and explanations rather than assessment grading fields. Prior implementation files are preserved as non-executable text in archive/extended-scope.

Existing MongoDB records and collections are preserved. Old collections can still appear in Compass; the application no longer uses the retired ones. No database reset or data deletion is required.

## Checks

```powershell
npm.cmd run lint
npm.cmd test
npm.cmd run build
npm.cmd run test:browser
```

Browser checks use an isolated MongoDB replica set and temporary accounts. Google Chrome must be installed. Account recovery additionally requires SMTP configuration in backend/.env; see backend/.env.example.

[API](docs/API.md) - [Data model](docs/DATA_MODEL.md) - [Architecture](docs/ARCHITECTURE.md) - [Workflows](docs/WORKFLOWS.md) - [Verification](docs/VERIFICATION.md)
