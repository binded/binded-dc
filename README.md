Shared development `docker-compose.yml` file for Blockai services.

## Usage

If you have a docker-compose.yml, replace

```yaml
minio:
  image: minio/minio
  ports:
    - "9000:9000"

postgres:
  image: postgres:9.5
  ports:
    - "5432:5432"

redis:
  image: redis:3.0.7-alpine
  ports:
    - "6379:6379"

app:
  image: someapp
  links:
    - db
    - redis
    - minio
```

with:

```yaml
app:
  image: someapp
  external_links:
    - blockai_postgres_1:postgres
    - blockai_redis_1:redis
    - blockai_minio_1:minio
  links:
    - db
```

You need to make sure to run `blockai-dc` before launching your own
`docker-compose.yml`, e.g., in package.json:

```json
{
  "name": "someapp",
  "scripts": {
    "docker": "blockai-dc && docker-compose up -d"
  },
  "devDependencies": {
    "blockai-dc": "^1.0.0"
  }
}
```

```bash
npm run docker
```