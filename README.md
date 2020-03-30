# lostcrumbs blog

> Blog made with Nuxt, TailwindCSS, and Gitlab pages

Personal Static site for projects and some blog posts. Find it live at [gerardbentley.com](gerardbentley.com)

Built mostly with Vue + Nuxt JS, Tailwind CSS, and Markdown.

Starter Code: [create-nuxt-app](https://github.com/nuxt/create-nuxt-app)

Template and some components based on [this nuxt-markdown-blog-starter](https://github.com/marinaaisa/nuxt-markdown-blog-starter) repo by [marinaaisa.com](https://marinaaisa.com/)

## Local Dev

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# run linting and fix errors
$ npm run lint

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Gitlab CI/CD

Since this is a static site (and gitlab pages only supports static sites), all we need to do is create the html, css, and js files in a folder called `public/` and make sure that that's an `artifact` of the gitlab process. Learn more about [Gitlab Pages](https://docs.gitlab.com/ee/user/project/pages/#getting-started).

```yml
# Docker image used by Gitlab runner
image node

# Runs before all jobs, in our case just the deploy job
before_script:
  - echo 'Running npm install'
  - npm install

# Tells the runner to remember these files since they don't change much and are large
cache:
  paths:
    - node_modules/

# Job named pages runs the `npm run generate` command
# Leaves the artifact files in the public/ folder for gitlab pages to deploy
pages:
  stage: deploy
  script:
    - echo 'Running generate'
    - npm run generate
  artifacts:
    paths:
      - public
  only:
    - master
```
