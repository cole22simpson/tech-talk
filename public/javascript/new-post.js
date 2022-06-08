async function newFormHandler(event) {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="new-title"]').value;
  const postText = document.querySelector('input[name="new-content"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      postTitle,
      postText
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.submit-new-post').addEventListener('submit', newFormHandler);
