Demo Terraform module (S3 logs bucket) scanned in CI with **Checkov**.
This code is **not applied**; CI runs `terraform fmt -check`, `terraform validate`,
and uploads Checkov results to the Security tab (SARIF).
- Module: `modules/s3-logs` (versioning, SSE, public access block)
- Env: `envs/dev`
