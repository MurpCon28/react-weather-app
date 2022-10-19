import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import "./emergencies.css";

const Heat = () => {

  return (
    <Container fluid="md">
      <br />
      <Card className="bg-dark text-white">
        <Card.Img src="weatherPics/heatwaveCity.png" alt="City Heat" className='imageDesign' />
        <Card.ImgOverlay>
          <Card.Title className='infoPageHeading'><h3>Heatwave</h3></Card.Title>
          <Card.Text className='pageDetails'>
            Extreme heat is the most dangerous type of severe-weather event in the world, but we can
            take action to prepare our loved ones and communities for extreme heat events and related power outages. Learn
            what to do before, during, and after to help keep everyone safe and healthy.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br />
      <Row>
        <Col>
          <Card className='transparentBackground'>
            <Card.Body>
              <Card.Title className='infoPageHeading'>Excessive Heat Outlook</Card.Title>
              <Card.Text className='pageDetails'>
                <span className='warning'>Be Aware!</span> An excessive heat outlook is issued when the potential exists for an excessive heat event in the next 3- 7 days.
                It provides information to individuals who need considerable lead time to prepare for the event.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='transparentBackground'>
            <Card.Body>
              <Card.Title className='infoPageHeading'>Excessive Heat Watch</Card.Title>
              <Card.Text className='pageDetails'>
                <span className='warning'>Be Prepared!</span> A heat watch is issued when conditions are favorable for an excessive heat event in the next 24 to 72 hours.
                It is used when the risk of an extreme heat event has increased, but its occurrence and timing is still uncertain.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='transparentBackground'>
            <Card.Body>
              <Card.Title className='infoPageHeading'>Excessive Heat Warning/Advisory</Card.Title>
              <Card.Text className='pageDetails'>
                <span className='warning'>Take Action!</span> An excessive heat warning or a heat advisory is issued within 12 hours of the onset of extremely dangerous heat conditions.
                Take precautions immediately to avoid heat-related illness.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <div className='testcolour'>
        <Row>
          <Col>
            <h3 className='infoPageHeading'>How to prepare for a heatwave?</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <h5 className='infoPageHeading'>Learn How to Stay Hydrated</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Drinking enough water is one of the most important things you can do to prevent heat-related illness.
                An average person needs to drink about three-quarters of a gallon of fluid daily.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Stay away from sugary, caffeinated and alcoholic drinks.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>In general, eating meals and snacks throughout the day with adequate water intake is enough to maintain electrolytes
                and replace salt lost when you sweat.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Certain medical conditions and medications may mean you need to drink more water. Talk to your healthcare provider.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <br />
            <h5 className='infoPageHeading'>Gather Water & Emergency Supplies</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Gather food, water, and medicine in advance because stores and pharmacies might be closed. Organize your supplies into
                a Go-Kit and a Stay-at-Home Kit.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Go-Kit: 3 days of supplies that you can easily carry with you.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Stay-at-Home Kit: 2 weeks of supplies if you need to stay at home.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Have a 1-month supply of medication in a child-proof container.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Keep personal, financial, and medical records safe.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <br />
            <h5 className='infoPageHeading'>Take Actions to Keep Your Home Cool</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Cover windows with drapes or shades.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Weather-strip doors and windows.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Use window reflectors, such as aluminum foil-covered cardboard, to reflect heat back outside.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Add insulation to keep the heat out.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Use a powered attic ventilator or attic fan to regulate the heat level of your attic by clearing hot air.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Install window air conditioners and insulate around them.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <br />
            <br />
            <h5 className='infoPageHeading'>Plan to Go to a Cool Place</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Spending a few hours each day in air conditioning can help prevent or reduce heat-related illness. If you do not have air conditioning in your home,
                identify a place where you can spend the warmest part of the day during an extreme heat event.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Contact a nearby neighbor, friend or relative who has air conditioning.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Check to see if shopping malls or public libraries are open.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Find out if your community plans to open public cooling centers.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
      <br />
      <Row>
        <Col>
          <h3 className='infoPageHeading'>What Should You Do During a Heat Wave?</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col><img src="weatherPics/iceGlass.png" alt="Ice Glass" className='imageHeight' /></Col>
        <Col>
          <h5 className='infoPageHeading'>Stay Hydrated</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Drink plenty of fluids: Don't wait until you're thirsty to drink. Avoid sugary, caffeinated or alcoholic drinks.
              Avoid icy beverages because they can cause stomach cramps.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Make sure you have enough water to drink. It is important to stay hydrated.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>You might like to leave a few drinks in the fridge.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>An adult needs approximately 2 litres of liquid over 24 hours. This may be less for smaller people or those with medical conditions</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Replace salt and minerals: Heavy sweating removes salt and minerals from your body that need to be replaced.
              A sports drink or a snack can replace the salt and minerals you lose in sweat.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Keep pets hydrated: Provide plenty of fresh water for your pets and leave the water in a shady area.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'><span className='warning'>Warning:</span> If your doctor limits the amount of water you drink or has you on water pills, ask how much you
              should drink while the weather is hot. If you are on a low-salt diet, have diabetes, high blood pressure, or other chronic conditions, talk with your
              doctor before drinking a sports beverage. </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h5 className='infoPageHeading'>Stay Connected</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Never leave infants, children, older adults, individuals with disabilities or pets in a vehicle unattended.
              Cars can quickly heat up to dangerous temperatures, even with a window cracked open.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Make sure you have enough water to drink. It is important to stay hydrated</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>You might like to leave a few drinks in the fridge.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>An adult needs approximately 2 litres of liquid over 24 hours. This may be less for smaller people or those with medical conditions.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Check-in on older adults and individuals with chronic health conditions at least twice daily. <span className='boldFont'>When visiting,
              ask yourself these questions:</span>
              <ListGroup.Item className='transparentBackground'>Are they drinking enough water?</ListGroup.Item>
              <ListGroup.Item className='transparentBackground'>Do they have access to air conditioning?</ListGroup.Item>
              <ListGroup.Item className='transparentBackground'>Do they know how to keep cool?</ListGroup.Item>
              <ListGroup.Item className='transparentBackground'>Do they show any signs of heat stress?</ListGroup.Item>
            </ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Be on the lookout for signs of heat-related illness. Act right away if you notice someone with symptoms. </ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'><span className='warning'>If someone is showing signs of heat exhaustion or heat stroke seek emergency medical care immediately.</span></ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5 className='infoPageHeading'>Stay Cool</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Stay cool indoors: Stay in an air-conditioned place as much as possible.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Wear appropriate clothing: Choose lightweight, light-colored, and loose-fitting clothing.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Don't use an electric fan when the indoor air temperature is over 95°F. Using a fan can be more harmful than helpful when indoor air temperatures are hotter
              than your body temperature. Fan use may cause your body to gain heat instead of losing it. Focus on staying hydrated, taking a cool shower or bath to cool your body, shutting out the sun and heat with curtains, and
              moving to an airconditioned place to cool off.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Use your stove and oven less.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Schedule outdoor work and other activities carefully: Try to limit your outdoor activity to when it's coolest, such as morning and evening hours.
              Rest often in shady areas so that your body has a chance to recover.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Cut down on exercise during the heat.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>When outdoors, protect yourself from the sun by wearing a wide-brimmed hat, sunglasses, and sunscreen that says "broad spectrum" or "UVA/UVB protection."</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <br />
      <div className='testcolour'>
        <Row>
          <Col>
            <h3 className='infoPageHeading'>How Can You Stay Safe After a Heat Wave?</h3>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <br />
            <h5 className='infoPageHeading'>Safety Basics</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>If the power is out, use flashlights or battery-powered lanterns instead of candles to reduce the risk of fires.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Stay away from sugary, caffeinated and alcoholic drinks.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Prevent carbon monoxide poisoning. Do not use gasoline, propane, natural gas, or charcoal-burning devices inside a home, 
              basement, garage, tent, or camper — or even outside near an open window. Carbon monoxide can't be seen or smelled, but it can kill you fast. <span className='warning'>If you start to feel sick, 
              dizzy or weak, get to fresh air right away — do not delay.</span></ListGroup.Item>
            </ListGroup>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <br />
            <br />
            <h5 className='infoPageHeading'>Tips to Stay Healthy</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'><b><i>When in doubt, throw it out!</i></b> Throw out food that got wet or warm.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Ask your healthcare provider or doctor about using refrigerated medicines that got warm.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <br />
            <br />
            <h5 className='infoPageHeading'>Take Care of Yourself</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>It’s normal to have a lot of feelings.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Eat healthy food and get enough sleep to help you deal with stress.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Heat