# sample-nestjs

## 開発環境

### Project setup on Docker

1. 環境変数を追加（.env.temp参照）
2. 以下のコマンドを実行

```bash
$ docker-compose watch
```

以下にアクセスするとDBから取得した値が返ってくる
http://localhost:8081/user?id=1

### dbの初期値を入れ直したい場合

```bash
$ docker-compose down -v
$ docker-compose watch
```

### スキーマを更新したい場合

```bash
$ pnpm migrate
```

## ビルド環境

以下のように修正

```docker-compose.yml
  app:
    networks:
      - nestjs-api
    container_name: app
    build:
      context: . # コンテキストを指定
+      dockerfile: ./Dockerfile
-      dockerfile: ./Dockerfile.dev # Dockerfile.devを指定
    ports:
      - 8081:8080
    depends_on:
      postgres:
        condition: service_healthy
-    develop:
-      watch:
-        - action: sync
-          path: ./
-          target: /app/
-        - action: rebuild
-          path: ./package.json
    env_file:
      - .env.local
    restart: always
```

### nestjsとdrizzle　とpostgresの統合に今回使用したライブラリ

https://github.com/knaadh/nestjs-drizzle/blob/main/packages/postgres-js/README.md
