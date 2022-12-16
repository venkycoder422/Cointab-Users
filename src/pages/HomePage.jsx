import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import {FaUserPlus,FaUserMinus} from 'react-icons/fa'
import {CgUserAdd,CgUserList,CgUserRemove} from 'react-icons/cg'
export const HomePage = () => {
    const [data, setData] = useState([]);

    const GetUsers = () => {

        axios({
            method: 'get',
            url: 'https://randomuser.me/api/',

        })
            .then((res) => setData(res.data.results))
            .catch((err) => console.log(err));


    }

    console.log(data[0]);
    return (
        <Container>
            <div className="user">
                <CgUserAdd />
                <button onClick={GetUsers}>User</button>
            </div>
            <div className="user-details">
                <CgUserList />
                <button>User details</button>
            </div>
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