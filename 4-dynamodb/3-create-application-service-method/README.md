# 3 - Create a method to handle creating an application service

## Description

Create a method within your DynamoDB repository that's responsible for creating a service for your currently active application and storing it in your `processes` DynamoDB table.

### Application Repository Tasks

1. Within the `application-repository`, create a method called `addApplicationProcess`. It should accept 6 parameters:

- `appId`, which is the parent application identifier.
- `inputName`, the name of the process input, you want to store
- `processName`,the name of the process you, that you want to store
- `outputName`, the name of the process output, that you want to store
- `commandText`, the text of the command that the user spoke
- `stackName`, the name of the CloudFormation stack you're going to deploy.

----

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task](../4-get-active-application-method)
- [Back to the task list](../)