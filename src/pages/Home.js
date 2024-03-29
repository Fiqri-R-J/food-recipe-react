import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import IndexCard from "../components/molecules/IndexCard";
import Spiner from "../components/molecules/Spiner";
import axios from "axios";

function Home() {
  let [keyword, setKeyword] = React.useState(
    "Discover Recipe & Delicious Food"
  );
  let [menu, setMenu] = React.useState([]);
  let [isloading, setIsLoading] = React.useState(true);

  let detailMenu = async (id) => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_URL_BACKEND}/recipe/${id}`
      );
      console.log("tes", data?.data?.data?.[0]);
      localStorage.setItem("detailMenu", JSON.stringify(data?.data?.data?.[0]));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const displayMenu = async () => {
      try {
        const data = await axios.get(
          `${process.env.REACT_APP_URL_BACKEND}/recipe`
        );
        setMenu(data?.data?.data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log("ini error", error);
      }
    };
    displayMenu();
  }, []);
  return (
    <div>
      {/*<!-- Display for laptop -->*/}
      {/* <!-- Navbar --> */}
      <Navbar />
      {/* <!-- end of navbar --> */}

      {/* <!-- header --> */}
      <section id="header">
        {/* <!-- background yellow --> */}
        <div className="overlay-background"></div>

        {/* <!-- content --> */}
        <div className="container content">
          <div className="row align-items-center">
            {/* <!-- side left --> */}
            <div className="col-lg-5 col-xs-12 order-1 order-lg-0">
              <h1>{keyword}</h1>
              <div className="mt-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="form-search"
                  placeholder="search recipe..."
                  onChange={(event) => {
                    setKeyword(event.target.value);
                  }}
                />
              </div>
            </div>
            {/* <!-- side right --> */}
            <div className="col-lg-6 col-xs-12 offset-lg-1 background-grid order-0 order-lg-1">
              <img
                src="images/home/header-1.png"
                className="main-background"
                width="600px"
                alt="placeholder"
              />
              {/* <!-- background header --> */}
              <img
                src="./images/home/background-header-1.png"
                className="background-1"
                width="500px"
                alt="placeholder"
              />
              <img
                src="./images/home/background-header-2.png"
                className="background-2"
                width="500px"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of header --> */}

      {/* <!-- new recipe --> */}
      <section id="new-recipe">
        {/* <!-- title --> */}
        <div className="container">
          <h2 className="title">New Recipe</h2>
        </div>

        {/* <!-- background --> */}
        <div className="background-overlay"></div>
        {/* <!-- content --> */}
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- side left --> */}
            <div className="col-lg-6 col-xs-12">
              <img
                src="./images/home/new-recipe.jpg"
                width="100%"
                height="500px"
                className="main-image"
                alt="new-recipe"
              />
            </div>
            {/* <!-- side right --> */}
            <div className="col-lg-5 offset-lg-1 col-xs-12 mt-xs-5">
              <h2>
                Healthy Bone Broth Ramen <br />
                (Quick & Easy)
              </h2>

              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <Link to="/detail">
                <button type="button" className="btn btn-warning">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of new recipe --> */}

      {/* <!-- popular recipe --> */}
      <section id="popular-recipe">
        <div className="container">
          {/* <!-- title --> */}
          <div className="container">
            <h2 className="title">Popular Recipe</h2>
          </div>

          {isloading ? <Spiner /> : null}

          {menu.length === 0 && !isloading ? <h2>Recipe Not Found</h2> : null}

          {/* <!-- recipe list --> */}
          <div className="row">
            {menu.map((item, key) => (
              <div
                className="col-lg-4 col-6"
                key={key}
                onClick={detailMenu(item?.id)}
              >
                <IndexCard
                  image={item?.picture}
                  name={item?.name}
                  url={item?.name?.toLocaleLowerCase()?.split(" ").join("-")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- end of popular recipe --> */}

      {/* <!-- footer --> */}
      <Footer />
    </div>
  );
}

export default Home;
