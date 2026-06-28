const Redis = require('ioredis');
const redisClient = new Redis(process.env.REDIS_URL, {
    tls: {
        rejectUnauthorized: false
    },
    family: 4, 
    enableReadyCheck: false 
});

redisClient.on('connect', () => {
    console.log('ioredis client connected successfully');
});

redisClient.on('error', (err: any) => {
    console.error('ioredis connection error:', err.message);
});

module.exports = redisClient;