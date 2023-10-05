import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";


//função assíncrona que 
export async function handler(event:APIGatewayProxyEvent,
    context: Context): Promise<APIGatewayProxyResult>{
        
        const lambdaRequestId =context.awsRequestId
        const apiRequestId = event.requestContext.requestId

        console.log(`API Gateway RequestId: ${apiRequestId} - Lambda RequestId: ${lambdaRequestId}`)
        const method = event.httpMethod
        if(event.resource == "/products") {
            if(method == "GET") {
                console.log('Get')

                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: "Get Products - OK"
                    })
                }
            }
        }
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Bad request"
            })
        }
    }