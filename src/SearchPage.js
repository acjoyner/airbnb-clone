import React from 'react'
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bthrooms 
                - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="$30 /night"
                total="$117 total"
            />
            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in center of London"
                title="Independent luxury studio apartment"
                description="2 guest - 3 bedroom - 1 bed - 1.5 shared bthrooms - Wifi - Kitchen"
                star={4.3}
                price="$40 /night"
                total="$157 total"
            />
            <SearchResult
                img="https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2017/06/18152255/Screen-Shot-2018-01-30-at-17.06.11.png"
                location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest - 4 bedroom - 4 bed - 2 bathrooms - Free parking 
                - Washing"
                star={3.8}
                price="$35 /night"
                total="$207 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5c5882db9fa54c2152eca6aa/master/pass/london-12997485-2-airbnb.jpg"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bthrooms - Wifi - Kitchen - Free Parking
                - Wasing Machine"
                star={4.1}
                price="$55 /night"
                total="$320 total"
            />
            <SearchResult
                img="https://media.timeout.com/images/105434208/image.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest - 1 bedroom - 1 bed - 1.5 shared bthrooms - Wifi - Free parking
                - Dry Cleaning"
                star={5.0}
                price="$60 /night"
                total="$450 total"
            />
        </div>
    )
}

export default SearchPage
