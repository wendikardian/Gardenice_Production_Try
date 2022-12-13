import React, {useEffect} from "react";
import "./lib/animate/animate.min.css";
import "./lib/lightbox/css/lightbox.min.css";
import "./css/bootstrap.min.css";
import "./css/style.css";
import img1 from './img/carousel-2.jpg'
import img2 from './img/carousel-1.jpg'
import about from './img/service-1.jpg'
import wendi from './img/wendi.jpg'
import belinda from './img/belinda.jpg'
import nisa from './img/nisa.jpg'
import fiqal from './img/fiqal.png'
import aria from './img/aria.png'
// import { useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { DataCtx } from "../../Data/Data";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from './img/logo1.png'

const Home = () => {
    // const history = useHistory();
    const navigate = useNavigate();
    const { isLogin, setIsLogin } = useContext(DataCtx);

    useEffect( () => {
        if(Cookies.get('email' ) !== undefined){
            navigate('/post')
        }
        console.log(Cookies.get('email'))
    }, [])
  return (
    <div>
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary spinspin" role="status" ></div>
    </div> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a
          href="#home"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
            <img src={logo} style={{width: 70}} />
          <h1 className="m-0">Gardenice</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="#home" className="nav-item nav-link active">
              Home
            </a>
            <a href="#about" className="nav-item nav-link">
              About
            </a>
            <a href="#projects" className="nav-item nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
            <a href="#team" className="nav-item nav-link">
              Team
            </a>
          </div>
          <Link to="/login" >
          <a
            
            className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block"
          >
            Sign In<i className="fa fa-arrow-right ms-3"></i>
          </a>
          </Link>
        </div>
      </nav>


      {/* Carosel start */}

      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={img1} alt="Image" />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h1 className="display-1 text-white mb-5 animated slideInDown">Welcome To Gardenice</h1>
                                    <a href="" className="btn btn-primary py-sm-3 px-sm-4">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/* Carosel end */}

      {/* Features */}
      <div className="container-fluid top-feature py-5 pt-lg-0" id="home">
        <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="bg-white shadow d-flex align-items-center h-100 px-5 mh-160">
                        <div className="d-flex">
                            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                <i className="fa fa-times text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h4>No Hidden Cost</h4>
                                <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="bg-white shadow d-flex align-items-center h-100 px-5 mh-160">
                        <div className="d-flex">
                            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                <i className="fa fa-users text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h4>Dedicated Team</h4>
                                <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="bg-white shadow d-flex align-items-center h-100 px-5 mh-160">
                        <div className="d-flex">
                            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                <i className="fa fa-phone text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h4>24/7 Available</h4>
                                <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

      {/* End Features */}


    {/* About */}

    <div className="container-xxl py-5" id="about">
        <div className="container">
            <div className="row g-5 align-items-end">
                <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                    <img className="img-fluid rounded" data-wow-delay="0.1s" src={about} />
                </div>
                <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                    <h1 className="display-1 text-primary mb-0">Hello</h1>
                    <p className="text-primary mb-4">We're proffesional Gardening Agency</p>
                    <h1 className="display-5 mb-4">We Make Your Home Like A Garden</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <a className="btn btn-primary py-3 px-4" href="">Explore More</a>
                </div>
                <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-5">
                        <div className="col-12 col-sm-6 col-lg-12">
                            <div className="border-start ps-4">
                                <i className="fa fa-award fa-3x text-primary mb-3"></i>
                                <h4 className="mb-3">Happy Client</h4>
                                <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-12">
                            <div className="border-start ps-4">
                                <i className="fa fa-users fa-3x text-primary mb-3"></i>
                                <h4 className="mb-3">Dedicated Team</h4>
                                <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End About */}

    {/* fact */}

    <div class="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src={img1}>
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                    <h1 class="display-4 text-white" data-toggle="counter-up">1234</h1>
                    <span class="fs-5 fw-semi-bold text-light">Happy Clients</span>
                </div>
                <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                    <h1 class="display-4 text-white" data-toggle="counter-up">1234</h1>
                    <span class="fs-5 fw-semi-bold text-light">Garden Complated</span>
                </div>
                <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                    <h1 class="display-4 text-white" data-toggle="counter-up">1234</h1>
                    <span class="fs-5 fw-semi-bold text-light">Dedicated Staff</span>
                </div>
                <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                    <h1 class="display-4 text-white" data-toggle="counter-up">1234</h1>
                    <span class="fs-5 fw-semi-bold text-light">Awards Achieved</span>
                </div>
            </div>
        </div>
    </div>

    {/* Features */}

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center" id="projects">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="fs-5 fw-bold text-primary">Why Choosing Us!</p>
                    <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <a className="btn btn-primary py-3 px-4" href="">Explore More</a>
                </div>
                <div className="col-lg-6">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6">
                            <div className="row g-4">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="text-center rounded py-5 px-4 shadow-f">
                                        <div className="btn-square bg-light rounded-circle mx-auto mb-4 w-f" >
                                            <i className="fa fa-check fa-3x text-primary"></i>
                                        </div>
                                        <h4 className="mb-0">100% Satisfaction</h4>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="text-center rounded py-5 px-4 shadow-f" >
                                        <div className="btn-square bg-light rounded-circle mx-auto mb-4 w-f" >
                                            <i className="fa fa-users fa-3x text-primary"></i>
                                        </div>
                                        <h4 className="mb-0">Dedicated Team</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                            <div className="text-center rounded py-5 px-4 shadow-f" >
                                <div className="btn-square bg-light rounded-circle mx-auto mb-4 w-f" >
                                    <i className="fa fa-tools fa-3x text-primary"></i>
                                </div>
                                <h4 className="mb-0">Modern Equipment</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End Features */}


    {/* Contact */}
    <div className="container-fluid quote my-5 py-5" data-parallax="scroll" data-image-src={img2} id="contact">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="bg-white rounded p-4 p-sm-5 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="display-5 text-center mb-5">Contact Us</h1>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control bg-light border-0" id="gname" placeholder="Gurdian Name" />
                                    <p >Your Name</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control bg-light border-0" id="gmail" placeholder="Gurdian Email" />
                                    <p>Your Email</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control bg-light border-0" id="cname" placeholder="Child Name" />
                                    <p >Your Mobile</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control bg-light border-0" id="cage" placeholder="Child Age" />
                                    <p >Service Type</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control bg-light border-0" placeholder="Leave a message here" id="message"  />
                                    <p >Message</p>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-primary py-3 px-4" type="submit">Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* End Contact */}


    {/* Our Team */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" id="team">
                <p class="fs-5 fw-bold text-primary">Our Team</p>
                <h1 class="display-5 mb-5">Group 1 - Internet Programming</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded">
                        <img class="img-fluid wh-200" src={wendi} alt="" />
                        <div class="team-text">
                            <h4 class="mb-0">Wendi Kardian </h4>
                            <p class="text-primary">2100016</p>
                            <div class="team-social d-flex">
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded">
                        <img class="img-fluid wh-200" src={belinda} alt="" />
                        <div class="team-text">
                            <h4 class="mb-0">Belinda Malfa Basya </h4>
                            <p class="text-primary">2100246</p>
                            <div class="team-social d-flex">
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded">
                        <img class="img-fluid wh-200" src={nisa} alt="" />
                        <div class="team-text">
                            <h4 class="mb-0">Khairunnisa </h4>
                            <p class="text-primary">2103683</p>
                            <div class="team-social d-flex">
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded">
                        <img class="img-fluid wh-200" src={fiqal} alt="" />
                        <div class="team-text">
                            <h4 class="mb-0">Fiqal Hanif </h4>
                            <p class="text-primary">2105947</p>
                            <div class="team-social d-flex">
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded">
                        <img class="img-fluid wh-200" src={aria} alt="" />
                        <div class="team-text">
                            <h4 class="mb-0">Aria Sastra Wisesa </h4>
                            <p class="text-primary">2101698</p>
                            <div class="team-social d-flex">
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
    {/* End Our Team */}
    <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-12">
                
                    <h4 className="text-white mb-4">More Information About Us</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Jln Geger Kalong</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+000000</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>kelompok1@upi.edun</p>

            
                
               
            </div>
            </div>
    </div>
    </div>
  );
};

export default Home;
