# Connect your your Add service Alexa Intent to Comprehend

Here comes the fun parts!

## Goal

Connect your Comprehend logic to your Alexa Intent for creating a service.

## Tasks

Import your Comprehend's logic `core` file into your **Add service** intent handler.

Pass the `serviceQuery` slot value to it and after its completion, you should be getting a list of processes detected in your Comprehend logic.

Get the first element in the array and create three variables:

- input, and assign it the element input property.
- process, and assign it the element process property.
- output, and assign it the element output property.

After that, invoke the `findComponentByProcess` method from the `combiner` file, provided here.

**Important!**: This file is a simplistic one. It compares the labels and the title of the found serverless applications and components, to the requested input, process, output, to make things easier for this workshop. The one used in production, gets the CloudFormation templates of each component, finds the starting Resource and the ending one, along with the process happening in between. To adequately develop that one, it would take more than a 2-hour workshop.

Upon its completion, you should have received a `foundComponent`.

----

If you are done or you need more info here are some of the shortcuts to help you out:

- [Next task](../3-connect-to-app-repo)
- [Back to the task list](../)