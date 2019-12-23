const endpoint = 'https://5rkuwffbv7.execute-api.us-east-2.amazonaws.com/default';

export const validateUser = async (username, password) => {
    try {
        const response = await fetch(
            `http://${endpoint}/userinfo?username=${username}&password=${password}`,
            {method: 'POST'}
        );

        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};
