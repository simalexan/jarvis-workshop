# 3 - Create an intent to create a service / process within the currently developed application

1. Create the intent in the console / or in the ASK model
2. Create the intent handler inside the code

## 3.1 - Create intent in the console

### Name

AddService

### Slots

- Name: `serviceQuery`, Type: `AMAZON.SearchQuery`

### Utterances

- add a process {serviceQuery}
- to add a process {serviceQuery}
- create a service {serviceQuery}
- add a service {serviceQuery}
- to add a service {serviceQuery}
- to create a service {serviceQuery}

## 3.2 - Create the intent handler inside your Lambda function