# sample-nestjs

## Project setup on Docker

```bash
$ docker-compose up --build
```

### dbの初期値を入れ直したい場合

```bash
$ docker-compose down -v
$ docker-compose up --build
```

### スキーマを更新したい場合

```bash
$ pnpm migrate
```

### nestjsとdrizzle　とpostgresの統合に今回使用したライブラリ

https://github.com/knaadh/nestjs-drizzle/blob/main/packages/postgres-js/README.md
