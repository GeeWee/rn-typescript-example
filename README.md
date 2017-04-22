# Things not working
(All of this is on android, haven't touched the ios files)

If you try to import some-component.tsx from index.android.tsx with the following line
`import { SomeComponent } from './some-component';`

You get the following error from haul
`ERROR in ./src/index.android.tsx
 Module not found: Error: Can't resolve './some-component' in 'C:\Users\gusta\Documents\rn-typescript-example\src'
  @ ./src/index.android.tsx 15:23-50
  @ multi ./~/haul-cli/src/utils/polyfillEnvironment.js ./src/index.android.tsx
`
(TSC gives no errors when compiling this)

if you try with the file extension, as:
`import { SomeComponent } from './some-component.tsx';`
Haul works fine, but react native crashes runtime with *undefined is not an object*

# RN + Typescript

This is a minimal example of using [React Native](https://facebook.github.io/react-native/), [Typescript](https://www.typescriptlang.org), and [Haul](https://github.com/callstack-io/haul) to build an iOS app.

## Work in progress

Things that don't work:

- Source maps
- Tapping errors in the simulator and seeing them in an editor (VScode)
- Type information from react native (and react)

## Trying it out!

- `git clone git@github.com:nixterrimus/rn-typescript-example.git`
- `yarn install`
- `yarn run haul start -- --platform android`
