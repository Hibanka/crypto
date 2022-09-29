import { expect } from 'chai';
import { decrypt, encrypt } from '../src';

describe('index', () => {
  it('encrypt/decrypt', () => {
    const values = ['Hello World', '1_-+!@#$%^&*()_+{}|:"<>?[]\\;\',./'];
    const secret = 's'.repeat(32);

    values.forEach((value) => {
      const encrypted = encrypt(value, secret);
      const decrypted = decrypt(encrypted, secret);
      expect(decrypted).eql(value);
    });
  });

  it('encrypt/decrypt with algorithm', () => {
    const values = ['Hello World', '1_-+!@#$%^&*()_+{}|:"<>?[]\\;\',./'];
    const secret = 's'.repeat(32);

    values.forEach((value) => {
      const encrypted = encrypt(value, secret, 'aes-256-cbc');
      const decrypted = decrypt(encrypted, secret, 'aes-256-cbc');
      expect(decrypted).eql(value);
    });
  });
});
