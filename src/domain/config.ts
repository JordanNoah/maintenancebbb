require('dotenv').config()

export default {
    PORT: Number(process.env.PORT) || 3000,
    DB_HOST:process.env.DB_HOST || '',
    DB_USERNAME:process.env.DB_USERNAME || '',
    DB_PASSWORD:process.env.DB_PASSWORD || '',
    DB_PORT:process.env.DB_PORT || '',
    DB_NAME:process.env.DB_NAME || '',
    SSH_HOST:process.env.SSH_HOST || '',
    SSH_PORT:Number(process.env.SSH_PORT) || 22,
    SSH_USERNAME:process.env.SSH_USERNAME || '',
    SSH_PASSWORD:process.env.SSH_PASSWORD || ''
}