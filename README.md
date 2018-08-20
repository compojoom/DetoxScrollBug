#Detox Scroll bug
This repo shows a bug with detox where we try to scroll a view and inside of the view we have a TextInput with multiple set to true.

Instead of scrolling to the bottom we get a detox error:
Failed: [Error: Error: Multiple UI elements matched for the given criteria.

#Install

```
yarn
```

```
detox build;
detox test;
```

test should fail with Failed: [Error: Error: Multiple UI elements matched for the given criteria.

Remove the tetInput from App.js and redo the test - it will succeed