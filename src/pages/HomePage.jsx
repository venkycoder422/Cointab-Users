import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { FaUserPlus, FaUserMinus } from 'react-icons/fa'
import { CgUserAdd, CgUserList, CgUserRemove } from 'react-icons/cg'
export const HomePage = () => {
    const [data, setData] = useState([]);



    const GetUsers = () => {

        axios({
            method: 'get',
            url: 'https://randomuser.me/api/',

        })
            .then((res) => postuser(res.data.results[0]))

            .catch((err) => console.log(err));
        }

    const postuser = (data) => {
        console.log(data);
        const payload = {
            Id: +(data.id.value.slice(0,2)),
            image: data.picture.thumbnail,
            name: data.name.last,
            email: data.email,
            cell: data.cell,
            gender: data.gender,
            age: data.dob.age
        }
        axios({
            method:'post',
            url:'http://localhost:3000/user',
            data:payload
        }).then((response) => {
            console.log(response);
          });
    }

    
    return (
        <Container>
            <div className="user">
                <CgUserAdd />
                <button onClick={GetUsers}>User</button>
            </div>
            <Link to='/users'>
            <div className="user-details">
                <CgUserList />
                <button>User details</button>
            </div>
            </Link>
            <div className="delete">
                <CgUserRemove />
                <button>User delete</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    padding-top:4rem;
    justify-content:space-evenly;
    width:100wh;
    height:100vh;
    background-color:black;
    color:white;
    div{
        display:flex;
        flex-direction:column;
        align-items:center;
        svg{
            width:3rem;
            height:3rem;
        }
    }
    button{
        background-color:white;
        color:black;
        
        out-line:none;
        border-radius:0.2rem;
        font-weight:bold;
        font-size:1.4rem;
    }
`