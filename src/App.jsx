import "./App.css"
import { NavLink } from "react-router";

function Amazon() {
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="navlogo border">
            <div className="logo"></div>
          </div>

          <div className="nav-address border">
            <p className="add-first">Deliver to</p>
            <div className="nav-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="add-sec">Pakistan</p>
            </div>
          </div>

          <div className="nav-search">
            <select className="search-select">
              <option>All</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon"
              className="search-input"
            />
            <div className="icon-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="nav-singin border">
            <p>
              <span>Hello, sign in</span>
            </p>
            <p className="nav-sec">Account & Lists</p>
          </div>

          <div className="nav-return border">
            <p>
              <span>Returns</span>
            </p>
            <p className="nav-sec">& Orders</p>
          </div>

          <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </div>
        </div>

        <div className="panel">
          <div className="panel-all">
            <i className="fa-solid fa-bars"></i>
            All
          </div>

          <div className="panel-ops">
            <p>Today's Deals</p>
            <p>Prime Video</p>
            <p>Registry</p>
            <p>Gift Cards</p>
             <NavLink to="/Contact" end>
             Contact
             </NavLink>
             <NavLink to="/Sell" end>
             Sell
             </NavLink>
     
          </div>
        </div>
      </header>

      <div className="hero-section"></div>

      {/* Shop Section */}
      <div className="shop-section">
        <div className="box box1">
          <div className="box-content">
            <h2>Home & Decoration</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('./aa3.jpg')" }}
            ></div>
            <p>Buy Now</p>
          </div>
        </div>

        <div className="box box2">
          <div className="box-content">
            <h2>International brands</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('./aa1.jpg')" }}
            ></div>
            <p>Buy Now</p>
          </div>
        </div>

        <div className="box box3">
          <div className="box-content">
            <h2>Kids Towels</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('./aa7.jpg')" }}
            ></div>
            <p>Buy Now</p>
          </div>
        </div>

        <div className="box box4">
          <div className="box-content">
            <h2>Kitchen accessories</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('./aa5.jpg')" }}
            ></div>
            <p>Shop Now</p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="shop-section">
        <div className="box">
          <div className="box-content">
            <h2>Kitchen Tools</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('./aa11.jpg')" }}
            ></div>
            <p>Shop Now</p>
          </div>
        </div>

        <div className="box">
          <div className="box-content">
            <h2>Get your game on</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('./gaming.jpg')" }}
            ></div>
            <p>Shop Gaming</p>
          </div>
        </div>

        <div className="box">
          <div className="box-content">
            <h2>Wall Lights</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('./aa10.jpg')" }}
            ></div>
            <p>Shop Now</p>
          </div>
        </div>

        <div className="box">
          <div className="box-content">
            <h2>Storage Boxes</h2>
            <div
              className="box-img"
              style={{ backgroundImage: "url('./aa12.jpg')" }}
            ></div>
            <p>Shop Now</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-panel1">Back to top</div>

        <div className="footer-panel2">
        <ul>
          <p>Get to Know Us</p>
          <a>Careers</a>
           <NavLink to="/Blog" end>
        Blog
      </NavLink>
          <a>About Amazon</a>
          <a>Investor Relations</a>
          <a>Amazon Devices</a>
          <a>Amazon Science</a>
        </ul>

        <ul>
          <p>Make Money with Us</p>
          <a>Sell products on Amazon</a>
          <a>Sell on Amazon Business</a>
          <a>Sell apps on Amazon</a>
          <a>Become an Affiliate</a>
          <a>Advertise Your Products</a>
          <a>Self-Publish with Us</a>
          <a>Host an Amazon Hub</a>
          <a>See More Make Money with Us</a>
        </ul>

        <ul>
          <p>Amazon Payment Products</p>
          <a>Amazon Business Card</a>
          <a>Shop with Points</a>
          <a>Reload Your Balance</a>
          <a>Amazon Currency Converter</a>
        </ul>

        <ul>
          <p>Let Us Help You</p>
          <a>Amazon and COVID-19</a>
          <a>Your Account</a>
          <a>Your Orders</a>
          <a>Shipping Rates & Policies</a>
          <a>Returns & Replacements</a>
          <a>Manage Your Content and Devices</a>
          <a>Help</a>
        </ul>
      </div>

      <div className="footer-panel3">
        <div className="Flogo"></div>
      </div>

        
        <div class="footer-panel4">
        <div class="pages">
          <a>Conditions of Use</a>
          <a>Privacy Notice</a>
          <a>Consumer Health Data Privacy Disclosure</a>
          <a>Your Ads Privacy Choices</a>
        </div>
          <div className="copyright">
            © 1996-2026, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Amazon;
