import React from 'react'
import styled from 'styled-components'
export const UserDetails = () => {
    return (
        <Container>
            <div className="user-content">

                <div className="filters">
                    <select>
                        <option>None</option>
                        <option>asc</option>
                        <option>desc</option>
                    </select>
                </div>
                <div className="table-data">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>User Name</th>
                                <th>Emails</th>
                                <th>Phone No.</th>
                                <th>Gender</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>VENKY</td>
                                <td>test@gmail.com</td>
                                <td>11111111</td>
                                <td>Male</td>
                                <td>33</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="paginations-content">
                    <div>
                        <button>Left</button>
                    </div>
                    <div>
                        <button>Right</button>
                    </div>
                </div>
            </div>
        </Container>
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
        float:right;
        margin:0.4rem;
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
`