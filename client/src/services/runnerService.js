import { RUNNERS_API_URL, SEARCH_API_URL } from "../constants";

async function fetchAllRunners() {
  const response = await fetch(RUNNERS_API_URL);
  if (!response.ok) {
    throw response;
  } else {
    return response.json();
  }
}

async function fetchRunner(id) {
  const response = await fetch(`${RUNNERS_API_URL}/${id}`);
  if (!response.ok) {
    throw response;
  } else {
    return response.json();
  }
}

async function createRunner(runner) {
  const response = await fetch(RUNNERS_API_URL, {
    method: 'POST',
    body: runner
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function updateRunner(id, runner) {
  const response = await fetch(`${RUNNERS_API_URL}/${id}`, {
    method: 'PUT',
    body: runner,
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();

}

async function deleteRunner(id) {
  const response = await fetch(`${RUNNERS_API_URL}/${id}`, {
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

async function searchRunners(query) {
  const response = await fetch(`${SEARCH_API_URL}/runners/?q=${query}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}


export { fetchAllRunners, deleteRunner, fetchRunner, createRunner, updateRunner, searchRunners };