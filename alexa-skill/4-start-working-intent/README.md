# 4 - Create an intent to start working on an existing serverless application

1. Create the intent in the console / or in the ASK model
2. Create the intent handler inside the code

## 4.1 - Create intent in the console

### Name

ActivateApp

### Slots

- Name: `appName`, Type: `AMAZON.NUMBER`

### Utterances

- continue application {appName}
- activate application {appName}
- to activate project {appName}
- to continue app {appName}
- to activate app {appName}

## 4.2 - Create the intent handler inside your Lambda function