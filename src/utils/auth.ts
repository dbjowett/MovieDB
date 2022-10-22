import { hash, compare } from 'bcryptjs';

export async function hashPwd(password) {
  const hashedPwd = await hash(password, 10);
  return hashedPwd;
}

export async function comparePwd(password, hashedPwd) {
  const isSame = await compare(password, hashedPwd);
  return isSame;
}
