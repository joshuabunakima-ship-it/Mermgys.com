# Meri MGYS Cleaning Services

High-conversion static website for the DFW cleaning business. No build step is required.

Production domain: `merimgys.com`

## Local preview

```bash
npx serve .
```

## Deployment

Import this directory into Vercel or deploy it as a static project. The production domain should be connected only after the preview is verified.

## Before launch

- Confirm the public-facing business name spelling.
- Add a business phone number if calls/texts are supported.
- Confirm whether the company is insured, bonded, background-checks staff, or offers a satisfaction guarantee before adding those claims.
- Add real customer reviews only with permission and a verifiable source.
- Add service cities or ZIP codes after confirming the actual travel area.

## Customer reviews

The **Rate Us** button opens the published Google Form. The form collects a customer name, email, 1–5 star rating, written review, and the cleaner's name.

Before publishing a response, confirm the email belongs to a real customer and remove the email from anything shown publicly. Add approved reviews to `reviews.json`:

```json
[
  {
    "name": "Customer first name",
    "rating": 5,
    "review": "The verified review text.",
    "cleaner": "Grace"
  }
]
```
