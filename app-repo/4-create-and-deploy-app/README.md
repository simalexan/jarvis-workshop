# 4 - Create a create and deploy application methods

## Description

- Create a method that's responsible for calling Serverless Application Repository API and creating a CloudFormation Change Set with the AppId

- Create a method's responsible for executing the CloudFormationChange set, created by the previous method

## Read the Serverless App Repo SDK

[Direct link to AWS Serverless Application Repository SDK Documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ServerlessApplicationRepository.html)

## Method Signature

Name: **createCFChangeSet**

Parameters: **appId**, **stackName**

Result: _Should return the response along with the stackName that you passed_.

### Hint

The method you should focus on is **serverlessapplicationrepository.createCloudFormationChangeSet**.
It has only three parameters: ApplicationId, ParameterOverrides (which should be at the moment, just an empty array) and StackName.
