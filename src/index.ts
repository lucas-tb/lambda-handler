export const handler = async (_event: any) => {{
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!')
    }

    return response
}}
