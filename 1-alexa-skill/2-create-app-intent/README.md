# 2 - Create an intent to handle create a serverless application and activate it

Alexa skills are not useful without intents. Let's add one!

## Task

This task contains following two subtasks:

1. Create the intent in the console / or in the ASK model
2. Create the intent handler inside the code

### 2.1 - Create the intent

You need to add an intent to your Alexa skill. You can do this via Amazon Alexa Console, or using ASK model, both ways are OK, feel free to pick the one that is easier for you.

Each intent requires name, slots and some sample utterances, here are the suggested ones for your first intent:

- **Intent name:** CreateApp
- **Slots:** None
- **Sample utterances:**
  - to create an application
  - to create a new app
  - to start an application
  - to start a new app
  - to start a new application

### 2.2 - Create the intent handler inside your Lambda function

At this point, your skill will not create a serverless app. Instead, you just need to be able to recognize this intent and to answer to the user.

In the second part of the workshop you'll connect this intent with the other services that your team is working on.

## Tips

Here are a few tips to help you with this task:

- You can find a guide for creating Intents, Utterances, and Slots here: [link](https://developer.amazon.com/docs/custom-skills/create-intents-utterances-and-slots.html).

------

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task](../3-create-service-intent)
- [Back to the task list](../)