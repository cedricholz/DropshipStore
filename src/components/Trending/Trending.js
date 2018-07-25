import React from 'react';
import "./trendingstyles.css"
import ProductCard from "../ProductCard/ProductCard";
import 'pure-react-carousel/dist/react-carousel.es.css';
import Slider from "react-slick";

export default class Trending extends React.Component {


    render() {
        const deviceWidth = window.innerWidth;

        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            slidesToShow: (deviceWidth > 600 ? 4 : 1),
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
        };
        return (
            <div className="CarouselItems">
                <svg className="LeftSlider" onClick={() => this.slider.slickPrev()} xmlns="http://www.w3.org/2000/svg"
                     width="40" height="40" viewBox="0 0 18 18">
                    <path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/>
                </svg>
                <Slider ref={(slider) => {
                    this.slider = slider;
                }}  {...settings} onRef={ref => (this.Slider = ref)} className="Trending">
                    <div className="TrendingItem">
                        <ProductCard imageName={"table.jpg"}
                                     description={"This here's an item. Of considerable value but you can have " +
                                     "it for a super low price, now how neat is that"} price={"$44.30"}/>
                    </div>
                    <div className="TrendingItem">
                        <ProductCard imageName={"divingmask.jpg"}
                                     description={"This here's an item. Of considerable value but you can have " +
                                     "it for a super low price, now how neat is that"} price={"$44.30"}/>
                    </div>
                    <div className="TrendingItem">
                        <ProductCard imageName={"waterlounge.jpg"}
                                     description={"This here's an item. Of considerable value but you can have " +
                                     "it for a super low price, now how neat is that"} price={"$44.30"}/>
                    </div>
                    <div className="TrendingItem">
                        <ProductCard imageName={"airsoft.PNG"}
                                     description={"This here's an item. Of considerable value but you can have " +
                                     "it for a super low price, now how neat is that"} price={"$44.30"}/>
                    </div>
                    <div className="TrendingItem">
                        <ProductCard imageName={"house.jpg"}
                                     description={"This here's an item. Of considerable value but you can have " +
                                     "it for a super low price, now how neat is that"} price={"$44.30"}/>
                    </div>
                    <div className="TrendingItem">
                        <ProductCard imageName={"wine.jpg"}
                                     description={"This here's an item. Of considerable value but you can have " +
                                     "it for a super low price, now how neat is that"} price={"$44.30"}/>
                    </div>
                </Slider>

                <svg className="RightSlider" onClick={() => this.slider.slickNext()} xmlns="http://www.w3.org/2000/svg"
                     width="40" height="40" viewBox="0 0 18 18">
                    <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/>
                </svg>

            </div>
        )
    }
}