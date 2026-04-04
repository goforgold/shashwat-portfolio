"use client";

import { useState } from "react";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const S = "https://cdn.simpleicons.org";

// Icons that are dark/black and need inverting in dark mode
const darkIcons = new Set([
  "Next.js",
  "Ansible",
  "Shell",
  "CircleCI",
  "Pandas",
  "AWS",
  "AWS Glue",
  "Backstage",
]);

const icons: Record<string, string> = {
  "C#": `${D}/csharp/csharp-original.svg`,
  Java: `${D}/java/java-original.svg`,
  "Node.js": `${D}/nodejs/nodejs-original.svg`,
  Python: `${D}/python/python-original.svg`,
  Shell: `${D}/bash/bash-original.svg`,
  JavaScript: `${D}/javascript/javascript-original.svg`,
  AWS: `${D}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  Azure: `${D}/azure/azure-original.svg`,
  GCP: `${D}/googlecloud/googlecloud-original.svg`,
  Kubernetes: `${D}/kubernetes/kubernetes-original.svg`,
  Docker: `${D}/docker/docker-original.svg`,
  Terraform: `${D}/terraform/terraform-original.svg`,
  Ansible: `${D}/ansible/ansible-original.svg`,
  "Spring Boot": `${D}/spring/spring-original.svg`,
  ".NET Core": `${D}/dotnetcore/dotnetcore-original.svg`,
  React: `${D}/react/react-original.svg`,
  "Next.js": `${D}/nextjs/nextjs-original.svg`,
  "AWS Glue": `${D}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  Airflow: `${D}/apacheairflow/apacheairflow-original.svg`,
  Snowflake: `${S}/snowflake`,
  PySpark: `${D}/apachespark/apachespark-original.svg`,
  Pandas: `${D}/pandas/pandas-original.svg`,
  PostgreSQL: `${D}/postgresql/postgresql-original.svg`,
  "SQL Server": `${D}/microsoftsqlserver/microsoftsqlserver-original.svg`,
  MySQL: `${D}/mysql/mysql-original.svg`,
  MongoDB: `${D}/mongodb/mongodb-original.svg`,
  Jenkins: `${D}/jenkins/jenkins-original.svg`,
  Bazel: `${D}/bazel/bazel-original.svg`,
  CircleCI: `${D}/circleci/circleci-plain.svg`,
  ArgoCD: `${D}/argocd/argocd-original.svg`,
  Backstage: `${S}/backstage`,
};

export function SkillIcon({ name }: { name: string }) {
  const [show, setShow] = useState(true);
  const url = icons[name];

  if (!url || !show) return null;

  return (
    <img
      src={url}
      alt=""
      className={`h-3.5 w-3.5 ${darkIcons.has(name) ? "dark:invert" : ""}`}
      onError={() => setShow(false)}
      loading="lazy"
    />
  );
}
