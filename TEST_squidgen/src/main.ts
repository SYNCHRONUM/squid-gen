import {myContract} from './mapping'
import {processor} from './processor'
import {db, Store} from './db'
import {EntityBuffer} from './entityBuffer'
import {Transaction} from './model'

processor.run(db, async (ctx) => {
    for (let block of ctx.blocks) {
        // Use ctx.log for logging. Avoid using `console.log` in squids
        ctx.log.info(`Received block #${block.header.height} with ${block.transactions.length} transactions`)


        for (let log of block.logs) {
            if (log.address === '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48') {
                myContract.parseEvent(ctx, log)
            }
        }

        for (let transaction of block.transactions) {
            if (transaction.to === '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48') {
                myContract.parseFunction(ctx, transaction)
            }

            EntityBuffer.add(
                new Transaction({
                    id: transaction.id,
                    blockNumber: block.header.height,
                    blockTimestamp: new Date(block.header.timestamp),
                    hash: transaction.hash,
                    to: transaction.to,
                    from: transaction.from,
                    status: transaction.status,
                })
            )
        }
    }

    for (let entities of EntityBuffer.flush()) {
        await ctx.store.insert(entities)
    }
})
