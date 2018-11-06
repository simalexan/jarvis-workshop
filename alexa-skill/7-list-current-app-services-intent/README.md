# 7 - Create an intent to list currently developed application services

It's hard to remember all services that you added, especially if you work on the app for a long time. Let's add an intent that will allow Alexa to list all added services.

## Task

This task contains following two subtasks:

1. Create the intent in the console / or in the ASK model
2. Create the intent handler inside the code

### 7.1 - Create the intent

Create another intent with following values:

- **Intent name:** ListAppServices
- **Slots:** 
  - None
- **Sample utterances:**
  - to list services
  - to list current services
  - list my services
  - list services

### 7.2 - Create the intent handler inside your Lambda function

At this point you'll not be able to store and read values from the Dynamo DB, it's enough if you are able to recognize this intent and answer to the user. Also, be ready to connect with Dynamo DB service and send the required data.

## Tips

Here are a few tips to help you with this task:

- You can find a guide for creating Intents, Utterances, and Slots here: [link](https://developer.amazon.com/docs/custom-skills/create-intents-utterances-and-slots.html).

------

If you are done or you need more info here are some of the shortcuts to help you out:

- [All done? Help your team with other tasks!](../../)
- [Back to the task list](../)

