import {EvmBatchProcessor, EvmBatchProcessorFields, BlockHeader, Log as _Log, Transaction as _Transaction} from '@subsquid/evm-processor'
import * as myContractAbi from './abi/usdc'

export const processor = new EvmBatchProcessor()
    /// Data lake with historical data for the network
    /// @link https://docs.subsquid.io/subsquid-network/reference/evm-networks/
    .setGateway('eth-mainnet')
    /// RPC endpoint to fetch latest blocks.
    /// Set RPC_URL environment variable, or specify ChainRpc endpoint
    /// @link https://docs.subsquid.io/sdk/reference/processors/evm-batch/general/#set-rpc-endpoint
    .setRpcEndpoint(process.env.RPC_URL)

    /// Specify which type of data needs to be extracted from the block
    /// @link https://docs.subsquid.io/sdk/reference/processors/evm-batch/field-selection/#set-fields
    .setFields({
            log: {
                topics: true,
                data: true,
                transactionHash: true,
            },
            transaction: {
                hash: true,
                input: true,
                from: true,
                value: true,
                status: true,
        }
    })
    /// Subscribe to events emitted by myContract
    .addLog({
        /// myContract address
        address: ['0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'],
        /// Topic0 of subscribed events
        /// @link https://docs.subsquid.io/sdk/reference/processors/evm-batch/field-selection/#set-fields
        topic0: [
            myContractAbi.events['Approval'].topic,
            myContractAbi.events['AuthorizationCanceled'].topic,
            myContractAbi.events['AuthorizationUsed'].topic,
            myContractAbi.events['Blacklisted'].topic,
            myContractAbi.events['BlacklisterChanged'].topic,
            myContractAbi.events['Burn'].topic,
            myContractAbi.events['MasterMinterChanged'].topic,
            myContractAbi.events['Mint'].topic,
            myContractAbi.events['MinterConfigured'].topic,
            myContractAbi.events['MinterRemoved'].topic,
            myContractAbi.events['OwnershipTransferred'].topic,
            myContractAbi.events['Pause'].topic,
            myContractAbi.events['PauserChanged'].topic,
            myContractAbi.events['RescuerChanged'].topic,
            myContractAbi.events['Transfer'].topic,
            myContractAbi.events['UnBlacklisted'].topic,
            myContractAbi.events['Unpause'].topic,
        ],
    })
    /// Uncomment this to specify the number of blocks after which the processor will consider the consensus data final
    /// @link https://docs.subsquid.io/sdk/reference/processors/evm-batch/general/#set-finality-confirmation
    // .setFinalityConfirmation(1000)


export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
