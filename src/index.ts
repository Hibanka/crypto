import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';

export function encrypt(value: string, secret: string, algorithm = 'aes-256-ctr'): string {
  const iv = randomBytes(16);
  const cipher = createCipheriv(algorithm, secret, iv);
  const encrypted = Buffer.concat([cipher.update(value), cipher.final()]);
  return [iv.toString('hex'), encrypted.toString('hex')].join('-');
}

export function decrypt(value: string, secret: string, algorithm = 'aes-256-ctr'): string {
  const [iv, encrypted] = value.split('-');
  const decipher = createDecipheriv(algorithm, secret, Buffer.from(iv, 'hex'));
  const decrpyted = Buffer.concat([decipher.update(Buffer.from(encrypted, 'hex')), decipher.final()]);
  return decrpyted.toString();
}
