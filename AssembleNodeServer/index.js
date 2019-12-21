exports.handler = async (event) => {
    let resBody;
    
    if (event.resource === '/updateuser') {
        resBody = updateUser(event);
    } else if (event.resource === '/userinfo') {
        resBody = getUserInfo(event);
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(resBody),
    };
    
    return response;
};

function updateUser(event) {
    let my_str = '';
    
    if (event.httpMethod === 'PUT') {
        // Update user info
        my_str = 'PUT from UpdateUser';
    } else if (event.httpMethod === 'DELETE') {
        // Remove user
        my_str = 'DELETE from UpdateUser';
    } else if (event.httpMethod === 'POST') {
        // Create new user
        my_str = 'POST from UpdateUser';
    } else {
        my_str = 'Unsupported HTTP verb for UpdateUser';
    }
    
    return my_str;
}

function getUserInfo(event) {
    let my_str = '';
    
    if (event.httpMethod === 'POST') {
        // Verify Login Info
        my_str = 'POST from UserInfo';
    } else if (event.httpMethod === 'GET') {
        // Request User profile
        my_str = 'GET from UserInfo';
    } else {
        my_str = 'Unsupported HTTP verb for UserInfo';
    }
    
    return my_str;
}
