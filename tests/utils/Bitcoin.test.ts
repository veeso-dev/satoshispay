import { it, expect } from '@jest/globals';
import { privateKeyToWIF } from '../../src/utils/bitcoin';

it('should convert private key to WIF', () => {
  expect(
    privateKeyToWIF([
      0x2e, 0x3e, 0x4f, 0x5e, 0x6f, 0x7e, 0x8f, 0x9e, 0xae, 0xbe, 0xce, 0xde,
      0xee, 0xfe, 0x0e, 0x1e, 0x2e, 0x3e, 0x4f, 0x5e, 0x6f, 0x7e, 0x8f, 0x9e,
      0xae, 0xbe, 0xce, 0xde, 0xee, 0xfe, 0x0e, 0x1e,
    ]),
  ).toStrictEqual('KxmbsQ7MaqN6XRGJwPtTzFxqewsyXgnfbqVFu8AoVXx6ZBEYReY1');
});