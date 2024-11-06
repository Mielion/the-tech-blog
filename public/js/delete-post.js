const deletePostHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const postid = document.querySelector('#postid').value.trim();
    if (postid) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/posts/${postid}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
;        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#delete-btn')
    .addEventListener('click', deletePostHandler);  