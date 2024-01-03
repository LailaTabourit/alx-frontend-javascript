/* eslint-disable no-unused-vars */
/*by laila */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
/* eslint-disable no-unused-vrs */
