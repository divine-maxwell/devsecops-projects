![CI Status](https://github.com/divine-maxwell/devsecops-projects/actions/workflows/ci-node.yml/badge.svg)

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
- ✅ Build & smoke tests (Node 20)
- ✅ ESLint (fails on lint errors)
- ✅ Gitleaks (secrets) — enforced
- ✅ Trivy FS (deps) — **fail on HIGH/CRITICAL**
- ✅ Trivy Image — warn-only (documented)
- ✅ Grype Image — warn-only (SARIF → Security tab)
- ✅ Syft SBOM (artifact on each run)
- ✅ Terraform + Checkov (IaC) — warn-only (SARIF)
