


const Users = ({users=[]}) => {

    console.log('yes')

    return (
        <div style={{
            display:
                'flex',
            flexDirection: 'column',
            gap: 10,
        }}>
            {users.map(item => {
                const {id, username, email} = item;
                return (
                    <div
                        key={id}
                        style={{
                            background: 'lightgrey'
                        }}>
                        <div>ID: {id}</div>
                        <div>UserID: {username}</div>
                        <div>Title: {email}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default Users;