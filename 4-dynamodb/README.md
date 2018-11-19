# DynamoDB Workshop Tasks

## Goal

The main goal of the DynamoDB Tasks is to enable your Serverless Jarvis to keep track of the created serverless applications and its belonging services, so that you can .

### Task list

You will need to have:

1. [A service that will handle all the communication with DynamoDB.](./1-create-dynamodb-repository)
2. [A service method to create a serverless application and store it in DynamoDB.](./2-create-application-method)
3. [A service method to create a serverless component, and store it, along with the relation to the current active parent application and the input, process and output information of the service, to the DynamoDB.](./3-create-application-service-method)
4. [A service method which will get the currently developed (active) serverless application.](./4-get-active-application-method)
5. [A service that will list all the available applications from DynamoDB](./5-list-all-applications)
6. [A service that will list all services from the currently active application](./6-list-active-application-services)