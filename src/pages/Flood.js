import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import "./emergencies.css";

const Flood = () => {

  return (
    <Container fluid="md">
      <br />
      <Card className="bg-dark text-white">
        <Card.Img src="weatherPics/sign.png" alt="Sign" className='imageDesign' />
        <Card.ImgOverlay>
          <Card.Title className='infoPageHeading'><h3>Flood</h3></Card.Title>
          <Card.Text className='pageDetails'>
            Floods are among the most frequent and costly natural disasters. Flooding often occurs following a hurricane,
            thawing snow, or several days of sustained rain. Flash floods occur suddenly, due to rapidly rising water
            along a stream or low-lying area. Learn what to do to keep your loved ones safe!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br />
      <Row>
        <Col>
          <h3 className='infoPageHeading'>What's the Difference Between a Flood Watch and a Flood Warning?</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card className='transparentBackground'>
            <Card.Body>
              <Card.Title className='infoPageHeading'><span className='warning'>A flood/flash flood WATCH</span></Card.Title>
              <Card.Text className='pageDetails'>
                Meaning a flood or flash flood is possible.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='transparentBackground'>
            <Card.Body>
              <Card.Title className='infoPageHeading'><span className='warning'>A flood/flash flood WARNING</span></Card.Title>
              <Card.Text className='pageDetails'>
                Means flooding or flash flooding is already occurring or will occur soon. TAKE IMMEDIATE PRECAUTIONS!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <div className='testcolour'>
        <Row>
          <Col>
            <h3 className='infoPageHeading'>What Should You Do Before a Flood?</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <h5 className='infoPageHeading'>Prepare in Advance</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Assemble an emergency preparedness kit.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Create a household evacuation plan that includes your pets.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Stay informed about your community’s risk and response plans.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Ensure each family member knows how to get back in touch if you are separated during an emergency.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Download the Emergency App for iPhone or for Android.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <br />
            <h5 className='infoPageHeading'>Right Before a Flood</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Fill plastic bottles with clean water for drinking.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Fill bathtubs and sinks with water for flushing the toilet or washing the floor or clothing.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Fill your car's gas tank, in case you need to evacuate.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Bring outdoor belongings, such as patio furniture, indoors.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Turn off propane tanks to reduce the potential for fire.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <br />
            <h5 className='infoPageHeading'>Protecting Your Family</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Talk with your family about what to do if a flood watch or warning is issued. Discussing floods ahead of
                time helps reduce fear, especially for younger children.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Ensure that every member of your family carries a Safe and Well wallet card.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'><span className='boldFont'>Make sure you have access to a radio broadcasts:</span>
                <ListGroup.Item className='transparentBackground listDetails'>Find an online radio station.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Search for a NOAA radio app in the Apple Store or Google Play.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Purchase a battery-powered or hand-crank NOAA radio in the Red Cross Store.</ListGroup.Item>
              </ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Find out if you are located in a floodplain, which is considered a Special Flood Hazard Area. If so, you are still eligible for flood insurance.
                Check with your city or county government (start with the Building or Planning Department) to review the Flood Insurance Rate Maps, published by the Federal Emergency Management Agency (FEMA).</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Find out if local streams or rivers flood easily.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Keep insurance policies, documents, and other valuables in a safe-deposit box. You may need quick, easy access to these documents. Keep them in a
                safe place less likely to be damaged during a flood. Take pictures on a phone and keep copies of important documents and files on a flashdrive that you can carry with you on your house or car keys.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <br />
            <br />
            <h5 className='infoPageHeading'>Protecting Your Home</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>If you live in a floodplain, elevate and reinforce your home to make damage less likely during a flood.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'><span className='boldFont'>Check with a professional to:</span>
                <ListGroup.Item className='transparentBackground listDetails'>Raise your furnace, water heater, and electric panel to floors that are less likely to be flooded. An undamaged water heater may be your
                  best source of fresh water after a flood.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Install check valves in plumbing to prevent floodwater from backing up into the drains of your home. (As a last resort, when floods threaten,
                  use large corks or stoppers to plug showers, tubs, or basins.)</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Construct barriers such as levees, berms, and flood walls to stop floodwater from entering the building (if permitted by local building codes).</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Seal walls in basements with waterproofing compounds to avoid seepage through cracks.</ListGroup.Item>
              </ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'><span className='boldFont'>Use sand bags when flooding is expected:</span>
                <ListGroup.Item className='transparentBackground listDetails'>It takes two people about one hour to fill and place 100 sandbags, creating a wall one foot high and 20 feet long.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Make sure you have enough sand, burlap or plastic bags, shovels, strong helpers, and time to place them properly.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>If a flood is expected, some communities will offer free sandbags to residents. Be sure to watch or listen to the news so you can access these resources.</ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <br />
            <h5 className='infoPageHeading'>Protecting Your Pets & Animals</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Prepare a pet emergency kit for your companion animals.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Ensure that any outbuildings, pastures, or corrals are protected in the same way as your home.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>If installing or changing fence lines, consider placing them in such a way that your animals are able to move to higher ground in the event of flooding.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
      <br />
      <Row>
        <Col>
          <h3 className='infoPageHeading'>What Should You Do During a Flood?</h3>
          <br />
          <h4 className='infoPageSubHeading'>Remember: <span className='warning'>Turn Around, Don't Drown!</span></h4>
        </Col>
      </Row>
      <br />
      <Row>
        <Col><img src="weatherPics/carFlood.png" alt="Car Flood" className='imageSnowmanDesign' /></Col>
      </Row>
      <Row>
        <Col>
          <br />
          <h5 className='infoPageHeading'>How to Stay Safe Indoors</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Turn off the power and water mains if instructed to do so by local authorities.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Boil tap water until water sources have been declared safe.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Avoid contact with floodwater. It may be contaminated with sewage or contain dangerous insects or animals.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Continue listening to local area radio, radio or TV stations for the latest information and updates.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Don’t use gas or electrical appliances that have been flooded.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Dispose of any food that comes into contact with flood water.</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <br />
          <h5 className='infoPageHeading'>How to Stay Safe Outdoors</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Don't walk, swim or drive through floodwater. Just six inches of fast-flowing water can knock you over and two feet will float a car.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>If caught on a flooded road with rapidly rising waters, get out of the car quickly and move to higher ground.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Don't walk on beaches or riverbanks.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Don’t allow children to play in or near flood water.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Avoid contact with floodwater. It may be contaminated with sewage or contain dangerous insects or animals.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Stay out of areas subject to flooding. Underpasses, dips, low spots, canyons, washes, etc. can become filled with water.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <br />
      <div className='testcolour'>
        <Row>
          <Col>
            <h3 className='infoPageHeading'>How Can You Stay Safe After a Flood?</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <br />
            <h5 className='infoPageHeading'>After a Flood</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Let friends and family know you’re safe. The American Red Cross can help you reconnect with family members.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>If evacuated, return only when authorities say it is safe to do so.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Continue listening to local news or a NOAA Weather Radio for updated information and instructions.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Keep children and pets away from hazardous sites and floodwater.</ListGroup.Item>
            </ListGroup>
            <br />
            <br />
            <h5 className='infoPageHeading'>Caring For Yourself & Loved Ones</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Pay attention to how you and your loved ones are experiencing and handling stress. Promote
                <a href='https://www.redcross.org/get-help/disaster-relief-and-recovery-services/recovering-emotionally.html'> emotional recovery</a> by following these tips.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Do not use water that could be contaminated to wash dishes, brush teeth, prepare food, wash hands, make ice or make baby formula.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Watch pets closely and keep them under your direct control.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Help people who require special assistance—children, older adults, those without transportation,
                large families who may need additional help in an emergency situation, people with disabilities, and the people who care for them.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col><img src="weatherPics/pushCarFlood.png" alt="Push Car Flood" className='imageHeight' /></Col>
        </Row>
        <Row>
          <Col>
            <br />
            <h5 className='infoPageHeading'>Returning Home Safely</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Beware of snakes, insects and other animals that may be in or around your home.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>If power lines are down outside your home, do not step in puddles or standing water. Report them immediately to the power company.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Follow these tips for inspecting your <a href='https://www.redcross.org/get-help/disaster-relief-and-recovery-services/home-structural-elements.html'>home’s structure </a>
                and <a href='https://www.redcross.org/get-help/disaster-relief-and-recovery-services/utilities-major-systems.html'>utilities & systems</a> after a flood.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>If any gas or electrical appliances were flooded, don’t use them until they have been checked for safety.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Dispose of any food that has come into contact with flood water.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Take pictures of home damage, both of the buildings and its contents, for insurance purposes.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'><span className='boldFont'>Remember:</span> standard homeowners insurance doesn’t cover flooding but flood insurance does. </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <br />
            <h5 className='infoPageHeading'>Cleaning and Repairing Your Home</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Wear protective clothing, including rubber gloves and rubber boots, and be cautious when cleaning up.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Learn more about how to clean up after a flood, including the supplies you’ll need, how to sanitize food contact surfaces, and how to repair water damage.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Be careful when moving furnishings or debris, because they may be waterlogged and heavier.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Throw out items that absorb water and cannot be cleaned or disinfected. This includes mattresses, carpeting, cosmetics, stuffed animals and baby toys.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Throw out all food, beverages and medicine exposed to flood waters and mud. When in doubt, throw it out. This includes canned goods, plastic utensils, baby bottle nipples
                and containers with food or liquid that has been sealed shut.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Pump out flooded basements gradually (about one-third of the water per day) to avoid structural damage. If the water is pumped out completely in a short period of time,
                pressure from water-saturated soil on the outside could cause basement walls to collapse.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Service damaged septic tanks, cesspools, pits, and leaching systems as soon as possible. Damaged sewage systems are health hazards.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <h5 className='infoPageHeading'>Ask a Professional</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Raise your furnace, water heater, and electric panel to higher floors if they are in areas of your home that may be flooded. This will prevent damage.
                An undamaged water heater may be your best source of fresh water after a flood.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Install check valves in plumbing to prevent floodwater from backing up into the drains of your home.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Construct barriers such as levees, berms, and flood walls to stop floodwater from entering the building. Permission to construct such barriers may be
                required by local building codes.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails fontCentre'>Seal walls in basements with waterproofing compounds to avoid seepage through cracks.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
      <br />
      <Row>
        <Col>
          <h3 className='infoPageHeading'>FACT vs. FICTION</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col><img src="weatherPics/townFlood.png" alt="Town Flood" className='imageSnowmanDesign' /></Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h5 className='infoPageHeading warning'>Fiction:</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Fill your sinks and bathtubs for drinking water in case flooding water interrupts or contaminates the public water supply.</ListGroup.Item>
            <br />
            <br />
            <ListGroup.Item className='transparentBackground listDetails'>If you have a truck or SUV, it’s okay to drive across rushing flood water.</ListGroup.Item>
            <br />
            <br />
            <ListGroup.Item className='transparentBackground listDetails'>You will never be able to buy flood insurance if your property has been flooded in the past.</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5 className='infoPageHeading warning'>Fact:</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Water stored in bathtubs and sinks should never be used for drinking or for bathing young children because lead can leak from the glaze in
              bathtubs and sinks into water stored in them. However, you can use water stored in bathtubs and sinks for flushing the toilet or washing the floor or clothing.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Just two feet of rushing water can carry away most vehicles, including SUVs and pickup trucks. Never try to drive across rushing flood water.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>You are still eligible to purchase flood insurance after your property has flooded, provided your community participates in the National
              Flood Insurance Program (NFIP). Check with your local emergency management office for more information.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Flood