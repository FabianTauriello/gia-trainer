### v1 stack (gia-practice):

- React
- Tailwind
- Express js
- Redux / Redux Toolkit
- Font Awesome for icons

### v2 stack (gia-trainer):

- React
- Tailwind
- Next JS
- TRPC
- React Query
- Testing library (e.g. Jest, Cypress)?

### Quiz Sections:

1. Reasoning
2. Perceptual Speed
3. Number Speed and Accuracy
4. Word Meaning
5. Spatial Visualisation

### Notes:

- follow the 60-30-10 rule for using color palette. 60% of the view should be a dominant color, 30% should be the secondary color or texture and the last 10% should be an accent
- don't forget about generics!
- make sure elements are semantic

### TODOs:

- [x] rename pages folder to routes?
- [ ] change data.json to hold questions only, and just render description, title etc as regular html?
- [x] get it working with section 1 first
- [ ] add a warning modal/dialog when exiting a quiz (e.g. pressing the back button)
- [ ] add preferences/settings section for toggling things like timer visibility and theme
- [ ] create a custom hook for incrementing question index?
- [x] separate sections into completely different components
- [ ] make sure there aren't any duplicates in the questions
- [ ] consolidate and decide on button types (fix Btn1, CustomButton etc).
- [x] consider adding correctChoiceIndex to a question object to cut down on data (isCorrect will not be needed).
