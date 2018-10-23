# DynamoDB Workshop Tasks

## Goal

The main goal of the DynamoDB Tasks is to enable your Serverless Jarvis to keep track of the created serverless applications and its belonging services, so that you can .

### Task list

You will need to have:

1. An service that will handle all the communication with DynamoDB.
2. A service method to create a serverless application and store it in DynamoDB.
3. A service method which will get the currently developed (active) serverless application.
4. A service method to create a serverless component, and store it, along with the relation to the current active parent application and the input, process and output information of the service, to the DynamoDB.
5. A service that will list all the available applications from DynamoDB
6. A service that will list all services from the currently active application