# PrettyDigits

Changes long 'ugly' `numbers` into short pretty and readable `strings` 🌸

| Before      | After       |
|-------------|-------------|
| `1000`      | `'1 K'`     |
| `10000`     | `'10 K'`    |
| `1000000`   | `'1 M'`     |
| `0.0004356` | `'0.0004'`  |
| `100`       | `'100 b'`   |
| `-1250`     | `'-1.25 K'` |

## Useage

```javascript
  import prettyDigits from prettydigits.js

  prettyDigits(3500); // 4 K

  prettyDigits(1293943, {precision: 3, tolowercase: true}) // 1.294 m

  prettyDigits(-12345, {space: false, units: ['b','kb','mb','gb','tb']}) // -12kb

  prettyDigits(0.005431351234, {precision: 2}) // 0.00543
```
## Options

| Name          | Type      | Default Values         | Description                                  |
|---------------|-----------|------------------------|----------------------------------------------|
| `precision`   | `number`  | `0`                    | Number of decimal places to use. If the number isn't a whole number and is under 0 the precision starts at where the first number starts. Eg `prettyDigits(0.0053,{precision: 0})` = `'0.005'`             |
| `tolowercase` | `boolean` | `false`                | Change abbreviation to lower case            |
| `space`       | `boolean` | `true`                 | Adds a space between abbreviation and number |
| `units`       | `Array`   | `["","K","M","B","T"]` | Change the units to your own custom ones     |
