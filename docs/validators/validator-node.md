---
id: validator-node
title: Run a Validator
description: "Hosting requirements for a NumBlock node"
keywords:
- docs
- hosting
- cloud
- setup
- validator
---

Below are the suggestions for properly hosting a validator node in a NumBlock network. Please pay careful attention to all the items listed below to make sure 
that your validator setup is properly configured to be secure, stable and performant.

## Knowledge base

Before trying to run the validator node, please read through this document thoroughly.   
Additional docs that might be helpful are:

- [CLI commands](/docs/validators/cli-commands)

## Minimum system requirements

| Type | Value                                                                                          | Influenced by                                                                                                                |
|------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| CPU  | 2 cores                                                                                        | <ul><li>Number of JSON-RPC queries</li><li>Size of the blockchain state</li><li>Block gas limit</li><li>Block time</li></ul> |
| RAM  | 2 GB                                                                                           | <ul><li>Number of JSON-RPC queries</li><li>Size of the blockchain state</li><li>Block gas limit</li></ul>                    |
| Disk | <ul><li>10 GB root patition</li><li>30 GB root partition with LVM for disk extension</li></ul> | <ul><li>Size of the blockchain state</li></ul>                                                                               |


## Service configuration

`numblock` binary needs to run as a system service automatically upon established network connectivity and have start / stop / restart
functionalities. We recommend using a service manager like `systemd.` 

Example `systemd` system configuration file:
```
[Unit]
Description=NumBlock Server
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=10
User=ubuntu
ExecStart=/usr/local/bin/numblock server --config /home/ubuntu/numblock/config.yaml

[Install]
WantedBy=multi-user.target
```

###  Binary

In production workloads `numblock` binary should only be deployed from pre-built GitHub release binaries - not by manually compiling.
:::info
By manually compiling `develop` GitHub branch, you may introduce breaking changes to your environment.   
For that reason it is recommended to deploy NumBlock binary exclusively from releases, as it will contain 
information about breaking changes and how to overcome them.
:::

Please refer to [Installation] for a complete overview of installation method.

### Data storage

The `data/` folder  containing the entire blockchain state should be mounted on a dedicated disk / volume allowing for
automatic disk backups, volume extension and optionally mounting the disk/volume to another instance in case of failure.


### Log files

Log files need to be rotated on a daily basis (with a tool like `logrotate`).
:::warning
If configured without log rotation, log files could use up all the available disk space which could disrupt the validator uptime.
:::

Example `logrotate` configuration:
```
/home/ubuntu/numblock/logs/node.log
{
        rotate 7
        daily
        missingok
        notifempty
        compress
        prerotate
                /usr/bin/systemctl stop numblock.service
        endscript
        postrotate
                /usr/bin/systemctl start numblock.service
        endscript
}
```


