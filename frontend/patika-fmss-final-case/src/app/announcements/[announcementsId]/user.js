


const fetchUsers = async () => {
  // await new Promise(r => setTimeout(r, 600));
  const res = await fetch('https://localhost:8085/api/v1/users', {
    body
  } )
  const resData = await res.json();
  return resData;
}

export default async function User() {
  const users = await fetchUsers();

  return (
    <div>
      <h2>User</h2>
      {users[0].email}
    </div>
  )
}