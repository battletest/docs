// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import starlightLlmsTxt from 'starlight-llms-txt';

// The docs are served under battletest.dev/docs, so Astro builds every route
// under that base. `site` makes canonical URLs, the sitemap and OG tags absolute.
export default defineConfig({
	site: 'https://battletest.dev',
	base: '/docs',
	trailingSlash: 'ignore',
	integrations: [
		starlight({
			title: 'BattleTest',
			description:
				'BattleTest reviews every pull request for CVEs, secrets and AI-detected vulnerabilities, and runs autonomous live security testing.',
			plugins: [
				starlightThemeRapide(),
				// Exposes /docs/llms.txt and /docs/llms-full.txt for AI tools to consume.
				starlightLlmsTxt({
					projectName: 'BattleTest',
					description:
						'Automated PR security review and autonomous live security testing.',
				}),
			],
			customCss: ['./src/styles/brand.css'],
			// Dark-only, matching the marketing site: force the theme and drop the toggle.
			components: {
				ThemeProvider: './src/components/overrides/ThemeProvider.astro',
				ThemeSelect: './src/components/overrides/ThemeSelect.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/digitaldrreamer/battletest' },
			],
			editLink: {
				baseUrl: 'https://github.com/digitaldrreamer/battletest/edit/main/docs-site/',
			},
			lastUpdated: true,
			sidebar: [
				{
					label: 'Get started',
					items: [
						{ label: 'Introduction', slug: '' },
						{ slug: 'tutorials/quick-start' },
						{ slug: 'tutorials/live-battletest' },
					],
				},
				{
					label: 'Concepts',
					items: [
						{ slug: 'concepts/what-is-battletest' },
						{ slug: 'concepts/how-it-works' },
						{ slug: 'concepts/how-pr-review-works' },
						{ slug: 'concepts/live-battletest-overview' },
						{ slug: 'concepts/findings' },
						{ slug: 'concepts/risk-score' },
					],
				},
				{
					label: 'How-to guides',
					items: [
						{ slug: 'how-to/connect-github' },
						{ slug: 'how-to/connect-gitlab' },
						{ slug: 'how-to/pr-settings' },
						{ slug: 'how-to/bring-your-own-key' },
						{ slug: 'how-to/require-security-review' },
						{ slug: 'how-to/exposed-secrets' },
						{ slug: 'how-to/adding-a-target' },
						{ slug: 'how-to/out-of-band-testing' },
						{ slug: 'how-to/manage-findings' },
						{ slug: 'how-to/export-findings' },
						{ slug: 'how-to/configure-notifications' },
						{ slug: 'how-to/troubleshooting' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ slug: 'reference/pr-findings' },
						{ slug: 'reference/scan-results' },
						{ slug: 'reference/limits-and-quotas' },
						{ slug: 'reference/soft-limits' },
						{ slug: 'reference/github-app' },
						{ slug: 'reference/notification-events' },
						{ slug: 'reference/network-and-egress' },
						{ slug: 'reference/security-and-data' },
						{
							label: 'Provider adapters',
							items: [
								{ slug: 'reference/adapters/github-scm' },
								{ slug: 'reference/adapters/gitlab-scm' },
								{ slug: 'reference/adapters/go-scm-gateway' },
								{ slug: 'reference/adapters/oidc-identity' },
								{ slug: 'reference/adapters/openai-chat' },
								{ slug: 'reference/adapters/openai-embeddings' },
								{ slug: 'reference/adapters/openai-vision' },
								{ slug: 'reference/adapters/smtp-mail' },
							],
						},
					],
				},
				{
					label: 'Using AI',
					items: [{ slug: 'using-ai/ai-assistant' }, { slug: 'using-ai/docs-mcp' }],
				},
				{
					label: 'API',
					items: [{ slug: 'api-reference/overview' }],
				},
			],
		}),
	],
	vite: {
		resolve: {
			alias: {
				'@mintlify': fileURLToPath(new URL('./src/components/mintlify/index.ts', import.meta.url)),
			},
		},
	},
});
