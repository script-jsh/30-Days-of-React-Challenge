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

## Accessing *props* in Class Components
*props* is a means to send data from one component to another. We access props of a class based component using the *this* keyword.

To get our data out from props, we have to write *props.data* everytime. We can avoid this repetition using destructuring.