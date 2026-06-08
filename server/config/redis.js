const Redis = require('ioredis');

const redisClient = new Redis(process.env.REDIS_URL);

redisClient.on('connect', () => {
    console.log('ioredis client connected successfully');
});

redisClient.on('error', (err) => {
    console.error('ioredis connection error:', err);
});

module.exports = redisClient;