[![npm version](https://badge.fury.io/js/razzle-plugin-babel-ts.svg)](https://badge.fury.io/js/razzle-plugin-babel-ts)

# razzle-plugin-babel-ts
This package contains a plugin for using TypeScript as Babel Plugin with Razzle

Usage in Razzle Projects
```sh
yarn add razzle-plugin-babel-ts --dev
```

create a **razzle.config.js** file in root directory of project (next to the *package.json*) and put this content inside it

```javascript
module.exports = {
  plugins: ['babel-ts'],
};
```

create a **.babelrc** file in next to the razzle.config.js with this content

```
{
  "presets": ["razzle/babel", "@babel/typescript"]
}
```

## Configure TypeScript
config typescript compiler by creating a **.tsconfig** file next to the razzle.config.js

```typescript
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "noUnusedLocals": true,
    "noImplicitAny": true,
    "target": "es5",
    "module": "esnext",
    "strict": true,
    "jsx": "react",
    "noResolve": false,
    "noEmit": true,
    "baseUrl": "./src",
    "lib": ["dom", "dom.iterable", "esnext"],
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "allowJs": true,
    "allowUnreachableCode": false,
    "downlevelIteration": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitThis": true,
    "sourceMap": true,
    "pretty": true,
    "suppressImplicitAnyIndexErrors": true
  },
  "rootDirs": ["src"]
}

```

## Run Time Type Checking

Craete a new *script* in *package.json* 

```json
"type-check": "tsc --watch",
```

and start by run this command in terminal
```sh 
yarn type-check
``` 