# @hibanka/crypto

![CI](https://github.com/Hibanka/crypto/actions/workflows/ci.yml/badge.svg)
[![NPM Version](https://badgen.net/npm/v/@hibanka/crypto)](https://npmjs.com/package/@hibanka/crypto)
[![Minimum Node.js Version](https://badgen.net/npm/node/@hibanka/crypto)](https://npmjs.com/package/@hibanka/crypto)

Node.js utility library for cryptographic functions

## Installation

```bash
npm install @hibanka/crypto
```

## Usage

### Encrypt

```ts
import { encrypt } from '@hibanka/crypto';

const encrypted = encrypt('Hello World!', 'secret');
// OR using another algorithm
const encrypted = encrypt('Hello World!', 'secret', 'aes-256-ctr');
// OR using another algorithm and encoding
const encrypted = encrypt('Hello World!', 'secret', 'aes-256-ctr', 'hex');
```

### Decrypt

```ts
import { decrypt } from '@hibanka/crypto';

const decrypted = decrypt(encrypted, 'secret');
// OR using another algorithm
const decrypted = decrypt(encrypted, 'secret', 'aes-256-ctr');
// OR using another algorithm and encoding
const decrypted = decrypt(encrypted, 'secret', 'aes-256-ctr', 'hex');
```

### Hash

```ts
import { hash } from '@hibanka/crypto';

const hashed = hash('Hello World!');
// OR using another algorithm
const hashed = hash('Hello World!', 'md5');
// OR using another algorithm and encoding
const hashed = hash('Hello World!', 'md5', 'hex');
```
