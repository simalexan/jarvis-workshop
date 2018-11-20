# Connect to your AWS Serverless App Repo

Fun fun, part 2.

## Goal

Connect your previously connected logic to your Serverless App Repo logic to create a service.

## Tasks

Within your `Add Service` Intent handler, create a private function named `createService` which should accept a serverless repo app ID as a parameter. This method will be responsible for deploying your chosen Serverless Application Repository component. To do it, it will first need to get it, then create a CloudFormation change set and then execute it using CloudFormation.

Therefore, you will need to:

1. Get the app from the App Repo Repository with the method `getAppById`.
2. Upon completion, take the returned application's id and invoke the `createCFChangeSet` method from the same App Repo Repository file.
3. After its completion, take the response and invoke the `executeCFSet` from the same App Repo Repository and return the result. (If you're using Node.js, it should return a promise and in this method resove it)

That should be the end of the `createService` function.

Now, return to the previous code where you've got the foundComponent from the `findComponentByProcess` method.

Then, just take the `foundComponent` and invoke the `createService` method and pass the `foundComponent.ApplicationId`. Upon that completion, just return an Alexa response stating that you've found the service with the `foundComponent.Name`.

That's it, this is done! You can try out your skill now!

In case you want to add the DynamoDB connection, proceed to the next task. If not, congratulations, you've finished the workshop!

----

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task, connect your DynamoDB](../4-connect-to-dynamodb)
- [If you don't have DynamoDB, you're done!](../../../../)
- [Back to the task list](../)