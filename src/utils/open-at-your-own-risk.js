import request from 'superagent';



export async function signUp(credentials) {
  const response = await request
    .post('/auth/signup')
    .ok(res => res.status < 500)
    .send(credentials);

  if (response.status === 400) {
    throw response.body;
  }

  return response.body;
};

export async function signIn(credentials) {
  const response = await request
    .post('/auth/signin')
    .ok(res => res.status < 500)
    .send(credentials);

  if (response.status === 400) {
    throw response.body;
  }
  return response.body;
};

export async function addTask(task) {
  const response = await request
    .post('/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send(task);

  return response.body;
}

export async function getTadoList() {
  const response = await request
    .get('/me/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'));
  return response.body;
}