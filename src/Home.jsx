import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="">

                </img>
                <div className="home_row">
                    <Product
                    id="1234234"
                    title="The lean startup"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                    /> 
                    <Product
                    id="4535346535"
                    title="Kenwood kMix Stand Mixer for baking, Stylish kitchen Mixer with
                    K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.50}
                    image="https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SX569_.jpg"
                    rating={4}
                    />
                </div>
                <div className="home_row">
                    <Product
                    id="4535324345"
                    title="Apple AirPods (2nd Generation)"
                    price={219.99}
                    image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg"
                    rating={5}
                    />
                    <Product
                    id="324345"
                    title="Winix 5500-2 Air Purifier with True HEPA, PlasmaWave and Odor Reducing Washable AOC Carbon Filter Medium , Charcoal Gray"
                    price={158.94}
                    image="https://m.media-amazon.com/images/I/61jIxnC5IkL._AC_SL1500_.jpg"
                    rating={6}
                    />
                    <Product
                    id="32434534324"
                    title="Elexus SmartWatches for Men Women,Fitness Tracker Heart Rate Monitor Activity Watches Pedometer Sport, Waterproof Step Counter with Sleep Monitor Smart Watch Compatible iPhone and Android Phone"
                    price={31.98}
                    image="https://m.media-amazon.com/images/I/61+tvs1362L._AC_SL1500_.jpg"
                    rating={4}
                    />
                </div>
                <div className="home_row">
                <Product
                    id="32408789324"
                    title="Introducing Amazon Fire TV 55 4-Series 4K UHD smart TV"
                    price={379.98}
                    image="https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SL1000_.jpg"
                    rating={3}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Home
