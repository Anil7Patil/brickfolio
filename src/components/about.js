import Container from 'react-bootstrap/Container';
export default function AppAbout()
{
return(
    <section id="about" className="block about-block">

<Container fluid>
    <div className='title-holder'>
        <h2>About Us</h2>
        <p>Note that the development build is not optimized.
To create a production build, use npm run build. </p>
    </div>
      
    </Container>
    </section>
    
)
}