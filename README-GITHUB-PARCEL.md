
# GitHub Pages deployment

  1. gh-pages deployment and hosting used as instructed in Traversy Media's video [GitHub Pages Deploy & Domain](https://www.youtube.com/watch?v=SKXkC4SqtRk&t=731s)
  1. also [GiHub documentation](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)
  1. with [Parcel bundler](https://css-tricks.com/why-parcel-has-become-my-go-to-bundler-for-development/)

### Custom domain **.xyz**

1. In your domain host admin panel find DNS Management and set records directing to [github](https://github.com):
```
Type: A record 
Host: @

185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
1. In [github](https://github.com) / settings add custom domain in GitHub Paged section
1. Make sure to have CNAME file in **dist** folder with your custom domain name

### GitHub Pages & Parcel

##### first setup

1. install npm gh-pages package `npm i gh-pages`
1. in `package.json`

```

  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "homepage": "--PUT YOUR PAGE HERE--"
```
4. In [github project's settings](https://github.com) set correct source branch in GitHub Paged section
5. Because of Parcel sourcemaps `.gitignore` ( **CNAME** file needed for custom domain in GitHub Pages)


```
# Parcel files
.cache/
dist/*
!dist/CNAME
!dist/[any-image-loaded-by-js].jpg
```

##### Coding in development environment

```
parcel index.html
```

* Parcel bundles all files into **dist** folder

##### Production environment setup


0. After making changes...
1. ~~Detele files in **dist** folder.... exceptions:~~
    1. ~~CNAME~~
    1. ~~All images loaded from JavaScript~~
1. Run
```
parcel build index.html --no-source-maps
npm run deploy
```
