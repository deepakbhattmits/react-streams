/** @format */
import { Component } from "react";
import Carousel from "react-multi-carousel";

import { ReactComponent as LeftSVG } from "../../assets/images/icon-left-chevron.svg";
import { ReactComponent as RightSVG } from "../../assets/images/icon-right-chevron.svg";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 50, // this is needed to tell the amount of px that should be visible.
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  // console.log('ButtonGroup  :  >', rest);
  return (
    <div
      className="carousel-button-group"
      style={{
        position: "absolute",
      }}
    >
      {/*remember to give it position : absolute */}
      <button
        className={`slider-nav ${currentSlide === 0 ? "disable" : ""}`}
        title="prev"
        onClick={() => previous()}
      >
        <LeftSVG />
      </button>
      <button
        className={`slider-nav ${currentSlide > 1 ? "disable" : ""}`}
        title="next"
        onClick={() => next()}
      >
        <RightSVG />
      </button>
      {/* <button
			
				onClick={() => goToSlide(currentSlide + 1)}>
				Go to any slide
			</button> */}
    </div>
  );
};
class SliderComponent extends Component {
  state = {
    loading: false,
    data: [],
    headline: [],
  };
  fetchData = async () => {
    this.setState({ loading: true });
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5"
    );
    let data = await response.json();
    try {
      this.setState({ data: data.articles, loading: false });
    } catch (err) {
      throw new Error(err);
    }
  };
  componentDidMount() {
    if (!this.state.data) {
      this.fetchData();
    }
    // fetch(
    // 	'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5'
    // )
    // 	.then((data) => data.json())
    // 	.then((data) =>
    // 		this.setState({ data: data.articles, loading: false }, () =>
    // 			console.log(data.articles)
    // 		)
    // 	);
  }

  render() {
    return (
      <div className="about container">
        <div className="about container">
          <h1 className="text-left">
            <b>Latest News</b>
          </h1>
          {this.state.loading ? (
            "loading..."
          ) : (
            <div>
              <Carousel
                responsive={responsive}
                partialVisible={false}
                swipeable={true}
                draggable={true}
                showDots={false}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {/* {this.state.data.map((post, indx) => {
									return ( */}
                <div className="card text-left mt-5">
                  <img
                    style={{ height: "100px" }}
                    // src={post.urlToImage}
                    alt="Alt text"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{`post.title1`}</h5>
                    <p className="card-text">{`post.description`}</p>
                    <a
                      href={`post.url`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="card text-left mt-5">
                  <img
                    style={{ height: "100px" }}
                    // src={post.urlToImage}
                    alt="Alt text"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{`post.title2`}</h5>
                    <p className="card-text">{`post.description`}</p>
                    <a
                      href={`post.url`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="card text-left mt-5">
                  <img
                    style={{ height: "100px" }}
                    // src={post.urlToImage}
                    alt="Alt text"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{`post.title3`}</h5>
                    <p className="card-text">{`post.description`}</p>
                    <a
                      href={`post.url`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="card text-left mt-5">
                  <img
                    style={{ height: "100px" }}
                    // src={post.urlToImage}
                    alt="Alt text"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{`post.title4`}</h5>
                    <p className="card-text">{`post.description`}</p>
                    <a
                      href={`post.url`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="card text-left mt-5">
                  <img
                    style={{ height: "100px" }}
                    // src={post.urlToImage}
                    alt="Alt text"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{`post.title5`}</h5>
                    <p className="card-text">{`post.description`}</p>
                    <a
                      href={`post.url`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                {/* );
								})} */}
              </Carousel>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SliderComponent;
