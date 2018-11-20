# Create or update the SAM template

Again, congratulations on completeing the previous tasks! You've finished with the heavylifting.

## Goal

Create / Update the SAM template file that's responsible for deploying your application

## Tasks

The contents of this task vary depending on the task groups you've completed. More specifically, if you've completed the DynamoDB group tasks or not. The first part of this task is creating the SAM template file and the second part is doing the DynamoDB additional ones.

*Note:* If you've been using a SAM template already in your Alexa Skill tasks, just follow up on the missing items from this task.

### Defining your SAM template

Create a file called `template.yml` and define the SAM template along with an empty `Resources:` section. You will to define only one AWS Lambda (`AWS::Serverless::Function`) and setup its `Properties`, such as `Handler`, `Runtime` and `Timeout`.

Now comes the most difficult part. Policies.
You will need to add `Policies` to your `Properties`, which is an array of policies you wish to apply to your AWS Lambda Function.

You will need to add two policies:

1. `AWSLambdaExecute`
2. A custom policy statement that allows:
    - `serverlessrepo:*`
    - `cloudformation:*`
    - `iam:CreateRole` - this and the following IAM roles seem a bit "unsafe" to add them, but your Lambda should be able to create Component Roles and Policies, to enable them to work.
    - `iam:GetRole`
    - `iam:PassRole`
    - `iam:DeleteRole`
    - `iam:PutRolePolicy`
    - `iam:AttachRolePolicy`
    - `iam:DetachRolePolicy`
    - `iam:DeleteRolePolicy`
    - `lambda:*`
    - `apigateway:*`
    - `comprehend:*`
  With all resources - meaning `Resource: *`

*Note:* This is an experimental technology, there is room for security improvement.

That's it! If you haven't done any DynamoDB tasks, go to the:

- [Next task](../2-connect-alexa-to-comprehend)
- [Back to the task list](../)

### Adding DynamoDB template section

If you've completed your DynamoDB tasks, you have just a little bit more work to do, in case you haven't done it before:

#### Add Applications DynamoDB table to the SAM template

Specify an Applications DynamoDB table (`AWS::DynamoDB::Table` or SAM's SimpleTable). Define its `Properties` such as `TableName`, `AttributeDefinitions`, `KeySchema`, `ProvisionedThroughput` and `StreamSpecification`. 

#### Add Application Processes DynamoDB table to the SAM template

Specify an Applications DynamoDB table (`AWS::DynamoDB::Table` or SAM's SimpleTable). Define its `Properties` such as `TableName`, `AttributeDefinitions`, `KeySchema`, `ProvisionedThroughput` and `StreamSpecification`. 

#### Update the custom policy permissions and environment variables

In your Lambda custom policy, add `dynamodb:*` into your list of permissions.
Next, add `Environment` into your properties and specify the following `Variables` and replace the values with your ones:

```yaml
  APPLICATIONS_TABLE: <INSERT VALUE, e.g. 'jarvis-apps'>
  APPLICATIONS_PKEY: <INSERT VALUE, e.g. 'appId'>
  PROCESS_TABLE: <INSERT VALUE, e.g. 'jarvis-apps-processes'>
  PROCESS_PKEY: <INSERT VALUE, e.g. 'processId'>
```

----

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task](../2-connect-alexa-to-comprehend)
- [Back to the task list](../)