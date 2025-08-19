terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}
provider "aws" {
  source      = "../../modules/s3-logs"
 bucket_name = "devsecops-demo-logs-example-dev"
}
