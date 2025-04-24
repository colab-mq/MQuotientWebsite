module.exports = {
  apps: [{
    name: 'mquotient-website',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
      // Add your database URL environment variable
      // DATABASE_URL: 'postgresql://username:password@hostname:port/database'
    }
  }]
};