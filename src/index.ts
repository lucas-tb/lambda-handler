import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'

export const handler = async (_event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {{
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!')
    }

    return response
}}
