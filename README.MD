# Days-To-Bits
## About
Days-To-Bits is a simple and performant package that aims to lessen the complicatedness of storing an array of 0-based weekday values as a singular int within a database. You can access a current simple [demo](https://codepen.io/brentvdalling/pen/abVrMgY). 

## What does this solve?
Why would anyone store an array of 0-based weekday values as in int? Well, it has everything to do with database storage and performance. Take for example `const days = [0, 1, 4, 6]`. It would usually be stored as `[0,1,4,6]` in the database as a JSON Object. This clearly takes up a lot of space compared to the decimal value `102`. If you unpack `102` you will get an array of numbers which equals `[0,1,4,6]`. Cool, right?

## How to install and use
First, make sure you have a package.json file and your project has been initialized. Please do some research before you install this package. Every package you add to a project is future technical debt.

```
npm i daystobits
```

```
import Bit, { FULL, SHORT, NUMBERS } from 'daystobits'

... your code

Bit.packDays([0,1,4,6]) // 102
Bit.unpackDays(102, NUMBERS) // [0,1,4,6]
Bit.unpackDays(102, FULL) // ["Sunday","Monday","Tuesday","Thursday","Friday"]
Bit.unpackDays(102, SHORT) // ["Sun","Mon","Tue","Thu","Fri"]

```

## Support
I offer no warranty or support of this code. This is open source package and is aimed at reducing the development time of junior developers. Please note that I take no responsibility of security issues or performance costs.

## Contributing
Please help make this better! The aim is to make stuffing date related data into decimal format easy for the common developer. Currently, this only handles 0-based days-of-week. It would be nice to handle more use-cases. Please email brent.dalling+daystobits@timelydevs.com for more information.

## Roadmap

- [ ] Demo Site
- [ ] Updated and In-Depth Docs
- [ ] DEV.to article explaining how this works in-depth
- [ ] Add use-cases

## License
This project uses the standard MIT License. PLease read it within the src files at `./license.txt`