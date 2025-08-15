# 01 — Secure CI for a Node.js API

Beginner DevSecOps project: tiny Node.js API with a secure CI pipeline (secrets scan, dependency scan, container scan, SBOM, and PR checks).

## Tech
- Node.js + Express
- GitHub Actions (CI)
- Upcoming: Gitleaks (secrets), Trivy (vulns & image), Syft (SBOM), Code scanning

## Run locally
```bash
npm install
npm start
# visit http://localhost:3000/health
```

## Test (smoke)
```bash
npm test
```
