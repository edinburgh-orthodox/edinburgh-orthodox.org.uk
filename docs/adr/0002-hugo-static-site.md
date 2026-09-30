# The site is a static build in Hugo, published from this repository

The website is a static site built with **Hugo**, and its source lives in this repository
under `edinburgh-orthodox/`. A merge into `main` publishes it: `.github/workflows/pages.yml`
builds the site and deploys the result to GitHub Pages, which will serve
edinburgh-orthodox.org.uk once the domain is moved over (issue #9). Every pull request is
built by `.github/workflows/hugo.yml`, so a broken page or data file cannot be merged.

Why: the WordPress.com site was a paid subscription, and the redesign needed things a
WordPress plan could not give us without new plugins and more upkeep. The content is small:
a handful of pages, a news list, and one week of services. The plan already described every
page as plain HTML and CSS, and that design is now the site's stylesheet. Building it
statically means the whole site is text in this repository, so every change is a reviewable
pull request, the design is one stylesheet, and the hosting costs nothing beyond the domain.

The trade-off we accepted: the people who edit the week no longer log in to a familiar admin
screen. They edit a short list of services and the announcements text, in a file, and
something has to merge it. The WordPress.com subscription also has to keep running until the
domain moves, so for a while there are two sites. And there is no longer a plugin for
anything, so the Google Calendar embed and the weekly posting still have to be built (issues
#1 and #32).

This supersedes the platform decision in `proposal.md`, and turns the visual mockups from a
reference into the design the site is built from. It leaves the calendar decision in ADR-0001
standing in spirit: the volunteers edit the schedule in Google, not in the site.

Status: accepted.
