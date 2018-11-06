# 4 - Create an intent to start working on an existing serverless application

As you can work on a many different apps at the same time, you need to be able to start (activate) and stop (deactivate) your work on the app. Let's add an intent for app activation. As just one app can be active, activating an app should automatically deactivate all other apps.

## Task

This task contains following two subtasks:

1. Create the intent in the console / or in the ASK model
2. Create the intent handler inside the code

### 4.1 - Create the intent

Create another intent with following values:

- **Intent name:** ActivateApp
- **Slots:** 
  - Name: `appName`
  - Type: `AMAZON.NUMBER`
- **Sample utterances:**
  - continue application {appName}
  - activate application {appName}
  - to activate project {appName}
  - to continue app {appName}
  - to activate app {appName}

### 4.2 - Create the intent handler inside your Lambda function

At this point you'll not be able to store and read values from the Dynamo DB, it's enough if you are able to recognize this intent and answer to the user. Also, be ready to connect with Dynamo DB service and send the required data.

## Tips

Here are a few tips to help you with this task:

- You can find a guide for creating Intents, Utterances, and Slots here: [link](https://developer.amazon.com/docs/custom-skills/create-intents-utterances-and-slots.html).

------

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task](../5-stop-working-intent)
- [Back to the task list](../)