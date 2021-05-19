import request from 'superagent';

export async function signUp(credentials) {
  const response = await request
    .post('/api/auth/signup')
    .ok(res => res.status < 500)
    .send(credentials);

  if (response.status === 400) {
    throw response.body;
  }

  return response.body;
};

export async function signIn(credentials) {
  const response = await request
    .post('/api/auth/signin')
    .ok(res => res.status < 500)
    .send(credentials);

  if (response.status === 400) {
    throw response.body;
  }
  return response.body;
};

export async function addTask(task) {
  const response = await request
    .post('/api/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send(task);

  return response.body;
}

export async function getTadoList() {
  const response = await request
    .get('/api/me/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'));
  return response.body;
}

export async function deleteTask(id){
  const response = await request
    .delete(`/api/todos/${id}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function updateTaskCompleted(task, completed) {
  const response = await request
    .put(`/api/todos/${task.id}`)
    .send(completed)
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}
