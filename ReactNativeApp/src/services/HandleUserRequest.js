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

export const validateUser = async (email, password) => {
    // Make API call to get user's passHash if email exists in database
    let res = await fetch(
        `${endpoint}/AuthenticateUser?email=${email}`,
        {method: 'POST'}
    );

    let json_res;

    if (res.status === 200) {
        json_res = await res.json();
    } else {
        return 'Something went wrong. Is your email correct?';
    }

    // Verify passHash on client side to prevent sending plaintext password through network
    if (bcrypt.compareSync(password, json_res.passHash)) {
        return '200';
    } else {
        return 'Invalid password';
    }
}