Refer to the [Logging](#logging) section below for recommendations on log storage.

### Additional dependencies

`numblock` is statically compiled, requiring no additional host OS dependencies.

## Maintenance

Below are the best practices for maintaining a running validator node of a NumBlock network.

### Backup

There are two types of backup procedures recommended for NumBlock nodes. 

The suggestion is to use both, whenever possible, with the NumBlock backup being an always available option.

* ***Volume backup***:    
  Daily incremental backup of the `data/` volume of the NumBlock node, or of the complete VM if possible.


* ***NumBlock backup***:    
  Daily CRON job which does regular backups of NumBlock and moves the `.dat` files to an offsite location or to a secure cloud object storage is recommended. 

The NumBlock backup should ideally not overlap with the Volume backup described above.

Refer to [Backup/restore node instance] for instructions on how to perform backups of NumBlock.

### Logging

The logs outputted by the NumBlock nodes should:
- be sent to an external data store with indexing and searching capabilities
- have a log retention period of 30 days

If this is your first time setting up a NumBlock validator, we recommend to start the node
with the `--log-level=DEBUG` option to be able to quickly debug any issues you might face.

:::info
The `--log-level=DEBUG` will make the node's log output be as verbose as possible.   
Debug logs will drastically increase the size of the log file which must be taken into account when setting up
log rotation solution.
:::
### OS security patches

Administrators need to ensure that the validator instance OS is always updated with the latest patches at least once every month.

## Metrics

### System metrics

Administrators need to setup some kind of system metrics monitor, (e.g. Telegraf + InfluxDB + Grafana or a 3rd party SaaS).

Metrics that need to be monitored and that need to have alarm notifications setup:

| Metric name           | Alarm threshold               |
|-----------------------|-------------------------------|
| CPU usage (%)         | > 90% for more than 5 minutes |
| RAM utilization (%)   | > 90% for more than 5 minutes |
| Root disk utilization | > 90%                         |
| Data disk utilization | > 90%                         |

### Validator metrics

Administrators need to setup collection of metrics from NumBlock's Prometheus API to be able to
monitor the blockchain performance.

Refer to [Prometheus metrics] to understand which metrics are being exposed and how to set up Prometheus metric collection.


Extra attention needs to be paid to the following metrics:
- ***Block production time*** - if block production time is higher than normal, there is a potential problem with the network
- ***Number of consensus rounds*** - if there is more than 1 round, there is a potential problem with the validator set in the network
- ***Number of peers*** - if the number of peers drop, there is a connectivity issue in the network

## Security

Below are the best practices for securing a running validator node of a NumBlock network.

### API services

- ***JSON-RPC*** - 
Only API service that needs to be exposed to the public ( via load balancer or directly ).   
This API should run on all interfaces or on a specific IP address ( example: `--json-rpc 0.0.0.0:8545` or `--json-prc 192.168.1.1:8545`  ).
:::info
As this is publicly facing API it is recommended to have a load balancer / reverse proxy in front of it to provide security and rate limiting.
:::


- ***LibP2P*** - 
This is the networking API used by nodes for peer communication. It needs to run on all interfaces or on a specific ip address 
( `--libp2p 0.0.0.0:1478` or `--libp2p 192.168.1.1:1478` ). This API should not be publicly exposed, 
but it should be reachable from all other nodes. 
:::info
If ran on localhost ( `--libp2p 127.0.0.1:1478` ) other nodes will not be able to connect.
:::


- ***GRPC*** - 
This API is used only for running operator commands and noting else. As such it should run exclusively on localhost ( `--grpc-address 127.0.0.1:9632` ).

### NumBlock secrets

NumBlock secrets ( `ibft` and `libp2p` keys ) should not be stored on a local file system.  
Instead, a supported [Secret Manager] should be used.   
Storing secrets to local file system should only be used in non-production environments.

## Update

Following is the desired update procedure for validator nodes, described as step-by-step instructions.

### Update procedure 

- Download the latest NumBlock binary from the official GitHub [releases](https://github.com/numblock/releases)
- Stop the NumBlock service ( example: `sudo systemctl stop numblock.service` )
- Replace the existing `numblock` binary with the downloaded one ( example: `sudo mv numblock /usr/local/bin/` )
- Check if correct `numblock` version is in place by running `numblock version` - it should correspond to the release version 
- Check the release documentation if there are any backwards compatibility steps needed to be done before starting `numblock` service
- Start `numblock` service ( example: `sudo systemctl start numblock.service` )
- Finally, check the `numblock` log output and make sure everything is running without any `[ERROR]` logs

:::warning
When there is a breaking release, this update procedure must be performed on all nodes as 
the currently running binary is not compatible with the new release.  

This means that the chain must be halted for a short period of time ( until `numblock` binaries are replaced and service restarted ) 
so plan accordingly.   

You can use tools like **[Ansible](https://www.ansible.com/)** or some custom script to perform the update efficiently 
and minimize chain downtime.
:::

## Startup procedure

Following is the desired flow of the startup procedure for NumBlock validator

- Read through the docs listed in [Knowlege Base](#knowledge-base) section
- Apply the latest OS patches on the validator node
- Download the latest `numblock` binary from the official GitHub [releases](https://github.com/numblock/releases) and place it in local instance `PATH`
- Initialize one of the supported [secrets managers] using `numblock secrets generate` CLI command
- Generate and store secrets using `numblock secrets init` [CLI command](/docs/validators/cli-commands#secrets-init-flags)
- Take note of `NodeID` and `Public key (address)` values
- Generate `genesis.json` file as described in [cloud setup] using `numblock genesis` [CLI command](docs/validators/cli-commands#genesis-flags)
- Generate default config file using `numblock server export` [CLI command]
- Edit `default-config.yaml` file to accommodate local validator node environment ( file paths, etc. )
- Create a NumBlock service ( `systemd` or similar ) where `numblock` binary will run the server from a `default-config.yaml` file
- Start NumBlock server by starting the service ( example: `systemctl start numblock` )
- Check the `numblock` log output and make sure the blocks are being generated and that there are no `[ERROR]` logs
- Check the chain functionality by calling a JSON-RPC method like [`eth_chainId`]
