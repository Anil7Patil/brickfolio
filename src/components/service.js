import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useEffect, useState} from "react";

const API = "https://jsonplaceholder.typicode.com/users";
export default function AppService()
{
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])

return(

    <section id="service" className="block service-block">

<Container fluid>
    <div className='title-holder'>
    <table>
            <thead>
            <tr>
                <th>users.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
          
            </tbody>
        </table>
    </div>
      <Row>
        
      </Row>
    </Container>
    </section>
    
)
}