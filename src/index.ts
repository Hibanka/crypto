import { BinaryToTextEncoding, createCipheriv, createDecipheriv, createHash, randomBytes } from 'node:crypto';

export function encrypt(
  value: string,
  secret: string,
  algorithm = 'aes-256-ctr',
  encoding: BufferEncoding = 'hex',
): string {
  const iv = randomBytes(16);
  const cipher = createCipheriv(algorithm, secret, iv);
  const encrypted = Buffer.concat([cipher.update(value), cipher.final()]);
  return [iv.toString(encoding), encrypted.toString(encoding)].join('-');
}

export function decrypt(
  value: string,
  secret: string,
  algorithm = 'aes-256-ctr',
  encoding: BufferEncoding = 'hex',
): string {
  const [iv, encrypted] = value.split('-');
  const decipher = createDecipheriv(algorithm, secret, Buffer.from(iv, encoding));
  const decrpyted = Buffer.concat([decipher.update(Buffer.from(encrypted, encoding)), decipher.final()]);
  return decrpyted.toString();
}

export function hash(value: string, algorithm = 'md5', encoding: BinaryToTextEncoding = 'hex'): string {
  return createHash(algorithm).update(value).digest(encoding);
}
