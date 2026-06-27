# Yuzhang Liu — Next.js Portfolio

A complete personal portfolio website built with Next.js and ready to deploy on Vercel.

## 1. Run Locally

Node.js 20.9 or later is required.

```bash
npm install
npm run dev
```

Open the following address in your browser:

```text
http://localhost:3000
```

## 2. Required Updates Before Publishing

Open:

```text
src/data/portfolio.ts
```

Update the following information:

* `email`
* `linkedin`
* `github`
* Experience dates and job titles
* Project descriptions and results

Most of the website content is stored in this file, so future content updates can be made without changing the page structure.

## 3. Project Structure

```text
src/app/page.tsx                  Homepage
src/app/resume/page.tsx           Printable online résumé
src/app/projects/[slug]/page.tsx  Project detail pages
src/data/portfolio.ts             Personal information and project data
src/app/globals.css               Global website styles
```

## 4. Deploy to Vercel

### Option A: GitHub + Vercel — Recommended

1. Create a new repository on GitHub.
2. Upload this project to the repository:

```bash
git init
git add .
git commit -m "Create portfolio website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

3. Log in to Vercel.
4. Select **Add New → Project**.
5. Import the GitHub repository.
6. Click **Deploy**.

After the GitHub repository is connected to Vercel, every new push to the production branch will automatically trigger a new deployment.

### Option B: Vercel CLI

Install the Vercel CLI and deploy the project directly:

```bash
npm install -g vercel
vercel --prod
```

## 5. Save the Résumé as a PDF

Visit:

```text
/resume
```

Click **Print / Save as PDF** to export the online résumé as a PDF through your browser.

