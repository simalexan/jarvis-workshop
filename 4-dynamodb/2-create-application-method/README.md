# 2 - Create a method to handle creating an application

## Description

_"The good things always come in two."_

As with the previous task, you will have two subtasks. One for the `dynamo-repository`, and the other for the `application-repository`.

### DynamoDB Repository Tasks

Import and instantiate the DynamoDB Document Client inside the file. Import also the `uuid` module, that's available in AWS Lambda, for generating the primary key id.

Create a method named `saveToTable` within your DynamoDB repository that's responsible for creating an item and storing it in a DynamoDB table. This method will get 3 parameters. The `tableName` of the tablewhere you want to store the data, then the `primaryKey` which will be the name of the primary key of that table and the `item`, which is the actual data that you want to store.

Hint: You should use the DynamoDB method `put`.

### Application Repository Tasks

1. Import the DynamoDB Repository
2. Create a constant `APPLICATIONS_TABLE` and assign it the value  `applications` as your DynamoDB table name.
3. Create a constant `APPLICATIONS_PKEY` and assign it the value `appId` as the name the primary key of your DynamoDB table name.

4. Create a method called `createApplication` that accepts a


----

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task](../3-create-application-service-method)
- [Back to the task list](../)