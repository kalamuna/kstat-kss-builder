# kstat-kss-builder [![npm version](https://badge.fury.io/js/kstat-kss-builder.svg)](https://badge.fury.io/js/kstat-kss-builder) [![Build Status](https://travis-ci.org/kalamuna/kstat-kss-builder.svg?branch=master)](https://travis-ci.org/kalamuna/kstat-kss-builder)

A custom Twig KSS Builder made for use with Kalastatic (though that is not a requirement).


## Installation

kstat-kss-builder was designed to be ingested as an npm package.

```
npm install kstat-kss-builder --save
```

then in your project create ```kss-config.json``` and point builder to kstat-kss-builder:
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

### Colors

Currently documenting colors, does require a little cusom markup in the kss-side, but it works rather nicely!

Note that the section reference, needs to have "color-swatches" in its name.

```
Styleguide color-swatches
```
or
```
Styleguide brand.color-swatches
```

Full color example:

```
/*
Brand Colors

Brand web colors.

$c__white - #fff
$c__gray - #a8a8a8
$c__gray-mid - #6d6d6d
$c__gray-dark - #58595b
$c__gray-darker - #333
$c__magenta - #ad1f57
$c__cream - #f4f0e9
$c__cream--light - #f9f8f7

weight: -100

Styleguide color-swatches
*/
```
