const {button, div, input, sup} = van.tags

// Create a new State object with init value 1
const counter = van.state(1)

// Log whenever the value of the state is updated
van.effect(() => console.log(`Counter: ${counter.oldVal} -> ${counter.val}`))

// Used as a child node
const dom1 = div(counter)

// Used as a property
const dom2 = input({type: "number", value: counter, disabled: true})

// Used in a state-derived property
const dom3 = div({style: () => `font-size: ${counter.val}em;`}, "Text")

// Used in a complex binding
const dom4 = () => div(counter.val, sup(2), ` = ${counter.val * counter.val}`)

// Button to increment the value of the state
const incrementBtn = button({onclick: () => ++counter.val}, "Increment")
const resetBtn = button({onclick: () => counter.val = 1}, "Reset")

van.add(document.body, incrementBtn, resetBtn, dom1, dom2, dom3, dom4)
