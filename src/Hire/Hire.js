import React from 'react';
import './Hire.css';

import Hire1 from './Images/hire1.jpg';
import Hire2 from './Images/hire2.jpg';
import Hire3 from './Images/hire3.jpg';
import Hire4 from './Images/hire4.jpeg';
import Hire5 from './Images/hire5.jpeg';
import Hire6 from './Images/hire6.jpg';
import Hire7 from './Images/hire7.jpeg';
import Hire8 from './Images/hire8.jpeg';
import Hire9 from './Images/hire9.jpeg';

function Hire() {
  return (
    <div className="hire-main">
      <div className="hire-title">
        <h1>Hire Us</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-12 hire-par">
          <p>
            Victoria Baths provides a unique, unforgettable setting for a wide range of events. Wedding receptions, photoshoots, staff training
            events, food and drink festivals, and a great variety of arts performances and exhibitions have worked exceptionally well here.
            Victoria Baths is licenced to serve alcohol and host wedding ceremonies.

            There are many different spaces and backdrops, from the grandeur of the Gala Pool and 1st Class entrance to the more modest Females Pool
            and Superintendent's Flat. Check out the Spaces page for images, downloadable plans and information on room capacities.

            PLEASE NOTE that Victoria Baths is unheated, so we are a seasonal venue. Filming and photoshoots can take place all year round
            but events involving invited guests generally only take place from March/April to October/November.

            Our Terms & Conditions of Hire are downloadable below along with a Booking Form.

            Our Events Team are happy to show you around and discuss any proposed booking.  We look forward to your call or email.
        </p>
        </div>
      </div>
      <div className="row">
      <div id="carouselExampleControls" className="carousel slide col-12 col-md-6 hire-carousel" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Hire1} className="d-block w-100" alt="Woman in wedding dress in dressingroom" />
          </div>
          <div className="carousel-item">
            <img src={Hire2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Hire3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Hire4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Hire5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Hire6} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Hire7} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Hire8} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Hire9} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="card col-12 col-md-6 hire-quote">
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>"Thank you for a fantastic day in the wonderful Victoria Baths.
                It is an amazing place and we cannot wait to come back again to shoot some more models in the new year"</p>
              <footer className="blockquote-footer">Mary Jennings <cite title="Source Title">Photographer</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="hire-enquire-title">
        <h2>Make an enquiry</h2>
      </div>
      <div className="hire-form">
        <form>
          <div class="form-row">
            <div class="col-12 col-md-4">
              <input type="text" class="form-control" placeholder="First name" />
            </div>
            <div class="col-12 col-md-4">
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
            <div class="col-12 col-md-4">
              <input type="text" class="form-control" placeholder="Email Address" />
            </div>
          </div>
          <div class="form-row">
            <input type="text" class="form-control" id="inputAddress" placeholder="Address Line 1" />
          </div>
          <div class="form-row">
            <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2" />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control" id="inputCity" placeholder="City" />
            </div>
            <div class="form-group col-md-4">
              <select id="inputState" class="form-control ">
                <option selected>County...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <input type="text" class="form-control" id="inputZip" placeholder="Postcode" />
            </div>
          </div>
          <div class="form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Hire Enquiry"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  );
}

export default Hire;