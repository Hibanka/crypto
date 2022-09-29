# @hibanka/crypto

![CI](https://github.com/Hibanka/crypto/actions/workflows/ci.yml/badge.svg)
[![NPM Version](https://badgen.net/npm/v/@hibanka/crypto)](https://npmjs.com/package/@hibanka/crypto)
[![Minimum Node.JS Version](https://badgen.net/npm/node/@hibanka/crypto)](https://npmjs.com/package/@hibanka/crypto)

Node.js encryption/decryption library.

## Installation

```bash
npm install @hibanka/crypto
```

## Documentation

### 1. Encrypt

```ts
import { encrypt } from '@hibanka/crypto';

const encrypted = encrypt('Hello World!', 'secret');
// OR
const encrypted = encrypt('Hello World!', 'secret', 'aes-256-ctr');
```

### 2. Decrypt

```ts
import { decrypt } from '@hibanka/crypto';

const decrypted = decrypt(encrypted, 'secret');
// OR
const decrypted = decrypt(encrypted, 'secret', 'aes-256-ctr');
```
