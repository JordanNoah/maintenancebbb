import { Client, ConnectConfig } from 'ssh2'
import AppConfig from '../../domain/config'
export const config: ConnectConfig = {
    host: AppConfig.SSH_HOST,
    port: AppConfig.SSH_PORT,
    username: AppConfig.SSH_USERNAME,
    password: AppConfig.SSH_PASSWORD
}