//creating a user 
export const postUser = user => {
  return (
    $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {user}
  }));
};

//signing a user in 
export const postSession = user => {
  return( 
    $.ajax({
      url: '/api/session',
      method: 'POST',
      data: {user}
    }));
};


//signing a user out 
export const deleteSession = () => {
  return (
    $.ajax({
    url: '/api/session',
    method: 'DELETE'
  }))
};