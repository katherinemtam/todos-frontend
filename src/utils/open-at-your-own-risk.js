import request from 'superagent';



export async function signUp(credentials) {
  const response = await request
    .post('/auth/signup')
    .send(credentials);

  return response.body;
};

export async function signIn(credentials) {
  const response = await request
    .post('/auth/signin')
    .send(credentials);

  return response.body;
};