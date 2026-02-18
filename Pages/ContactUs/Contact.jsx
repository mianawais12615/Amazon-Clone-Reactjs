import "./Contact.css"
import { NavLink } from "react-router";

function Contact(){
    return(
    <div>
            <h3>Send Me a Message</h3>
             <NavLink to="/" end>
        Home
      </NavLink> <br />
             <NavLink to="/Blog" end>
        Blog
      </NavLink>
        <form>
        
        <div className="username" id="username"  >
        <label for=""> Full Name*</label><br/>
        <input type="text" name="username" placeholder="Enter full name" required/>
        </div>

       <div className="email" id="email" >
        <label for="">Email Address*</label><br/>
        <input type="email" name="email" placeholder="your.email@example.com" required/>
       </div>

       <div > 
          <label for="">Subject*</label><br/>
          <textarea name="inquiry" id="inquiry" className="inquiry"  placeholder="Brief description of your inquiry" required rows="1" cols="50"></textarea>
       </div>
        
       <div className="ideas" id="ideas">
        <label for="">Message*</label><br/>
        <textarea name="ideas" id="" placeholder="Tell me about your project, collaboration ideas, or question" rows="12" cols="50"></textarea>
       </div>
       <button type="submit" className="btn-submit" id="btn-submit">Send Message</button>
       
      </form>

     </div>
    )
}

export default Contact;