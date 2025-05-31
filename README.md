# FAQ accordion

![img](preview.jpg)

## The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Transition from height 0 to auto!

- Use max-height from 0 to 100vh
- CSS Grid: transition `grid-template-rows` from 0fr to 1fr. You need to set an `overflow: hidden` to the `.accordion-body`

`transition: grid-template-rows 0.5s ease-out;`
