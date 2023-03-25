1. How to compile 
```cmd
truffle develop
```

```
truffle(develop)> compile
```

```
truffle(develop)> migrate --reset
```

```
truffle(develop)> token = await MyToken.deployed();
```

2. How to test
```cmd
truffle(develop)> name = await token.name();
'Token'
```
````
truffle(develop)> symbol = await token.symbol();
'LKC'
````
```
truffle(develop)> decimals = (await token.decimals()).toString()
'18'
```

3. How to deploy to goerli testnet

```cmd
truffle migrate --network goerli --reset
```