const commentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const comment = document.querySelector('#comment-area').value.trim();
    const post_id = document.querySelector("#postId").value;
  
    if (comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ post_id, comment }),
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
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);
  
  
  