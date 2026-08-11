# Irish Maths Prep — validation site

Domain: https://irishmathsprep.com

## Cloudflare Pages
- Production branch: `main`
- Framework preset: `None`
- Build command: `exit 0` (or blank)
- Build output directory: `public`

## Before public traffic
1. Create a Cloudflare D1 database (suggested name: `irish-maths-prep-validation`).
2. Run `schema.sql`.
3. Pages project > Settings > Bindings > Add > D1 database binding.
4. Variable name: `DB`.
5. Redeploy.
6. Test email capture and the €9.99 intent button.
7. Route `hello@irishmathsprep.com` to your inbox.
8. Add `irishmathsprep.com` as the Pages custom domain.

The validation backend does not store child name, school, DOB, address, exact location or raw answer history.
