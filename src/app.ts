import AppConfig from './domain/config'
import {Server} from "./presentation/server";
import {AppRoutes} from "./presentation/routes";

(async ()=>{
    await main()
})()

async function main() {
    const server = new Server({port:AppConfig.PORT,routes:AppRoutes.routes})
    await server.start()
}