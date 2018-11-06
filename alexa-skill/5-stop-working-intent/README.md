# 5 - Create an intent to stop working on the current application

Add another intent for app deactivation. As only one app can be active, no slots are needed.

## Task

This task contains following two subtasks:

1. Create the intent in the console / or in the ASK model
2. Create the intent handler inside the code

### 5.1 - Create the intent

Create another intent with following values:

- **Intent name:** StopDevelopingApp
- **Slots:** 
  - None
- **Sample utterances:**
  - stop development
  - cancel work on the application
  - stop working on the application
  - stop application

### 5.2 - Create the intent handler inside the code

At this point you'll not be able to store and read values from the Dynamo DB, it's enough if you are able to recognize this intent and answer to the user. Also, be ready to connect with Dynamo DB service and send the required data.

## Tips

Here are a few tips to help you with this task:

- You can find a guide for creating Intents, Utterances, and Slots here: [link](https://developer.amazon.com/docs/custom-skills/create-intents-utterances-and-slots.html).

------

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task](../6-list-apps-intent)
- [Back to the task list](../)