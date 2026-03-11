import React, { ChangeEvent, useState } from 'react'

type ProfileCard = {
    username: string,
    bio: string,
    role: string,
}
function ProfileCard() {
    const [profile, setProfile] = useState<ProfileCard>({
        username: '',
        bio: '',
        role: 'Devoloper'
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
        const {value, name} = e.target;
        setProfile((prev) => ({...prev , [name]: value}))
    }
  return (
    <>
    <div><h1>ProfileCard </h1>
    <form>
    <input name="username" value={profile.username} onChange={handleChange} placeholder='Enter your name'/>
   
    <textarea name="bio"value={profile.bio} placeholder='Enter your bio' onChange={handleChange} />
   
    <select name= "role" value={profile.role} onChange={handleChange}  >
        <option value={'tutor'}> Tutor </option>
        <option value={'director'}> Director</option>
        <option value={'developer'}> Developer</option>
    </select>
    
    <input type="submit"/>
    </form>
    </div>
    <div style={{border: '2px solid red'}}>
    <p>Your user name is {profile.username|| 'default name'}</p>
    <p>Your Bio is : {profile.bio || 'bio'}</p>
    <p>Your role is : {profile.role}</p>
    </div>
    </>
  )
}

export default ProfileCard