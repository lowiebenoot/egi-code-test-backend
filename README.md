# EGI code test backend

I createad a GraphQL API on top of a [Game of Thrones REST API](https://anapioficeandfire.com/).

I only exposed things that I'm actually using in the frontend as well. So not all types and all fields from the REST API are exposed in the GraphQL api.

## Resolver

The queries resolve to a resolver which uses a small wrapper that is responsible for making requests to the REST API.

## Deployment

Deployment is done with the [serverless framework](https://serverless.com/) to a lambda function on AWS.
I also used [serverless-offline](https://www.npmjs.com/package/serverless-offline) plugin so I could test it locally.

The API is avaialble at https://rr5powfcei.execute-api.us-east-1.amazonaws.com/production/graphql.

If you browse to this page, it will show you the playground tool. I did notice though that it seems to have a small bug and it prefills the URL with a wrong URL (the stage, production in this case, is not in the URL). Not sure what goes wrong here, but I didn't use that playground anyway (I use [Insomnia](https://insomnia.rest/)).
