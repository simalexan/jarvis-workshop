# Connect your logic to DynamoDB

Fun fun, part 3. The optional DynamoDB tasks!

## Goal

Connect your previously connected logic to DynamoDB logic, to enable your intents and persist your applications and services.

## Tasks

As you will be dealing with Applications and Application Services, your task will separated into two sections.

- Applications
- Application Services

### Applications

Application tasks are separate into multiple subtasks for each intent for the Applications.

#### Create Application

Within your `Create Application` Intent handler, import your DynamoDB repository and invoke the `createProject` method which  accepts a the `projectName` as a parameter. This method will be responsible for creating your applications as "containers of multiple services" you want to add. Upon its completion, just return an Alexa response that its creating an app.

#### Activate Application

Within your `Activate Application` Intent handler, import your DynamoDB repository and invoke the `activateProject` method which  accepts a the `projectName` as a parameter. This method will be responsible for activating one of your applications and setting it as the current one to work on. Upon its completion, just return an Alexa response that it has activated the app.

#### Stop Application Development

Within your `Stop App Development` Intent handler, import your DynamoDB repository and invoke the `stopProject` method which  doesn't accept any parameter. This method will be responsible for stopping work on your currently active application. Upon its completion, just return an Alexa response that it has stopped development on the app.

#### List Applications

Within your `List Applications` Intent handler, import your DynamoDB repository and invoke the `listProjects` method which  doesn't accept any parameter. This method will be responsible for listing out all of your applications. Upon its completion, just combine all of the application names into an Alexa response.

### Application Services

#### Add Service

Within your `Add Service` Intent handler, import your DynamoDB repository. Now, just after your run the private function `createService`, upon its completion, use the response from it and pickup the `StackId` as a property from it. This StackId property is necessary, because we want to track the deployed CloudFormation Stack.

After that, run the method `getCurrentProjectId` from your DB Repository, to get the id of the project you're working on. Upon that completion, invoke your dynamodb repository with the `addProjectProcess` method and pass it the newly returned `projectId`, and the previously defined process `input`, `process` and `output`, also the `serviceQuery` value and the `stackId` you just saved.

That's it, now just reply with an Alexa response stating that you've found a service and are creating the app!

Congratulations!

That's it, this is done! You can try out all of your skills now!

----

If you are done or you need more info here are some of the shortcuts to help you out:

- [Congratulations, you're done!](../../../../)
- [Back to the task list](../)