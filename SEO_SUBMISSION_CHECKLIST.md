# Search engine indexing and GEO deployment checklist

The generated canonical URLs currently use `https://www.topenglighting.com/`. Confirm that this is the final public domain before deployment. If the domain differs, replace it in `index.html`, every file under `products/`, `robots.txt`, `sitemap.xml`, `llms.txt` and `llms-full.txt`.

## Files already prepared

- `robots.txt`
- `sitemap.xml`
- `llms.txt` and `llms-full.txt`
- Home-page Organization, WebSite, ItemList and FAQ structured data
- Seven static product pages with Product, BreadcrumbList and FAQ structured data
- English and Arabic content, canonical URLs, hreflang, Open Graph and Twitter metadata

## Submit after the site is online

1. Google Search Console: verify the domain, submit `/sitemap.xml`, inspect the home page and all seven product URLs, then request indexing.
2. Bing Webmaster Tools: verify the domain, import from Google Search Console if preferred, and submit `/sitemap.xml`. Bing data also supports Yahoo search discovery.
3. IndexNow: generate a key in Bing Webmaster Tools, place the key file at the site root, and submit the home page plus seven product URLs.
4. Yandex Webmaster: verify ownership and submit `/sitemap.xml` if target markets require it.
5. Baidu Search Resource Platform: verify ownership and submit URLs if mainland-China discovery is required.
6. Naver Search Advisor: verify and submit the sitemap if Korean visibility is required.

Search-engine verification tokens are account-specific and must not be invented. Add the verification meta tag or verification file supplied by each platform after account setup.

## Final checks

- Return HTTP 200 for every sitemap URL.
- Redirect HTTP and non-preferred host variants to the canonical HTTPS host.
- Keep one preferred host: either `www` or non-`www`.
- Do not block product images, CSS, JavaScript, `llms.txt` or sitemap files.
- Re-submit the sitemap whenever product URLs are added or removed.
- Add real project case studies and buyer questions over time; original, specific content is the strongest long-term SEO and GEO signal.

