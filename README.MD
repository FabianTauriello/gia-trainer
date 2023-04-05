### v1 stack and functionality (gia-practice):

- React
- Tailwind
- Express js
- Redux / Redux Toolkit / React-Redux for state management
- RTK Query for data fetching and cache management
- Font Awesome for icons

### v2 stack and functionality (gia-trainer):

- React
- Tailwind
- Next JS
- TRPC
- React Query / Zustand
- Testing library (e.g. Jest, Cypress)?
- Add friends and compare scores against them

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
- review for duplicate questions

### TODOs:

- [x] rename pages folder to routes?
- [ ] add sign-in and user authentication
- [ ] determine how selected choices will be recorded for questions - selectedChoiceIndex prop in Question type?
- [ ] make use of the timer
- [ ] complete the quiz complete pages
- [x] pull quiz data from server at beginning of quiz - use RTK Query
- [x] change data.json to hold questions only, and just render description, title etc as regular html?
- [x] get it working with section 1 first
- [ ] add a warning modal/dialog when exiting a quiz (e.g. pressing the back button)
- [ ] add preferences/settings section for toggling things like timer visibility and theme
- [x] create a custom hook for incrementing question index?
- [x] separate sections into completely different components
- [ ] consolidate and decide on button types (fix Btn1, CustomButton etc).
- [x] consider adding correctChoiceIndex to a question object to cut down on data (isCorrect will not be needed).

Redux logic:

![redux logic animation](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
