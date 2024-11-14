import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, Index as Index_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_} from "@subsquid/typeorm-store"

/**
 * This is GraphQL schema file. It was generated automatically by the squid-gen tool.
 * Each type corresponds to an entity in the database, a GraphQL type and an event/function on the contract.
 * Feel free to change the schema to fit your needs, and run `sqd codegen` to regenerate the models.
 * See more here: https://docs.subsquid.io/sdk/reference/schema-file/
 */
@Entity_()
export class Transaction {
    constructor(props?: Partial<Transaction>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @IntColumn_({nullable: true})
    blockNumber!: number | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    blockTimestamp!: Date

    @Index_()
    @StringColumn_({nullable: false})
    hash!: string

    @Index_()
    @StringColumn_({nullable: true})
    to!: string | undefined | null

    @Index_()
    @StringColumn_({nullable: true})
    from!: string | undefined | null

    @Index_()
    @IntColumn_({nullable: true})
    status!: number | undefined | null
}
