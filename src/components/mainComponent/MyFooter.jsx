import React, { useEffect } from 'react';
import './MyFooter.css'; // Assuming you have a CSS file for custom styling

const MyFooter = () => {
  useEffect(() => {
    const accordions = document.querySelectorAll('.accordion .link');

    accordions.forEach(accordion => {
      accordion.addEventListener('click', function () {
        // Toggle the open class
        this.parentElement.classList.toggle('open');
        

        // Close other open items
        document.querySelectorAll('.accordion li').forEach(item => {
          if (item !== this.parentElement && item.classList.contains('open')) {
            item.classList.remove('open');
          }
        });
      });
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      accordions.forEach(accordion => {
        accordion.removeEventListener('click', function () {
          // Toggle the open class
          this.parentElement.classList.toggle('open');

          // Close other open items
          document.querySelectorAll('.accordion li').forEach(item => {
            if (item !== this.parentElement && item.classList.contains('open')) {
              item.classList.remove('open');
            }
          });
        });
      });
    };
  }, []);

  return (
    <footer className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
      <div className="container-fluid">
        <div className="footer_top">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <img src="./images/logo.png" alt="Logo" />
              <h3>موقع مدرس خصوصي</h3>
              <h3>info@tqniait.com</h3>
              <h3>Your best choice for your Private Teacher</h3>
              <h1>Connect with us</h1>
              <ul className="list-inline icons">
                <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                <li><a href="#"><span className="fab fa-linkedin"></span></a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 hidden-sm hidden-xs">
              <div className="title">
                <h1>Site Map</h1>
                <hr />
              </div>
              <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Teachers </a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 hidden-sm hidden-xs">
              <div className="title">
                <h1>Categories</h1>
                <hr />
              </div>
              <ul className="links">
                <li><a href="#">Arabic</a></li>
                <li><a href="#">Biology</a></li>
                <li><a href="#">Chemistry</a></li>
                <li><a href="#">English</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 hidden-sm hidden-xs">
              <div className="title">
                <h1>Additional links</h1>
                <hr />
              </div>
              <ul className="links">
                <li><a href="#">soon</a></li>
                <li><a href="#">soon 2</a></li>
              </ul>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 hidden-lg hidden-md">
              <ul id="accordion" className="accordion">
                <li>
                  <div className="link">Site Map<i className="fa fa-chevron-down"></i></div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Teachers </a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="link">Categories<i className="fa fa-chevron-down"></i></div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="links">
                        <li><a href="#">Arabic</a></li>
                        <li><a href="#">Biology</a></li>
                        <li><a href="#">Chemistry</a></li>
                        <li><a href="#">English</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="link">Additional links<i className="fa fa-chevron-down"></i></div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="links">
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Help and support</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="title">
                <h1>Mailing List</h1>
                <hr />
              </div>
              <h4>Enter your email address</h4>
              <form action="#" method="POST">
                <input type="hidden" name="_token" value="OwKsHiOzg0iQTwIBjzcOMgteMrv8ck0BZOyDmtnZ" />
                <div className="form-group">
                  <input type="email" name="email" className="form-control" />
                  <input type="submit" className="submit_btn" value="Subscription" />
                </div>
              </form>
              <h6><span className="fa fa-lock"></span> Your information is safe with us! Unsubscribe at any time</h6>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <ul className="list-inline">
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Help and support</a></li>
          </ul>
          <h3>Development By <a href="https://www.tqniait.com/"><img src="./images/tqniaen-logo.png" alt="TQnia IT" /></a>. All Rights Reserved.</h3>
        </div>
        <div className="toTop">
          <a href="#body" className="scroll"><img src="./images/totop.png" alt="Back to top" /></a>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;