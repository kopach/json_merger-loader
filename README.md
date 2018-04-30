# json_merger-loader
[![Known Vulnerabilities](https://snyk.io/test/github/kopach/json_merger-loader/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kopach/json_merger-loader?targetFile=package.json)

[json_merger](https://www.npmjs.com/package/json_merger) loader for webpack. Merge JSON with indicators such as `@override`, `@match`, `@delete` and `@insert` to tell the processor how to merge the files

## installation

`npm install json_merger-loader --save-dev`

## Usage

Take a look on usage of json_merger module here https://www.npmjs.com/package/json_merger

**main.json:**

```json
{
	"@extends": [
		"fileA.json",
		"fileB.json"
	]
}
```

**fileA.json:**

```json
{
	"prop1": {
		"prop_a": "this will override fileB.json's property prop1"
	},
	"prop2": {
		"prop_a": "some value"
	},
	"arr": [
		{
			"prop1": "value1"
		}
	]
}
```

**fileB.json:**

```json
{
	"prop3": {
		"prop_b": "never gonna be seen"
	},
	"prop4": {
		"prop_b": "some other value"
	},
	"arr": [
		{
			"@append": true,
			"prop2": "value2"
		}
	]
}
```

Result:

```json
{
	"prop1": {
		"prop_a": "value1"
	},
	"prop2": {
		"prop_a": "value2"
	},
	"arr": [
		{
			"prop1": "arr value1"
		},
		{
			"prop2": "arr value2"
		}
	],
	"prop3": {
		"prop_b": "value3"
	},
	"prop4": {
		"prop_b": "value4"
	}
}
```


### Example config

``` javascript
module.exports = {
	module: {
		loaders: [
			{
				test: /\.json$/,
				loaders: ['json', 'json_merger']
			}
		]
	}
};
```

## License

[MIT](http://www.opensource.org/licenses/mit-license.php) - Copyright (c) 2016 Igor Kopach
