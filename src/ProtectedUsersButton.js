function ProtectedUsersButton() {
    const handleClick = () => {
        fetch('http://localhost:3000/users', {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
                // Authorization: `Bearer ${localStorage.getItem('token')}` ##above works due to a react update
            }
        })
        .then(response => response.json())
        .then(result => console.log(result))
    }

    return(
        <button onClick={handleClick}>Get Users</button>
    )
}

export default ProtectedUsersButton;