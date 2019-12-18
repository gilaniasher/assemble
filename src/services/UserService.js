const endpoint = '';

export const authenticateUser = async (username, password) => {
    try {
        const response = await fetch(
            `http://${endpoint}/authenticateuser?username=${username}&password=${password}`,
            {method: 'POST'}
        );

        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};
