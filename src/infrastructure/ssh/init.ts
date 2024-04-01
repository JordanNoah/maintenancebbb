import {Client, ConnectConfig} from "ssh2";
import {config} from "./config";

export class SshClient {
    private readonly connSettings: ConnectConfig;
    private readonly sshClient: Client;

    constructor() {
        this.connSettings = config
        this.sshClient = new Client()
    }

    public async executeCommand(command: string): Promise<string> {
        console.log(this.connSettings)
        return new Promise<string>((resolve, reject) => {
            this.sshClient.on('ready', () => {
                this.sshClient.exec(command, (err, stream) => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    let result = '';
                    stream
                        .on('close', (code:any, signal:any) => {
                            this.sshClient.end();
                            resolve(result);
                        })
                        .on('data', (data:any) => {
                            result += data.toString();
                        })
                        .stderr.on('data', (data) => {
                        reject(new Error(data.toString()));
                    });
                });
            }).connect(this.connSettings);
        });
    }
}