let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if (displayName) {
    form.name.value = displayName
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    sessionStorage.setItem('display_name', e.target.name.value)

    let inviteCode = e.target.room.value;
    if (!inviteCode) {
        let users;
        const usersinlive = async () => {
            await fetch('http://localhost:5000/usersinlive').then((response) => {
                if (!response.ok) {
                    throw new Error("Unable to fetch users from userinlive collection")
                }
                return response.json()
            }).then((data) => {
                users = data.users
            }).catch((err) => {
                console.log(err)
            })

            inviteCode = users[0].room
            console.log(inviteCode)
            let obj = {
                id: 0
            };
            obj.id = users.id;

            await fetch('http://localhost:5000/deleteuser', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then((response) => {
                if (!response.ok) {
                    throw new Error("Unable to delete")
                }
                return response.json()
            }).then((data) => {
                console.log(data)
            }).catch((err) => {
                console.log(err)
            })

            window.location = `room.html?room=${inviteCode}`
        }
        usersinlive()
    }
    else {
        // inviteCode=Math.floor(Math.random() * 101);
        window.location = `room.html?room=${inviteCode}`
    }

})

