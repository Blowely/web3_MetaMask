import Web3 from "web3";

let ethAccount;
let reject = {};

export const initWeb3 = async (setTitle) => {
    let provider = window.ethereum;

    setTitle('MetaMask is locked - please login');

    if (provider) {
        await provider.request({method: 'eth_requestAccounts'})
            .then(accounts => {
                ethAccount = accounts[0]
                reject = {};
                console.log('ethAccount is', ethAccount);
            })
            .catch(err => {
                console.log('err = ', err);
                reject = err;
            })
    }

    const web3 = new Web3(provider);

    return {ethAccount, web3, reject};
}
