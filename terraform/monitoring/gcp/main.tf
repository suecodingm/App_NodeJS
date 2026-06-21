terraform {
  required_providers {
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.0"
    }
  }
}

provider "helm" {
  kubernetes {
    config_path = "/home/kubeconfig_gcp.yaml"
  }
}

resource "helm_release" "prometheus_stack" {

  name             = "prometheus"
  repository       = "https://prometheus-community.github.io/helm-charts"
  chart            = "kube-prometheus-stack"

  namespace        = "monitoring"
  create_namespace = true

  atomic          = true
  cleanup_on_fail = true

  values = [
    file("${path.module}/values-monitoring.yaml")
  ]
}
