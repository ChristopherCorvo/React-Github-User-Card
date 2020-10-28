import React from 'react'
import styled from 'styled-components'

const UserPage = styled.div`
    display: flex;
    flex-direction: column;

    
    .User_Container{ 
        display: flex;
        flex-direction: column;
        
        
    }

    .mainUser{
        display: flex;
        flex-direction:column;
        border: 1px solid black;
        width: 20%;
        align-self: center;
        margin-top: 3%;
        margin-bottom: 2%;
    }

    .profileInfo{
        background: mistyrose;
    }
`

const Followers = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
    

    .follower{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        margin-left: 1%;
        margin-top: 1%;
        width: 20%;
        
    }

    img{
        max-width: 100%;
        align-self: center;
        
    }
`

class UserCard extends React.Component {
 
    render() {
        
        return (
            <UserPage>
                <div className="User_Container">
                    <div className='mainUser'>
                        <img src={this.props.data.avatar_url} alt={this.props.data.avatar_url}/>
                        <div className='profileInfo'>
                            <h3> Name: {this.props.data.name}</h3>
                            <h3> Username:{this.props.data.login}</h3>
                        </div>
                    </div>
                </div>
                <h2> Follower: </h2>
                <Followers>
                    
                    {this.props.followerData.map(follower => {
                    return (
                        <div className='follower'>
                            <img src={follower.avatar_url} alt={follower.avatar_url}/>
                            
                            <div className='profileInfo'> 
                                <h3>Name: {follower.name}</h3>
                                <h3>Username: {follower.login}</h3>
                            </div>
                        </div>
                    )
                })}
                </Followers>
            </UserPage>
        )
    }
}
export default UserCard


