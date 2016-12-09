# kstat-kss-builder

A custom Twig KSS Builder made for use with Kalastatic (though that is not a requirement).


## Installation

kstat-kss-builder was designed to be ingested as an npm package.

```
npm install kstat-kss-builder --save
```

then in your project create ```ksss-config.json``` and point builder to kstat-kss-builder:
```
{
  ...
  "builder": "node_modules/kstat-kss-builder",
  ....
}
```

enjoy.

## Development

kstat-kss-builder was built using sass, grunt for sass compilation.

### Commands
```
npm run-script sass // compiles the sass
npm watch // watches for changes in 'styles/**/*', 'components/**/*', '**/*.twig' and compiles sass on change`
```
