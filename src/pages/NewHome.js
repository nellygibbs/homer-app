import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const NewHome = (props) => {
    const history = useHistory();
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [bedrooms, setBedrooms] = useState(0)
    const [bathrooms, setBathrooms] = useState(0)
    const [image, setImage] = useState('')
    const [asking, setAsking] = useState('')
    const [hoa, setHoa] = useState(false)

    const stateAbbreviations = [
        'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
        'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
        'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
        'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
        'VT','VI','VA','WA','WV','WI','WY'
       ];

    const handleSubmit = async (event) => {
        event.preventDefault()
        await props.addHome({
            address, 
            city, 
            state, 
            bedrooms, 
            bathrooms, 
            image, 
            asking,
            hoa
        })
        history.push('/');
    }

    return (
        <div className="form-container">
            <Form className="newForm" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control value={address} onChange={(event) => setAddress(event.target.value)} type="text" placeholder="Enter address"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control value={city} onChange={(event) => setCity(event.target.value)} type="text" placeholder="Enter city"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicState">
                    <Form.Label>State</Form.Label>
                    <Form.Select value={state} onChange={(event) => setState(event.target.value)}>
                        <option>Select a State</option>
                        {stateAbbreviations.map((item) => {
                            return <option value={item}>{item}</option>
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBedrooms">
                    <Form.Label>Bedrooms</Form.Label>
                    <Form.Control value={bedrooms} onChange={(event) => setBedrooms(event.target.value)} type="number"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBathrooms">
                    <Form.Label>Bathrooms</Form.Label>
                    <Form.Control value={bathrooms} onChange={(event) => setBathrooms(event.target.value)} type="number"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAsking">
                    <Form.Label>Asking Price</Form.Label>
                    <Form.Control value={asking} onChange={(event) => setAsking(event.target.value)} type="text" placeholder="Asking Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicHoa">
                    <Form.Check checked={hoa} onChange={(event) => setHoa(event.target.checked)} type="checkbox" label="HOA" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
};

export default NewHome;