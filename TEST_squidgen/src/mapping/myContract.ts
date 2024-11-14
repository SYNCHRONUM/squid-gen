import {DataHandlerContext} from '@subsquid/evm-processor'
import {Store} from '../db'
import {functions, events} from '../abi/usdc'
import * as eventHandlers from '../handlers/myContract_events'
import * as functionHandlers from '../handlers/myContract_functions'
import {Log, Transaction} from '../processor'

const address = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'


export function parseEvent(ctx: DataHandlerContext<Store>, log: Log) {
    try {
        if (events.Approval.is(log)) {
            return eventHandlers.handleApprovalEvent(ctx, log)
        }
        if (events.AuthorizationCanceled.is(log)) {
            return eventHandlers.handleAuthorizationCanceledEvent(ctx, log)
        }
        if (events.AuthorizationUsed.is(log)) {
            return eventHandlers.handleAuthorizationUsedEvent(ctx, log)
        }
        if (events.Blacklisted.is(log)) {
            return eventHandlers.handleBlacklistedEvent(ctx, log)
        }
        if (events.BlacklisterChanged.is(log)) {
            return eventHandlers.handleBlacklisterChangedEvent(ctx, log)
        }
        if (events.Burn.is(log)) {
            return eventHandlers.handleBurnEvent(ctx, log)
        }
        if (events.MasterMinterChanged.is(log)) {
            return eventHandlers.handleMasterMinterChangedEvent(ctx, log)
        }
        if (events.Mint.is(log)) {
            return eventHandlers.handleMintEvent(ctx, log)
        }
        if (events.MinterConfigured.is(log)) {
            return eventHandlers.handleMinterConfiguredEvent(ctx, log)
        }
        if (events.MinterRemoved.is(log)) {
            return eventHandlers.handleMinterRemovedEvent(ctx, log)
        }
        if (events.OwnershipTransferred.is(log)) {
            return eventHandlers.handleOwnershipTransferredEvent(ctx, log)
        }
        if (events.Pause.is(log)) {
            return eventHandlers.handlePauseEvent(ctx, log)
        }
        if (events.PauserChanged.is(log)) {
            return eventHandlers.handlePauserChangedEvent(ctx, log)
        }
        if (events.RescuerChanged.is(log)) {
            return eventHandlers.handleRescuerChangedEvent(ctx, log)
        }
        if (events.Transfer.is(log)) {
            return eventHandlers.handleTransferEvent(ctx, log)
        }
        if (events.UnBlacklisted.is(log)) {
            return eventHandlers.handleUnBlacklistedEvent(ctx, log)
        }
        if (events.Unpause.is(log)) {
            return eventHandlers.handleUnpauseEvent(ctx, log)
        }
    }
    catch (error) {
        ctx.log.error({error, blockNumber: log.block.height, blockHash: log.block.hash, address}, `Unable to decode event "${log.topics[0]}"`)
    }
}

export function parseFunction(ctx: DataHandlerContext<Store>, transaction: Transaction) {
    try {
    }
    catch (error) {
        ctx.log.error({error, blockNumber: transaction.block.height, blockHash: transaction.block.hash, address}, `Unable to decode function "${transaction.input.slice(0, 10)}"`)
    }
}
