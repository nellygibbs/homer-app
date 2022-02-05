import {Card} from "react-bootstrap";
const ListingCard = (props) => {
    return(
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.home.image}/>
  <Card.Body>
    <Card.Title>{props.home.address}</Card.Title>
    <Card.Text>
        {props.home.city},{props.home.state}
    </Card.Text>
    <Card.Text>
        Bedrooms: {props.home.bedrooms}
    </Card.Text>
    <Card.Text>
        Bathrooms: {props.home.bathrooms}
    </Card.Text>
    <Card.Text>
        Asking: ${props.home.asking}
    </Card.Text>
  </Card.Body>
</Card>
    )
}

export default ListingCard;