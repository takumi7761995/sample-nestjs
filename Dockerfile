# Dockerfile
FROM node:18.20.2-alpine AS base

# 必要なパッケージをインストール
FROM base AS builder
RUN apk add --no-cache libc6-compat bash
RUN apk update
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN yarn global add pnpm@8.9.0 && pnpm i

# ソースコードをコピー
COPY . .
# ビルドファイル作成
CMD pnpm build

# 本番環境
FROM base AS runner
RUN apk add --no-cache libc6-compat bash
RUN yarn global add pnpm@8.9.0
WORKDIR /app

COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
# CMD ls -l

ENV NODE_ENV=production
CMD pnpm start:prod
