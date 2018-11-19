# Comprehend Workshop Tasks

## Goal

The main goal of the Comprehend Tasks is to enable your Serverless Jarvis assistant to process the "create service" query, which describes requested service, and give a list of meaningful services needed for the search of such component in the App Repository.

### Task list

You will need to have:

1. [A service that will handle all the communication with Comprehend.](./1-create-comprehend-repository)
2. [A service method that will accept a query and retrieve the syntax analysis of it from the Comprehend API.](./2-get-query-syntax-method)
3. [An internal method to get all the nouns and verbs and combine them into action groups, as each verb is the predicate to a noun, which is its object.](./3-process-syntax-query-action-groups)
4. [An internal method that should constructs UNIX type processes (one process has a single input and a single output) from the previous action groups.](./4-construct-unix-process)

Each of the tasks are more detailed inside their corresponding folders here.