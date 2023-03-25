1. How to compile 
```cmd
truffle develop
```

```
truffle(develop)> compile
```


2. How to deoploy local network

```cmd
truffle(develop)> migrate --reset
```



3. How to test
```
truffle(develop)> token = await MyToken.deployed();
```

```
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

4. How to deploy to goerli testnet

```cmd
truffle migrate --network goerli --reset
```