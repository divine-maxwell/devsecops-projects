# 02 — IaC Security (Terraform + Checkov)

- Terraform module: `modules/s3-logs` (versioning, SSE, public access block)
- Environment: `envs/dev` (fmt/validate only; no apply)
- CI: Terraform fmt/validate + Checkov (SARIF → Security tab)

## How to run locally
```bash
terraform -chdir=02-iac-security fmt -recursive
terraform -chdir=02-iac-security/envs/dev init -backend=false
terraform -chdir=02-iac-security/envs/dev validate -no-color

