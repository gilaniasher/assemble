import bcrypt from 'bcryptjs';
const endpoint = 'http://127.0.0.1:3000';

export const createUser = async (name, email, password) => {
    // Use bcrypt to hash the password with 10 rounds of salt
    const res = await bcrypt.hash(password, 10, function(err, passHash) {
        console.log('passHash: ' + passHash);

        return fetch(
            `${endpoint}/CreateUser?name=${name}&email=${email}&passHash=${passHash}`,
            {method: 'POST'}
        );
    });
    
    if (res.statusCode === '200') {
        console.log('User created succesfully');
        return '200';
    } else {
        console.log(res.error);
        return res.error;
    }
}
