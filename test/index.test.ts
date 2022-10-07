import { expect } from 'chai';
import { decrypt, encrypt, hash } from '../src';

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

  it('encrypt/decrypt with encoding', () => {
    const values = ['Hello World', '1_-+!@#$%^&*()_+{}|:"<>?[]\\;\',./'];
    const secret = 's'.repeat(32);

    values.forEach((value) => {
      const encrypted = encrypt(value, secret, undefined, 'base64');
      const decrypted = decrypt(encrypted, secret, undefined, 'base64');
      expect(decrypted).eql(value);
    });
  });

  it('encrypt/decrypt with algorithm and encoding', () => {
    const values = ['Hello World', '1_-+!@#$%^&*()_+{}|:"<>?[]\\;\',./'];
    const secret = 's'.repeat(32);

    values.forEach((value) => {
      const encrypted = encrypt(value, secret, 'aes-256-cbc', 'base64');
      const decrypted = decrypt(encrypted, secret, 'aes-256-cbc', 'base64');
      expect(decrypted).eql(value);
    });
  });

  it('hash', () => {
    const hashed = hash('Hello World');
    expect(hashed).eql('b10a8db164e0754105b7a99be72e3fe5');
  });

  it('hash with algorithm', () => {
    const hashed = hash('Hello World', 'sha1');
    expect(hashed).eql('0a4d55a8d778e5022fab701977c5d840bbc486d0');
  });
});
