import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import "./emergencies.css";

const Thunder = () => {

  return (
    <Container fluid="md">
      <br />
      <Card className="bg-dark text-white">
        <Card.Img src="weatherPics/cloudLightning.png" alt="Cloud Lightning" className='imageDesign' />
        <Card.ImgOverlay>
          <Card.Title className='infoPageHeading'><h3>Thunder & Lightning</h3></Card.Title>
          <Card.Text className='pageDetails'>
            A thunderstorm is considered severe if it produces hail at least 1 inch in diameter or has wind
            gusts of at least 58 miles per hour. Every thunderstorm produces lightning, which kills more people
            each year than tornadoes or hurricanes. Heavy rain from thunderstorms can cause flash flooding,
            and high winds can damage homes and blow down trees and utility poles, causing widespread power outages.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br />
      <Row>
        <Col>
          <h3 className='infoPageHeading'>Know the Difference</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card className='transparentBackground'>
            <Card.Body>
              <Card.Title className='infoPageHeading'><span className='warning'>Severe Thunderstorm Watch</span></Card.Title>
              <Card.Text className='pageDetails'>
                Severe thunderstorms are possible in and near the watch area. Stay informed and be ready to act if a severe thunderstorm warning is issued.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='transparentBackground'>
            <Card.Body>
              <Card.Title className='infoPageHeading'><span className='warning'>Severe Thunderstorm Warning</span></Card.Title>
              <Card.Text className='pageDetails'>
                Severe weather has been reported by spotters or indicated by radar. Warnings indicate imminent danger to life and property.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Card className='transparentBackground'>
            <Card.Body>
              <Card.Text className='pageDetails'>
                Every year people are killed or seriously injured by severe thunderstorms despite advance warning. While some did not hear the warning,
                others heard the warning and did not pay attention to it. The information in this section, combined with timely watches and warnings about severe weather, may help save lives.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <br />
      <div className='testcolour'>
        <Row>
          <Col>
            <h3 className='infoPageHeading'>Before Thunderstorms and Severe Weather</h3>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <br />
            <h5 className='infoPageHeading'>How to Prepare for Thunderstorms</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Learn about your local community’s emergency warning system for severe thunderstorms.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Discuss thunderstorm safety and lightning safety with all members of your household.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Pick a safe place in your home for household members to gather during a thunderstorm This should be away from windows,
                skylights and glass doors that could be broken by strong winds or hail.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Make a list of items to bring inside in the event of a severe thunderstorm.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Make trees and shrubbery more wind resistant by keeping them trimmed and removing damaged branches.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Protect your animals by ensuring that any outside buildings that house them are protected in the same way as your home.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Consult your local fire department if you are considering installing lightning rods.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Get trained in first aid and learn how to respond to emergencies.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Put together an emergency preparedness kit.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <br />
            <Col><img src="weatherPics/islandThunder.png" alt="Thunder Island" className='imageLightningDesign' /></Col>
          </Col>
        </Row>
      </div>
      <br />
      <Row>
        <Col>
          <h3 className='infoPageHeading'>Responding Appropriately During a Thunderstorm</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col><img src="weatherPics/lightning.png" alt="Lightning" className='imageHeight' /></Col>
        <Col>
          <br />
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Listen to local news or NOAA Weather Radio for emergency updates. Watch for signs of a storm,
              like darkening skies, lightning flashes or increasing wind.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Postpone outdoor activities if thunderstorms are likely to occur. Many people struck by lightning are not
              in the area where rain is occurring..</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>If a severe thunderstorm warning is issued, take shelter in a substantial building or in a vehicle with the windows closed.
              Get out of mobile homes that can blow over in high winds.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>If you can hear thunder, you are close enough to be in danger from lightning. If thunder roars, go indoors!
              The National Weather Service recommends staying inside for at least 30 minutes after the last thunder clap.</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <br />
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Avoid electrical equipment and telephones. Use battery-powered TVs and radios instead.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Shutter windows and close outside doors securely. Keep away from windows.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Do not take a bath, shower or use plumbing.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>If you are driving, try to safely exit the roadway and park. Stay in the vehicle and turn on the emergency flashers until the heavy rain ends.
              Avoid touching metal or other surfaces that conduct electricity in and outside the vehicle.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>If you are outside and cannot reach a safe building, avoid high ground; water; tall, isolated trees; and metal objects such as fences or bleachers.
              Picnic shelters, dugouts and sheds are NOT safe.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <br />
      <div className='testcolour'>
        <Row>
          <Col>
            <h3 className='infoPageHeading'>Recovering After a Thunderstorm</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <br />
          <Col>
            <h5 className='infoPageHeading'>Take the Appropriate Steps to Stay Safe</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Never drive through a flooded roadway. You cannot predict how deep the water may be.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Stay away from storm-damaged areas to keep from putting yourself at risk from the effects of severe thunderstorms.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Continue to listen to a Weather Radio or to local radio and television stations for updated information or instructions,
                as access to roads or some parts of the community may be blocked.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Help people who may require special assistance, such as infants, children and the elderly or disabled.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Stay away from downed power lines and report them immediately.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Watch your animals closely. Keep them under your direct control.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h5 className='infoPageHeading'>If Lightning Strikes</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'><span className='boldFont'>Follow these steps if someone has been struck by lightning:</span>
                <ListGroup.Item className='transparentBackground listDetails'>Call for help. Call the local emergency number. Anyone who has sustained a lightning strike requires professional medical care.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Check the person for burns and other injuries. If the person has stopped breathing, call the emergency service and begin CPR. If the person is breathing normally,
                  look for other possible injuries and care for them as necessary. People who have been struck by lightning do not retain an electrical charge and can be handled safely.</ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <br />
            <h5 className='infoPageHeading'>Let Your Family Know You're Safe</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>If your community has experienced a disaster, let friends and family know you're safe.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </Container>
  )
}

export default Thunder