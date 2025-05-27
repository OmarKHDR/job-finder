import { hash, compare } from 'bcrypt';


class Crypto {
	static async getHash(password: string) {
		const saltRounds = 10;
		return hash(password, saltRounds);
	}

	static async verifyPassword(password: string, hashstring: string) {
		return compare(password, hashstring);
	}
}

export default Crypto;