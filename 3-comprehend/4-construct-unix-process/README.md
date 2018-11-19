# 4 - Construct a UNIX-like process

## Description

Create a method that's responsible for transforming an action group / query to a UNIX like process with:

- an input
- a process
- an output

Here comes the real deal, get ready!

## 4.1. Divide process elements

Now you need to divide these action groups along with the input outputs into proper processes and assign each process an input, process and an output.

Create a private function `divideProcessElements` which accepts `actionGroups` and `inputOutputs` as two paramters and invoke it at the end of the function of the `core` file.

Inside the method, you need to go through the `actionGroups` array and keep track of the `action` and the `index` of the action. Create a variable `nextAction` which will contain the actionGroup after the current one.

Now create two blank-slate private functions `getActionInput` and `getActionOutput` which both accept parameters:

- `inputOutputs` array
- `action` as the current action
- `index` as the current action index
- `actionGroups` array

Each of those functions should be invoked inside your `divideProcessElements` and will return the `currentInput` and `currentOutput` respectively.

Then construct a *process element* that contains properties:

- `input`, from the `currentInput` variable you need to get `currentInput.object.Text`
- `process`, from the current action get the `action.predicate.Text`
- `output`, from the `currentOutput` variable you need to get its `currentOutput.object.text`

and at the end of the action groups loop return that constructed *process object*.

Now, its time to get the actual process inputs and outputs.

## 4.2. `GetActionInput` Method

The `getActionInput` should be defined to accept = `potentialInputs`, `action`, `index` and `allActions` as parameters.

This is not a hard method to implement, as its mostly about positions and filtering.

First, you need to keep track of the `previousAction` by reducing the index by one and getting the previous one from the `allActions`.

If there isn't any `previousAction`, filter all the `potentialInputs` where the input's `adp.TokenId` (its position) is lower than the `action.predicate.TokenId`, and just get the first one in the filtered array.

If there is a `previousAction`, filter all the `potentialInputs` where the input's `adp.TokenId` (its position) is greater than the `previusAction.predicate.TokenId`, and just get the first one in the filtered array.

## 4.3. `GetActionOutput` Method

The `getActionOutput` should be defined to accept = `potentialOutputs`, `action`, `index` and `allActions` as parameters.

As with the `getActionInput`, its not a hard method to implement, as its mostly about positions and filtering.

First, you need to keep track of the `nextAction` by adding one to the index and getting the action one from the `allActions`.

If there **isn't** any `nextAction`, filter all the `potentialOutputs` where the output's `adp.TokenId` (its position) is greater than the `action.predicate.TokenId`, and just get the first one in the filtered array.

If there **is** a `nextAction`, filter all the `potentialInputs` where the output's `adp.TokenId` (its position) is greater than the `action.predicate.TokenId`, and lower than the `nextAction.predicate.TokenId`. Then just get the first one in the filtered array.

## That's it

You're done! Try it out!

----

If you are done or you need more info here are some of the shortcuts to help you out:

- [All done? Help your team with other tasks!](../../../../)
- [Back to the task list](../)