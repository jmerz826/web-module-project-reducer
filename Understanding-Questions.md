# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 

1. Application Renders
2. Click handled by handleClick in App.js
3. In actions, addOne is invoked and returns object. type=ADD_ONE 
4. type ADD_ONE is passed into reducer
5. Reducer returns state with initial state value + 1
6. App re-renders
...

* TotalDisplay shows the total plus 1.
