import { Network, ShyftSdk, TxnAction } from '@shyft-to/js';
import 'dotenv/config';

const RAYDIUM_AMM_ADDRESS = '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8';
const shyft = new ShyftSdk({
  apiKey: process.env.SHYFT_API_KEY,
  network: Network.Mainnet
});

const registerCallback = async () => {
  await shyft.callback.register({
    network: Network.Mainnet,
    addresses: [RAYDIUM_AMM_ADDRESS],
    // The URL of your API that listens for the callback event.
    // We will be set up in the next step.
    callbackUrl: `https://solana-bot-next-service.vercel.app/api/solana`,
    events: [TxnAction.CREATE_POOL]
  });
  console.log('Register success');
};

const removeCallback = async () => {
  await shyft.callback.remove({
    id: '*'
  });
  console.log('Remove success');
};

// registerCallback();
removeCallback();
