import bcrypt from 'react-native-bcrypt';
import isaac from 'isaac';

const endpoint = 'http://192.168.1.224:3000';

bcrypt.setRandomFallback((len) => {
	const buf = new Uint8Array(len);
	return buf.map(() => Math.floor(isaac.random() * 256));
});

export const createUser = async (name, email, password) => {
    // Use bcrypt to hash the password with 10 rounds of salt
    const passHash = await new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, function(err, hash) {
            if (err) {
                reject(err)
            } else {
                resolve(hash)
            }
        });
    })

    // Update database with this new user
    const res = await fetch(
        `${endpoint}/CreateUser?name=${name}&email=${email}&passHash=${passHash}`,
        {method: 'POST'}
    );
    
    if (res.status === 200) {
        console.log('User created succesfully');
        return '200';
    } else {
        const json_res = await res.json();
        console.log(json_res.error);
        return res.error;
    }
}
