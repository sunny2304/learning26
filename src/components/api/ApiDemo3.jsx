{users.length>0 &&(
            <table border="1" align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>AGE</th>
                        <th>isActive</th>
                        <th>__v</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return<tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.age}</td>
                                <td>{user.isActive? "Yes" :"No"}</td>
                                <td>{user.__v}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        )


        }