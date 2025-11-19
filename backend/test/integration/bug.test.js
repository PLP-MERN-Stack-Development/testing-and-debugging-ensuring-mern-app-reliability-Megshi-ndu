// backend/test/integration/bug.test.js
const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const bugRoutes = require('../../routes/bugRoutes');
const Bug = require('../../models/bug');

const app = express();
app.use(express.json());
app.use('/api/bugs', bugRoutes);

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Bug.deleteMany({});
});

describe('Bug API', () => {
  it('POST /api/bugs - should create a new bug', async () => {
    const newBug = { title: 'UI Glitch', description: 'The main button is misaligned.' };
    const res = await request(app)
      .post('/api/bugs')
      .send(newBug);

    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe(newBug.title);
  });

  it('GET /api/bugs - should return all bugs', async () => {
    await Bug.create({ title: 'Test Bug', description: 'A test bug.' });
    
    const res = await request(app).get('/api/bugs');

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].title).toBe('Test Bug');
  });
});
