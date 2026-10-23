# COESENTIA

Two intelligences. A shared future.

A responsive editorial website adapted from the supplied COESENTIA protopage. Ivory, black and copper, intertwined C identity, original reference artwork, and the Explore / Watch / Listen / About navigation are preserved.

## Structure

Buildless HTML, CSS and JavaScript. All paths are relative, so the site works under `/coesentia/` on GitHub Pages. No npm packages, server, API keys or build step are required. Serve this directory with any static HTTP server to preview.

- `index.html`: homepage, development notes, newsletter and About
- `styles.css`: responsive desktop and mobile layouts
- `app.js`: accessible native dialogs and newsletter configuration
- `config.js`: public hosted newsletter form URL only
- `privacy.html`: current data handling notice
- `mark.svg`: intertwined C mark interpreted from the supplied reference
- `reference.jpeg`: supplied original artwork; CSS frames its hero and three editorial images

The artwork is drawn from the supplied composite reference, not higher-resolution production originals. Replace with source exports when those become available. Reference ownership and usage rights remain with their respective owner; no open-source asset license is asserted.

## Honest launch state

The essays, film and audio series are in development. Cards open descriptive notes, not pretend articles or players. The site collects no email addresses until a genuine hosted signup form is configured. No local-storage mailing list or simulated success message is used.

## GitHub Pages

Keep this repository separate from RoadSocial. In this repository only, open Settings → Pages → Deploy from a branch → main → / (root), then Save. The intended project URL is `https://roadsocialme.github.io/coesentia/`. Verify the published page and its assets before describing it as live. The private draft and launch notes should not be uploaded here.

## Activate the newsletter

1. Use a project-owned account with a free newsletter provider, such as Brevo. Verify the owner and sender information as requested by the provider. Avoid reusing a RoadSocial contact list.
2. Create a separate COESENTIA list and hosted signup form with explicit consent and double opt-in. Provide the real operator identity, privacy contact, sender details and unsubscribe handling in the provider settings.
3. Update `privacy.html` to identify that provider and the real project operator/contact before opening signup. Do not invent those details.
4. Put the provider's public HTTPS signup page in `newsletterUrl` in `config.js`. Never use the dashboard URL or an API key. The homepage then shows a real link to the hosted signup page. A hosted form is intentional: it avoids exposing secrets on GitHub Pages and lets the provider manage validation and confirmation.
5. Test with an email address owned by the project operator: submit consent, receive confirmation, confirm, verify list membership, and test unsubscribe. Do not claim a working newsletter until the full flow has passed.

Brevo's free plan currently lists 300 email sends per day. Recheck current terms and limits before choosing an account: https://help.brevo.com/hc/en-us/articles/208580669-FAQs-What-are-the-limits-of-the-Free-plan

## Accessibility and maintenance

Semantic landmarks, descriptive image alternatives, keyboard focus indicators, reduced-motion support, skip navigation and native modal keyboard handling are included. No analytics or third-party font requests are used. Publish new content by replacing the corresponding development note with a real page or release link. Keep labels accurate as the project evolves.
