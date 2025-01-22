---
title: Amplify SSR
description: Amplify SSR.
date: '2025-01-22'
published: true
---

## Amplify SSR

<https://docs.aws.amazon.com/ko_kr/amplify/latest/userguide/ssr-environment-variables.html>

amplify.yml 파일을 수정합니다.

```bash
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - env | grep -e DB_HOST -e DB_USER -e DB_PASS >> .env.production
        - env | grep -e NEXT_PUBLIC_ >> .env.production
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```
