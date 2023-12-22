import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
    id:1,
    image: require('../assets/images/download (2).jpg'),
    title:'The perfect design',
    description:'lore',
    link:'cc.com '
    },
    {
    id:2,
    image: require('../assets/images/download.jpg'),
    title:'The perfect design',
    description:'lore',
    link:'cc.com '
    }
    ]

export default function AppHero()
{
return(<div>
<section id="home" className="hero-block">
<Carousel>
    {
     heroData.map(hero=>{
        return(
            <Carousel.Item>
            <img className='d-block w-100' src={hero.image} alt={"first slide"+hero.id}/>
            <Carousel.Caption>
                <h3>Brickfolio Tech</h3>
            </Carousel.Caption>
            </Carousel.Item>
        )
        
     })   
    }
     
    </Carousel>
</section>

</div>)
}