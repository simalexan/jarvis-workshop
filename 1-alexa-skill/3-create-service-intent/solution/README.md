# Lambda function



## Requirements

* AWS CLI already configured with at least PowerUser permission
* [NodeJS 8.10+ installed](https://nodejs.org/en/download/)
* [Docker installed](https://www.docker.com/community-edition)

## Setup process

### Installing dependencies

In this example we use `npm` but you can use `yarn` if you prefer to manage NodeJS dependencies:

```bash
cd alexa-app
npm install
cd ../
```

## Packaging and deployment

AWS Lambda NodeJS runtime requires a flat folder with all dependencies including the application. SAM will use `CodeUri` property to know where to look up for both application and dependencies:

```yaml
...
    FirstFunction:
        Type: AWS::Serverless::Function
        Properties:
            CodeUri: alexa-app/
            ...
```

Firstly, we need a `S3 bucket` where we can upload our Lambda functions packaged as ZIP before we deploy anything - If you don't have a S3 bucket to store code artifacts then this is a good time to create one:

```bash
aws s3 mb s3://BUCKET_NAME
```

Next, run the following command to package our Lambda function to S3:

```bash
sam package \
  --template-file template.yaml \
  --s3-bucket REPLACE_THIS_WITH_YOUR_S3_BUCKET_NAME \
  --output-template-file output.yaml
```

Next, the following command will create a Cloudformation Stack and deploy your SAM resources.

```bash
sam deploy \
  --template-file output.yaml \
  --stack-name Jarvis \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides AlexaAppId=REPLACE_THIS_WITH_YOUR_ALEXA_APP_ID \
  --region eu-west-1
```

> **See [Serverless Application Model (SAM) HOWTO Guide](https://github.com/awslabs/serverless-application-model/blob/master/HOWTO.md) for more details in how to get started.**

After deployment is complete you can run the following command to retrieve the API Gateway Endpoint URL:

```bash
aws cloudformation describe-stacks \
    --stack-name Jarvis \
    --query 'Stacks[].Outputs' \
    --region eu-west-1
```

## Testing

We use `jest` for testing our code and it is already added in `package.json` under `scripts`, so that we can simply run the following command to run our tests:

```bash
cd alexa-app
npm test
```

# Appendix

## AWS CLI commands

AWS CLI commands to package, deploy and describe outputs defined within the cloudformation stack:

```bash
sam package \
  --template-file template.yaml \
  --s3-bucket REPLACE_THIS_WITH_YOUR_S3_BUCKET_NAME \
  --output-template-file output.yaml

sam deploy \
  --template-file output.yaml \
  --stack-name Jarvis \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides AlexaAppId=REPLACE_THIS_WITH_YOUR_ALEXA_APP_ID \
  --region eu-west-1

aws cloudformation describe-stacks \
  --stack-name Jarvis \
  --query 'Stacks[].Outputs' \
  --region eu-west-1
```
