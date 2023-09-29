# Voting Aggregator

Voting Aggregator is an Aragon app offering a checkpointed ERC20 token interface that is usable in Aragon Voting applications. Its purpose is to aggregate voting power over multiple sources, such as other checkpointed ERC20 or ERC900 contracts.

Accounts that have stake in any of the underlying sources will be represented by this app, allowing them to forward actions or vote in an attached Voting instance.

## 🚨 Security review status: audited

The `VotingAggregator` contract was [last professionally audited in 2020-01](https://github.com/mixbytes/audits_public/tree/master/Aragon/Voting%20Connectors).

This version was published to aragonPM as `voting-aggregator.hatch.aragonpm.eth`.

## Caveats

The same checkpointing caveats from the [Token Wrapper](https://github.com/aragonone/voting-connectors/tree/master/apps/token-wrapper) apply to the Voting Aggregator. Aggregated token amounts are limited to `uint192`.

## Installation instructions

The installation instructions are fairly similar to the [Token Wrapper](https://github.com/aragonone/voting-connectors/tree/master/apps/token-wrapper) as well, and you can generally substitute any instructions for the Token Wrapper for the Voting Aggregator.

The main changes are the initialization parameters and permissions.

The Voting Aggregator's initialization parameters:

- Voting Aggregator's "token" name
- Voting Aggregator's "token" symbol
- Voting Aggregator's "token" display decimals

And the role you should use when assigning a permission is:

- `ADD_POWER_SOURCE_ROLE`


## Node version

This project can be compiled with node 16.20.2