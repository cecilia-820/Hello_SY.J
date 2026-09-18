# Hello, SY.J — personal site of Seoyeong Jang

Academic homepage built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme (v0.16.3) with a custom single-page home layout.

## Home page structure

The home page (`_pages/about.md`, layout `_layouts/home.liquid`, styles `_sass/_home.scss`) follows this order:

1. **Hero** — "Hello, I'm Seoyeong Jang" with responsive **CV** / **Email** buttons (top-right on desktop, full-width row on phones).
2. **Video stage** — a 16:9 video with four orbit badges around it.
3. **Research cards** — two cards (title + figure + bullets) for the main M.S. research and the sub-project.
4. **Process & strengths** — the idea-to-silicon flow and four appeal points.
5. **Education bar** — horizontal timeline (vertical on phones).
6. **Projects album** — card grid pulled from `_projects/` with `category: project`.
7. **Beyond the lab** — image tiles from `_data/extras.yml`.

Everything in the sections above is data-driven from the front matter of `_pages/about.md`; edit the YAML there to change text, badges or links.

## Where to put your own media

| What               | Where                         | Notes                                                                                                 |
| ------------------ | ----------------------------- | ----------------------------------------------------------------------------------------------------- |
| Intro video        | `assets/video/intro.mp4`      | Picked up automatically. Alternatively set `video.embed` in `_pages/about.md` to a YouTube embed URL. |
| Video poster       | `assets/img/video-poster.svg` | Replace with a JPG/PNG and update `video.poster`.                                                     |
| Research figures   | `assets/img/research/*.svg`   | Placeholder block diagrams; swap for real figures (keep the paths or update `research[].img`).        |
| Project thumbnails | `assets/img/projects/*.svg`   | Referenced by `img:` in each `_projects/*.md`.                                                        |
| Extra tiles        | `assets/img/extras/*.svg`     | Referenced by `img:` in `_data/extras.yml`.                                                           |
| CV PDF             | `assets/pdf/cv.pdf`           | Linked from the CV button, the CV page and the contact icons.                                         |

The CV page (`/cv/`) is generated from `_data/cv.yml`; publications come from `_bibliography/papers.bib`.

## Local development

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000/Hello_SY.J/
```

## Deployment

`.github/workflows/deploy.yml` builds the site on every push to `main`/`master` and publishes it to the `gh-pages` branch.
In the repository settings, set **Pages → Source** to the `gh-pages` branch. The site is served at `https://cecilia-820.github.io/Hello_SY.J/` (`url` and `baseurl` in `_config.yml`).
