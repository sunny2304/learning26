import React from 'react'
import "../assets/css/profile.css"
export const ProfileComponent = () => {
    var profile={
        name : "Virat Kohli",
        age : 37,
        team : "Royal Challengers Bengaluru",
        matches : 267,
        innings : 259,
        runs : 8661 , 
        highest : 113 ,
        avg : 39.55,
        sr : 132.59,
        fours : 771 ,
        sixes : 291 , 
        fifties : 63 , 
        hundreds : 8 ,
    }
  return (
    <div className='profile'>
        <table border={1} className='profiletable'>
            <tr>
                <td> {profile.name} </td>
                <td>
                    <img src="images.jfif" alt="" height="150px" width="200px" className='viratimg'/>
                </td>
            </tr>
            <tr>
                <td> Age </td>
                <td>{profile.age}</td>
            </tr>
            <tr>
                <td> Team </td>
                <td>{profile.team}</td>
            </tr>
            <tr>
                <td> Matches </td>
                <td>{profile.matches}</td>
            </tr>
            <tr>
                <td> Innings </td>
                <td>{profile.innings}</td>
            </tr>
            <tr>
                <td> Run </td>
                <td>{profile.runs}</td>
            </tr>
            <tr>
                <td> Highest Score </td>
                <td>{profile.highest}</td>
            </tr>
            <tr>
                <td> Average </td>
                <td>{profile.avg}</td>
            </tr>
            <tr>
                <td> StrikeRate </td>
                <td>{profile.sr}</td>
            </tr>
            <tr>
                <td> 4s </td>
                <td>{profile.fours}</td>
            </tr>
            <tr>
                <td> 6s </td>
                <td>{profile.sixes}</td>
            </tr>
            <tr>
                <td> 50s </td>
                <td>{profile.fifties}</td>
            </tr>
            <tr>
                <td> 100s </td>
                <td>{profile.hundreds}</td>
            </tr>
        </table>
    </div>
  )
}
