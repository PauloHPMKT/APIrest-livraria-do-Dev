const { request } = require("express")
const app = require("./app")
const router = require('./routes/books.router')

describe('Testando app server', () => {
    it('Deve conter a rota principal', async () => {
        const response = await request(router).get('/')

        expect(response.body).toHaveProperty('message')    
    })
})