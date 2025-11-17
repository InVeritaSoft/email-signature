# GitHub Workflows Configuration

This directory contains GitHub Actions workflows configured for different remotes.

## Repository-Specific Workflows

- **`origin-workflow.yml`**: Runs on `InVeritaSoft/email-signature-generator` (origin remote)
  - Triggers: Push/PR to main or develop branches
  - Actions: Install, test, and build

- **`deploy-policies.yml`**: Runs on `InVeritaSoft/email-signature-generator` (origin remote)
  - Triggers: Push to main/master/extension branches (when policies/** change) or manual dispatch
  - Actions: Deploy Privacy Policies to GitHub Pages from `policies/` directory

- **`hosting-workflow.yml`**: Runs on `InVeritaSoft/email-signature` (hosting remote)
  - Triggers: Push to main branch or manual dispatch
  - Actions: Build Angular application and deploy `dist/signature/browser` to GitHub Pages (serves index.html)

## How It Works

Each workflow uses a conditional check:
```yaml
if: github.repository == 'InVeritaSoft/email-signature-generator'
```

This ensures workflows only execute on their intended repository, even if the same workflow files exist in both remotes.

## Pushing to Remotes

When you push to either remote:
- `git push origin main` → Triggers origin-workflow.yml and deploy-policies.yml on email-signature-generator repo
- `git push hosting main` → Triggers hosting-workflow.yml on email-signature repo (builds Angular and deploys to GitHub Pages)

Both workflow files can exist in your local repo and will be pushed to both remotes, but each will only run on its designated repository.
