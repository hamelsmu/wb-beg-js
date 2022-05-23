fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) =>
    // The API call was successful!
    response.json()
  )
  .then((data) => {
    // This is the JSON from our response
    console.log(data);
  })
  .catch((err) => {
    // There was an error
    console.warn('Something went wrong.', err);
  });
