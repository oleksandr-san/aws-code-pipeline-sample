const AWS = require('aws-sdk')
let dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1'})


exports.handler = (event, context, callback) => {
  let params = {
      TableName: process.env.ddbTable,
      Item: {
          pk: "marco.mercado@gmail.com",
          sk: "user",
          first_name: "Marco",
          last_name: "Mercado"
      },
      ConditionExpression: "attribute_not_exists(pk)",
      ReturnConsumedCapacity: 'TOTAL'
  }

  dynamodb.put(params, (err, data) => {
      if (err) callback(err)
      else callback(null, data)
  })
}