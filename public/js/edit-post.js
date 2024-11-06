
const editPostHandler = async (event) => {
    event.preventDefault();
 
    // Collect values from the login form
    const post_id = document.querySelector('#postid').value.trim();
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
  
    console.log(post_id)
    console.log(title)
    console.log(description)

    if (title && description) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ post_id, title, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#update-post-form')
    .addEventListener('submit', editPostHandler);  