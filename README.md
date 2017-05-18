# eslint-config-devsu
Devsu's ESLint shareable configs.

## Usage

Add `eslint` and `eslint-config-devsu` to `devDependencies` in your `package.json`:

```
npm install --save-dev eslint eslint-config-devsu
```

In your project root, create/edit `.eslintrc` and select the set of rules you want to use:

### For ECMAScript 6
```
{
  "extends": "devsu/ecma6"
}
```

### For NodeJS (includes ecma6 rules)

```
{
  "extends": "devsu/node"
}
```

### For ReactJS (includes ecma6 and react-app package rules)
```
{
  "extends": "devsu/react"
}
```

Change in `package.json` your run script to add a lint property:

```
...
"scripts": {
  "lint": "eslint ."
},
...
```

Try our rules by running:

```
npm run lint
```

## Overriding rules

To override a particular rule, use the `rules` key:

```
{
  "extends": "devsu/node",
  "rules": {
    "comma-dangle": "off"
  }
}
```
