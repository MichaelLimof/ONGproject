const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')


describe('SESSION', () =>{
    
    it('should be able to make a Login', async () =>{
        const response = await request(app)
        .post('/sessions')
        .send({
            id:'478f053f'
        })
        console.log(response.body)
    })

});