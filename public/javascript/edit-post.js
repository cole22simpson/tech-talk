async function editFormHandler(event) {
  event.preventDefault();

  const new_post_title = document.querySelector('input[name="edit-post-title"]').value.trim();
  const new_post_text = document.querySelector('input[name="edit-post-text"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      new_post_title,
      new_post_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
