import React from 'react'

const UserList = ({listOfUser}) => {

    return (
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope='col'>Street</th>
                        <th scope='col'>Suite</th>
                        <th scope='col'>City</th>
                        <th scope='col'>Zipcode</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Website</th>
                        <th scope='col'>Company's name</th>
                        <th scope='col'>CatchPrase</th>
                        <th scope='col'>BS</th>
                    </tr>
                </thead>
                {listOfUser.map((user) => 
                    <tbody>
                        <tr>
                        <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.address.street}</td>
                            <td>{user.address.suite}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.zipcode}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td>{user.company.catchPhrase}</td>
                            <td>{user.company.bs}</td>
                        </tr>
                    </tbody>)}
            </table>
        </div>
    )
}

export default UserList;

