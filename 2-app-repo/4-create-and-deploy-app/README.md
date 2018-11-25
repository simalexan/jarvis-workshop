# 4 - Create a create and deploy application methods

## Description

- Create a method that's responsible for calling Serverless Application Repository API and creating a CloudFormation Change Set with the AppId

- Import and instantiate CloudFormation using the AWS-SDK and then create a method's responsible for executing the CloudFormationChange set, created by the previous method

## Read the Serverless App Repo SDK

[Direct link to AWS Serverless Application Repository SDK Documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ServerlessApplicationRepository.html)

## Methods Signature

### AppRepo - createCFChangeSet

Name: **createCFChangeSet**

Parameters: **appId**, **stackName**

Result: _Should return the response along with the stackName that you passed_.

### CloudFormation - executeCFSet

Name: **executeCFSet**

Parameters: **cloudformation**, **changeSetId**, **stackId**

Result: _Should return the response_.

### Hint

The methods you should focus on are: 

**serverlessapplicationrepository.createCloudFormationChangeSet**
It has only three parameters: ApplicationId, ParameterOverrides (which should be at the moment, just an empty array) and StackName.

**cloudformation.executeChangeSet**
It has only three parameters: ChangeSetName, StackName, which is StackId.

----

If you are done or you need more info here are some of the shortcuts to help you out:

- [All done? Help your team with other tasks!](../../../../)
- [Back to the task list](../)