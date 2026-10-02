# Docs screenshots

Real screenshots for the docs live here and are served under `/docs/screenshots/<name>.png`
(the site `base` is `/docs`). Reference one from an `.mdx` page by turning its scaffold
placeholder into a real image:

```mdx
<Frame
  src="/docs/screenshots/pr-comment.png"
  alt="A BattleTest review comment on a GitHub pull request"
  caption="A real BattleTest review comment on a pull request."
/>
```

Any page still using `<Frame placeholder caption="..." />` is an unfilled slot — the caption
describes exactly what to capture.

## Slots awaiting a real capture

| Suggested filename | Page | What to capture |
|---|---|---|
| `pr-comment.png` | index.mdx, tutorials/quick-start.mdx | A posted BattleTest PR review comment on a real pull request |
| `status-check.png` | how-to/require-security-review.mdx | GitHub merge box with the `BattleTest Security Review` required check |
| `github-app-install.png` | how-to/connect-github.mdx | GitHub App install page, repository selection |
| `findings-list.png` | how-to/manage-findings.mdx | Run detail page findings list with dismiss/resolve controls |
| `notifications-settings.png` | how-to/configure-notifications.mdx | Settings → Notifications toggle grid |
| `byo-model.png` | how-to/bring-your-own-key.mdx | Settings → Usage → Bring your own model form |
| `environment-domains.png` | how-to/adding-a-target.mdx | Environment view with hostnames and DNS verification status |
| `export-report.png` | how-to/export-findings.mdx | Export control with PDF / JSON choice |
