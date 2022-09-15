# Class Components

class components are also known as statful components. class based components have state and life sycle methods.

Class based component is made using JavaScript class and it inherits from react Component.

```
// Imagine this is what we import from React package
class Component {
    constructor(props) {}
}

// This is how we make class based components by inheriting from the parent
class Child extends Component {
    constructor(props) {
        super(props)
    }
}
```