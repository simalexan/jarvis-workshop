# 1 - Create DynamoDB Repository and Application Repository files

## Description

Your task now is to create services responsible for handling the communication with DynamoDB and for creating and storing Jarvis's Applications within your DynamoDB table.

So let's start:

1. Create a file `dynamo-repository` that's responsible for handling all interactions with DynamoDB
2. Create another file `application-repository` that will be responsible for doing the business logic of creating an application and invoking the `dynamo-repository` to actually save it to a database table.
3. Within the `application-repository` file, import the `dynamo-repository` file, also within the `dynamo-repository` file, import `aws-sdk` and instantiate the `DynamoDB.DocumentClient`.

----

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task](../2-create-application-method)
- [Back to the task list](../)