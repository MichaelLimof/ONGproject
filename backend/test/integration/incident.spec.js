const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('INCIDENT', () =>{
    it('should be able to create a new incident', async () =>{
        const response = await request(app)
        .post('/incidents')
        .set('Authorization', '478f053f')
        .send({
            title:"caso teste",
            description:"lorem caos teste",
            value:"199.90"
        })
        console.log(response.body)
    })

});