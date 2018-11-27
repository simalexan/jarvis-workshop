# 2 - Create a search applications method

## Description

Create a method that's responsible for searching the AWS Serverless Application Repository and returning the result.

**Important**: This functionality exists for AWS Serverless Application Repository, but it's not documented, as it is experimental as well. For that reason, you will have to call a wrapped API and just pass the search term.

## Read the Serverless App Repo SDK

The Wrapper API URL is: [https://eqhtwlzt79.execute-api.us-east-1.amazonaws.com/Prod/search?query=YOUR_SEARCH_PHRASE](https://eqhtwlzt79.execute-api.us-east-1.amazonaws.com/Prod/search?query=YOUR_SEARCH_PHRASE)

## Method Signature

Name: **searchApps**

Parameters: **searchTerm**

Result: _Should return an array of Applications_.

### Hint

Since you will be calling an external API from your code, you will need to use an HTTP request library. If you're using Node.js, we recommend `minimal-request-promise` as its free from third-party dependencies, and has Promise support. If you decide to use it, be sure to parse the returned HTTP request body into JSON, by using `JSON.parse`. If not, your HTTP library may be using it already.

After you invoke it, the Search Apps API will return an object containing two properties `ApplicationCount` and `Applications`. Just return the `Applications`, as it is an array containing all of the AWS Serverless Application Repository applications that it found based on your search query.

----

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task](../3-get-app)
- [Back to the task list](../)