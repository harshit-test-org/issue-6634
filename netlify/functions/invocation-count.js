const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient() 

exports.handler = async function(event, context) {
  const data = await prisma.test.findMany()
    return {
        statusCode: 200,
        body: JSON.stringify({message: data})
    };
}
