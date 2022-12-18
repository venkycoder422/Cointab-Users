import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { usePagination } from "use-pagination-hook"
import { HomePage } from './HomePage'
import { Link } from 'react-router-dom'
import {FaArrowCircleLeft} from 'react-icons/fa'
export const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const { current, pages, display, next, previous } = usePagination({ items: users, size: 10 })
    const sorting = (e) => {
        const sorting = e.target.value;
        let arr = [...users]
      
        console.log("working the sort")
        if(sorting === "none"){
            GetUsersData()
        }
        if (sorting === "asc") {
          arr.sort((a,b) => a.name - b.name);
          setUsers(arr);
        }
        if(sorting==="desc") {
          arr.sort((a,b) => b.name- a.name);
          setUsers(arr);
        }
        
        console.log(users);
      }
      
      const GetUsersData = ()=>{
        axios({
            method: 'get',
            url: 'http://localhost:3000/users',

        })
            .then((res) => setUsers(res.data))

            .catch((err) => console.log(err));
      }
    useEffect(() => {
        GetUsersData();
    }, [])
    console.log(users);
    return (
        <>
        <Container>
            <div className="user-content">

                <div className="filters">
                    <Link to='/'><FaArrowCircleLeft /></Link>
                    <select onChange={sorting}>                                           
                        <option value="none">None</option>
                        <option value="asc">asc</option>
                        <option value="desc">desc</option>
                    </select>
                </div>
                <div className="table-data">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>User</th>
                                <th>User Name</th>
                                <th>Emails</th>
                                <th>Phone No.</th>
                                <th>Gender</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {
                                    display.map((ele) => (
                                        <tr>
                                            <td key={ele.id}>{ele.id}</td>
                                            <td><img src={ele.image} alt="images" /></td>
                                            <td>{ele.name}</td>
                                            <td>{ele.email}</td>
                                            <td>{ele.cell}</td>
                                            <td>{ele.gender}</td>
                                            <td>{ele.age}</td>
                                        </tr>
                                    ))
                                }




                        
                        </tbody>
                    </table>
                </div>
                <div className="paginations-content">
                    <div>
                        <button disabled={current===1} onClick={previous}>Left</button>
                    </div>
                    <div>
                        <button disabled ={current==pages}onClick={next} >Right</button>
                    </div>
                </div>
            </div>
        </Container>
        </>
    )
}

const Container = styled.div`
    display:flex;
    width:100wh;
    height:100vh;
    background-color:black;
    justify-content:center;
    
    .filters{
        display:flex;
        margin:0.4rem;
        justify-content:space-between;
        svg{
            color:white;
        };
        select{
            font-weight:bold;
            background-image: linear-gradient(to right,rgba(2,0,36,1) 0%,rgba(97,9,121,1) 48%,rgba(0,212,255,1) 100%);
            padding:0.5rem 1.5rem;
            color:white;
            border-radios:0.5rem;
        }
        option{
            color:black;
            background-color: rgba(0,212,255,1) 100%);
        }
    }
    .user-content{
        margin-top:10rem;
        font-size:2rem;
    }
    table{
        background-image: linear-gradient(to right,red,yellow)

    }
    table,tr,th,td{
        border:2px solid white;
        text-align:center;
    }
    td{
    
    }
    .paginations-content{
        display:flex;
        justify-content:space-between;
        button{
            padding:0.6rem;
        }
    }
    tbody img{
        width:50px;
        height:50px;
    }
`