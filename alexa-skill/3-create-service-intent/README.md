# 3 - Create an intent to create a service / process within the currently developed application

Now that Alexa understand that you want to create an app, let's add an intent for creating a service.

## Task

This task contains following two subtasks:

1. Create the intent in the console / or in the ASK model
2. Create the intent handler inside the code

### 3.1 - Create the intent

Create another intent with following values:

- **Intent name:** AddService
- **Slots:** 
  - Name: `serviceQuery`
  - Type: `AMAZON.SearchQuery`
- **Sample utterances:**
  - add a process {serviceQuery}
  - to add a process {serviceQuery}
  - create a service {serviceQuery}
  - add a service {serviceQuery}
  - to add a service {serviceQuery}
  - to create a service {serviceQuery}

### 3.2 - Create the intent handler inside your Lambda function

TBA

## Tips

Here are a few tips to help you with this task:

- You can find a guide for creating Intents, Utterances, and Slots here: [link](https://developer.amazon.com/docs/custom-skills/create-intents-utterances-and-slots.html).

------

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task](../4-start-working-intent)
- [Back to the task list](../)