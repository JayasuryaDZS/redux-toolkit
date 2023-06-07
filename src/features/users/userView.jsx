import React from "react";
import {useSelector, useDispatch} from "react-redux"
import {fetchUsers} from "./userSlice"

const UserView = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchUsers())
    },[])
    console.log(user, "Checking the user object")
    return(
        <div>
            <h2>List of Users</h2>
            {user.loading && <h1>Loading...</h1>}
            {!user.loading && user.error ? <h2>{user.error}</h2> : null}
            {!user.loading && user.user.length ? (
                <ul>
                    {user.user.map(data => (
                        <li key={data.id}>
                            {data.name}
                        </li>
                    ))}
                </ul>
            ) : null} 
        </div>
    )
}

export default UserView;