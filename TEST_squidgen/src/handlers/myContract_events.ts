import type {DataHandlerContext} from '@subsquid/evm-processor'
import type {Store} from '../db'
import {events} from '../abi/usdc'
import {EntityBuffer} from '../entityBuffer'
import {MyContractEventApproval, MyContractEventAuthorizationCanceled, MyContractEventAuthorizationUsed, MyContractEventBlacklisted, MyContractEventBlacklisterChanged, MyContractEventBurn, MyContractEventMasterMinterChanged, MyContractEventMint, MyContractEventMinterConfigured, MyContractEventMinterRemoved, MyContractEventOwnershipTransferred, MyContractEventPause, MyContractEventPauserChanged, MyContractEventRescuerChanged, MyContractEventTransfer, MyContractEventUnBlacklisted, MyContractEventUnpause} from '../model'
import {Log} from '../processor'

export function handleApprovalEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['Approval'].decode(log)
    EntityBuffer.add(
        new MyContractEventApproval({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'Approval',
            owner: e.owner,
            spender: e.spender,
            value: e.value,
        })
    )
}
export function handleAuthorizationCanceledEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['AuthorizationCanceled'].decode(log)
    EntityBuffer.add(
        new MyContractEventAuthorizationCanceled({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'AuthorizationCanceled',
            authorizer: e.authorizer,
            nonce: e.nonce,
        })
    )
}
export function handleAuthorizationUsedEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['AuthorizationUsed'].decode(log)
    EntityBuffer.add(
        new MyContractEventAuthorizationUsed({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'AuthorizationUsed',
            authorizer: e.authorizer,
            nonce: e.nonce,
        })
    )
}
export function handleBlacklistedEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['Blacklisted'].decode(log)
    EntityBuffer.add(
        new MyContractEventBlacklisted({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'Blacklisted',
            account: e._account,
        })
    )
}
export function handleBlacklisterChangedEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['BlacklisterChanged'].decode(log)
    EntityBuffer.add(
        new MyContractEventBlacklisterChanged({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'BlacklisterChanged',
            newBlacklister: e.newBlacklister,
        })
    )
}
export function handleBurnEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['Burn'].decode(log)
    EntityBuffer.add(
        new MyContractEventBurn({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'Burn',
            burner: e.burner,
            amount: e.amount,
        })
    )
}
export function handleMasterMinterChangedEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['MasterMinterChanged'].decode(log)
    EntityBuffer.add(
        new MyContractEventMasterMinterChanged({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'MasterMinterChanged',
            newMasterMinter: e.newMasterMinter,
        })
    )
}
export function handleMintEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['Mint'].decode(log)
    EntityBuffer.add(
        new MyContractEventMint({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'Mint',
            minter: e.minter,
            to: e.to,
            amount: e.amount,
        })
    )
}
export function handleMinterConfiguredEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['MinterConfigured'].decode(log)
    EntityBuffer.add(
        new MyContractEventMinterConfigured({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'MinterConfigured',
            minter: e.minter,
            minterAllowedAmount: e.minterAllowedAmount,
        })
    )
}
export function handleMinterRemovedEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['MinterRemoved'].decode(log)
    EntityBuffer.add(
        new MyContractEventMinterRemoved({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'MinterRemoved',
            oldMinter: e.oldMinter,
        })
    )
}
export function handleOwnershipTransferredEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['OwnershipTransferred'].decode(log)
    EntityBuffer.add(
        new MyContractEventOwnershipTransferred({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'OwnershipTransferred',
            previousOwner: e.previousOwner,
            newOwner: e.newOwner,
        })
    )
}
export function handlePauseEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['Pause'].decode(log)
    EntityBuffer.add(
        new MyContractEventPause({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'Pause',
        })
    )
}
export function handlePauserChangedEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['PauserChanged'].decode(log)
    EntityBuffer.add(
        new MyContractEventPauserChanged({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'PauserChanged',
            newAddress: e.newAddress,
        })
    )
}
export function handleRescuerChangedEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['RescuerChanged'].decode(log)
    EntityBuffer.add(
        new MyContractEventRescuerChanged({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'RescuerChanged',
            newRescuer: e.newRescuer,
        })
    )
}
export function handleTransferEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['Transfer'].decode(log)
    EntityBuffer.add(
        new MyContractEventTransfer({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'Transfer',
            from: e.from,
            to: e.to,
            value: e.value,
        })
    )
}
export function handleUnBlacklistedEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['UnBlacklisted'].decode(log)
    EntityBuffer.add(
        new MyContractEventUnBlacklisted({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'UnBlacklisted',
            account: e._account,
        })
    )
}
export function handleUnpauseEvent(ctx: DataHandlerContext<Store>, log: Log) {
    const e = events['Unpause'].decode(log)
    EntityBuffer.add(
        new MyContractEventUnpause({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transaction!.hash,
            contract: log.address,
            eventName: 'Unpause',
        })
    )
}
