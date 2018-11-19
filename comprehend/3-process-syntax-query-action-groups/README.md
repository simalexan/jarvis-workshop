# 3 - Process a syntax query into action groups (predicate + object)

## Description

Create a method that's responsible to process a Comprehend Syntax analysis result of a query into an array of Action Groups

## 3.1. Create a file to handle the Comprehend's business logic

Create a file named `core.js`, which should export a function that accepts a parameter named `text`. Import the `comprehend-repository`, as you will use it now.

## 3.2. Get all verbs, nouns and adpositions

In the body of your exported function, call the `comprehend-repository` function and retrieve the array of syntax tokens.

From the syntax token list, create three arrays containing:

- all verbs which include the syntax text
- all nouns and pronouns
- all adpositions

## 3.3. Create an array of "Action Groups" and "Input Outputs"

From the aforementioned arrays, create an array of action groups. An Action Group is an object containing a property representing a `predicate` and an `object`.

Each element from those three arrays has a `TokenId` which represents its position in the sentence.

Map through the `verbs` array and based on the verb position in the sentence, get the first noun that is right after the verb.

Then, you needs an array of inputs and outputs. An element of that array represents an input or output, and is an object containing an adpositive and its belonging noun. Example: from the phrase `from database`, the adpositive would be `from` and the object is `database`. This will help you get all needed inputs and outputs from your sentence.

Map through the `adpositions` array and based on the adposition position in the sentence, get the first noun that is right after the adposition.

----

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task](../4-construct-unix-process)
- [Back to the task list](../)