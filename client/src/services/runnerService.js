import { API_URL } from "../constants";

async function fetchAllRunners() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw response;
  } else {
    return response.json();
  }
}

async function fetchRunner(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw response;
  } else {
    return response.json();
  }
}

async function createRunner(runner) {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: runner
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function updateRunner(id, runner) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(runner)
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();

}

async function deleteRunner(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  if (response.status === 204) {
    return null;
  } 
    return response.json();
}


export { fetchAllRunners, deleteRunner, fetchRunner, createRunner, updateRunner };