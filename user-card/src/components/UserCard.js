import React from 'react'

const UserCard = (props) => {
    const { data, followerData } = props

    console.log(followerData[0].login)
    return (
        <div className="UserCard">
            <div className="User_Container">
                <img src={data.avatar_url} alt={data.avatar_url}/>
                <h3> Name: {data.name}</h3>
                <h3> Username:{data.login}</h3>
            </div>

            <div className='followers'>
                <h2> Follower: </h2>
            {followerData.map(follower => {
                return (
                    <div>
                        <img src={follower.avatar_url} alt={follower.avatar_url}/>
                        <h3>Name: {follower.name}</h3>
                        <h3>Username: {follower.login}</h3>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default UserCard


