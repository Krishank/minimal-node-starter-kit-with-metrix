# Node Starter Kit

This is a small setup which can be eaisly scalable for enterprise solutions.

## Problem Statement

The player is given an _n x n_ board of tiles where each tile is given one
of _m_ colors.

- Genrate a Metrix of NXN
- Metrix can have M number of colors (M !> N)
- Metrix could have colors divide randomly or in equal number or as per the game complexity (as per the game complexity we can handle the color count in Metrix I just need to modify my #getRandomColor function)
- Make minimum moves to achive
- Find the color which has largest count in Metrix

I have also implemented two addintion which I thought I would need later

1. Setting Complexity while distribitting the colors
2. Find color count row wise may be I need colomnwise as well

## strcture

All code is inside ./src.
All Folders Have their own README.md

```
src/

├── application.js

├── const

│ ├── README.md

│ ├── colors.js

│ ├── commonErrors.js

│ ├── commonWarnings.js

│ ├── index.js

│ ├── moves.js

│ └── shapeType.js

├── data

│ ├── README.md

│ └── index.js

├── index.js

├── middleware

│ └── README.md

├── mock

│ ├── README.md

│ └── metrix.mock.js

└── utils

├── README.md

├── genrateMetrix.js

├── getColorCountInMetrix.js

├── getColorCountInMetrix.spec.js

├── getElementsFromMetrix.js

├── getRandomColor.js

├── getShuffledArray.js

├── getSuffledArray.spec.js

├── index.js

└── swapSquares.js
```

## Environemnt

Node: v10.16.0

npm: 6.9.0

## How to Setup

```



npm i



npm start



npm test



```

## Note:

As of now I have created a class ColorMetrix and moved all small logical units inside utils.

## What Else I could do:

There can be multiple fashion to write it.

1. Use modular patern with error first approach

2) I could have create another Metrix base class which will provide basic operation and ColorMetrix will inherit it.A\* algorithm

```



class Metrix {

constructor() {}

doSomething() {



}

}



class ColorMetrix extends Metrix {

constructor() {

super();

}

solveMetrix() {}

}

}

```

3. Remove all comments from files I did't write much test cases so I thought its good to write comments for now
4. I could have write more exceptions in utils and also the test for the same.
5. I could have use typeScript as this code has lot of operations where if type of value gets change it will start breaking
6. I could write my test cases more gracefully and also use beforeEach and other features as of now they are quite strait forward and redundent in terms of defining same varibale in diffrent it blocks
7. Even if the solution is not completed most of the utils I wrote will be used to solve this puzzle :)
8. Whaever orchestration index.js is doing can move to a playter class.
