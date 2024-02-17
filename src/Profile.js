import "bootstrap/dist/css/bootstrap.min.css";
import FULLNAME from "../profile/profile/fullname";
import Card from 'react-bootstrap/Card';
import Profession from "../profile/profile/profession";
import BIO from "../profile/profile/bio";
import Image1 from "../profile/profile/image.jpg"
import Image2 from "../profile/profile/image2.jpg"
import Pi from "./profile/Pi";
function Profile(props) {

  return (
  <div className="row">
    <div className="App">
      <Card style={{ width: '18rem' }}>
    
      <Card.Body>
        <Card.Title><Pi image={Image1} />
      
        <Card.Text>
         <Profession pro="devlopper"/>
        </Card.Text>
        <BIO bio="js"/>
      </Card.Body>
    </Card>
    </div>
    <div className="App">
    <Card style={{ width: '18rem' }}>
  
    <Card.Body>
      <Card.Title><Pi image={Image2} />
        <FULLNAME name="ahmed" handleclick={handleclick} /></Card.Title>
      <Card.Text>
       <Profession pro="frontend"/>
      </Card.Text>
      <BIO bio="react"/>
    </Card.Body>
  </Card>
  </div>
  </div>)

}



export default Profile;