import ListingCard from '../components/ListingCard';

const Listings = (props) => {
    return (
        <div className="cards">
            {props.homes.map((item) => {
                return <ListingCard key={item._id} home={item} />
            })}
        </div>
    )
};

export default Listings;