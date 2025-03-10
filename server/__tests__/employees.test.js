const request = require('supertest');
const app = require('../server'); // Ensure this path is correct
const mongoose = require('mongoose');

describe('Employee API', () => {
  beforeAll(async () => {
    // Connect to MongoDB before running tests
    await mongoose.connect('mongodb://localhost:27017/employeeDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Disconnect from MongoDB after running tests
    await mongoose.connection.close();
  });

  it('should get all employees', async () => {
    const res = await request(app).get('/employees');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new employee', async () => {
    const res = await request(app)
      .post('/employees')
      .send({
        name: 'John Doe',
        position: 'Developer',
        office: 'New York',
        salary: 50000,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual('John Doe');
  });
});
