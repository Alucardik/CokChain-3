import Web3 from "web3"
export class InfuraConnection {
    static _cnt = 0
    static _selfRef

    constructor() {
        if (InfuraConnection._cnt === 1) {
            return InfuraConnection._selfRef
        }

        this.ethereumNetwork = process.env["ETHEREUM_NETWORK"]
        this.apiKey = process.env["INFURA_API_KEY"]
        const connectionURL = `https://${this.ethereumNetwork}.infura.io/v3/${this.apiKey}`
        this.connection = new Web3(new Web3.providers.HttpProvider(connectionURL))
        InfuraConnection._selfRef = this
        ++InfuraConnection._cnt
    }

    GetBlockBalance = async (address) => {
        return await this.connection.eth.getBalance(address)
    }
}
