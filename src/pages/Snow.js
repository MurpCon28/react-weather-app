import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import "./emergencies.css";

const Snow = () => {

  return (
    <Container fluid="md">
      <br />
      <Card className="bg-dark text-white">
        <Card.Img src="weatherPics/snowField.png" alt="Snow Field" className='imageDesign' />
        <Card.ImgOverlay>
          <Card.Title className='infoPageHeadingDark'><h3>Snow</h3></Card.Title>
          <Card.Text className='pageDetailsDark'>
            During extremely cold weather or winter storms, staying warm and safe can be a challenge.
            Winter storms can bring cold temperatures, power failures, loss of communication services, and icy roads.
            To keep yourself and your loved ones safe, you should know how to prepare your home and your car before a winter storm hits.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br />
      <Row>
        <Col>
          <h3 className='infoPageHeading'>Take immediate precautions if you hear these words on the news:</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card className='transparentBackground'>
            <Card.Body>
              <Card.Title className='infoPageHeading'><span className='warning'>Winter Storm WARNING</span></Card.Title>
              <Card.Text className='pageDetails'>
                Life-threatening, severe winter conditions have begun or will begin within 24 hours.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='transparentBackground'>
            <Card.Body>
              <Card.Title className='infoPageHeading'><span className='warning'>Blizzard WARNING</span></Card.Title>
              <Card.Text className='pageDetails'>
                Sustained winds or frequent gusts of 35 miles per hour or greater, plus considerable falling or blowing
                snow reducing visibility to less than a quarter mile, expected to prevail for three hours or longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Card className='transparentBackground'>
            <Card.Body>
              <Card.Title className='infoPageHeading'>Other winter storm words to listen for:</Card.Title>
              <Card.Text className='pageDetails'>
                <span className='minorWarning'>WIND CHILL Temperature:</span> How cold people and animals feel when outside. As wind increases,
                heat is carried away from your body at a faster rate, driving down your body temperature and
                making you feel much colder. The wind chill temperature is not the actual temperature but rather how
                wind and cold feel on exposed skin.
              </Card.Text>
              <Card.Text className='pageDetails'>
                <span className='minorWarning'>Winter Storm OUTLOOK:</span> Winter storm conditions possible in the next two to five days.
                Stay tuned to local media for updates.
              </Card.Text>
              <Card.Text className='pageDetails'>
                <span className='minorWarning'>Winter Storm OUTLOOK:</span> Winter storm conditions possible within the next 36 to 48 hours.
                Review your winter storm plans and stay informed about weather conditions.
              </Card.Text>
              <Card.Text className='pageDetails'>
                <span className='minorWarning'>Winter Weather ADVISORY:</span> Winter weather conditions expected to cause significant inconveniences
                and may be hazardous but not life-threatening if you are cautious.
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
            <h3 className='infoPageHeading'>What Should You Do Before a Winter Storm?</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <h5 className='infoPageHeading'>Protect Your Family</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Talk with your family about what to do if a winter storm watch or warning is issued.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'><span className='boldFont'>Have your vehicle winterized before the winter storm season to decrease your chance of being stranded.</span>
                <ListGroup.Item className='transparentBackground'>Have a mechanic check your battery, antifreeze, wipers and windshield washer fluid, ignition system, thermostat, lights,
                  flashing hazard lights, exhaust system, heater, brakes, defroster, and oil.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground'>Install good winter tires with adequate tread. All-weather radials are usually adequate but some jurisdictions require
                  vehicles to be equipped with chains or snow tires with studs.</ListGroup.Item>
              </ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'><span className='boldFont'>Keep in your vehicle:</span>
                <ListGroup.Item className='transparentBackground'>A windshield scraper and small broom.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground'>A small sack of sand for generating traction under wheels and a set of tire chains or traction mats.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground'>Matches in a waterproof container.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground'>A brightly colored (preferably red) cloth to tie to the antenna.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground'>An emergency supply kit, including warm clothing.</ListGroup.Item>
              </ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Keep your vehicle’s gas tank full so you can leave right away in an emergency and to keep the fuel line from freezing.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Keep a supply of non-clumping kitty litter to make walkways and steps less slippery.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Service snow removal equipment before the winter storm season and maintain it in good working order.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Keep handy a warm coat, gloves or mittens, hat, water-resistant boots, and extra blankets and warm clothing for everyone in your household.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <br />
            <h5 className='infoPageHeading'>Protect Your Home</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Learn how to protect pipes from freezing.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Make sure your home heating sources are installed according to local codes and permit requirements
                and are clean and in working order.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Make sure your home is properly insulated. Caulk and weather-strip doors and windowsills to keep cold air out.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Install storm windows or cover windows with plastic from the inside to provide an extra layer of insulation to keep
                cold air out.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Consider buying emergency heating equipment, such as a wood- or coal-burning stove or an electric or kerosene heater
                (if permitted by law in your area). Follow all of the manufacturer's instructions for safe installation and use.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Consider storing sufficient heating fuel. Regular fuel sources may be cut off. Be cautious of fire hazards when
                storing any type of fuel.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>If you have a fireplace, consider keeping a supply of firewood or coal. Be sure the fireplace is properly vented and in
                good working order and that you dispose of ashes safely.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Consider installing a portable generator, following our
                <a href='https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm/frozen-pipes.html'> safety tips</a> to avoid home fires and carbon monoxide poisoning</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Consider purchasing flood insurance, if you live in a flood-prone area, to cover possible flood damage that may occur during the spring thaw.
                Homeowners' policies do not cover damage from floods. </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <br />
            <h5 className='infoPageHeading'>Protect Your Pets and Animals</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Bring your companion animals indoors.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Create a place where your other animals can be comfortable in severe winter weather. Horses and livestock should have a
                shelter where they can be protected from wind, snow, ice, and rain. Grazing animals should have access to a protected supply of food and non-frozen water.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Be aware of the potential for flooding when snow and ice melt and be sure that your animals have access to high ground that is not
                impeded by fencing or other barriers. You may not be able to get to them in time to relocate them in the event of flooding.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Install snow fences in rural areas to reduce drifting snow on roads and paths, which could block access to homes,
                barns, and animals' feed and water.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <br />
            <br />
            <h5 className='infoPageHeading'>If You Do Nothing Else, Do This</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Listen to local area radio or TV stations for the latest information and updates.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Be prepared to evacuate if you lose power or heat and know your routes and destinations. Find a local emergency shelter.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Check emergency kit and replenish any items missing or in short supply, especially medications and medical supplies. Keep it nearby.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Be sure you have ample heating fuel.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>If you have alternative heating sources, such as fireplaces, wood- or coal-burning stoves, or space heaters, be sure they are clean and in working order.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Bring your companion animals inside and ensure that your horses and livestock have blankets if appropriate and unimpeded access to shelter, food, and non-frozen water.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
      <br />
      <Row>
        <Col>
          <h3 className='infoPageHeading'>What Should You Do During a Winter Storm?</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col><img src="weatherPics/snowUmbrella.png" alt="Snow Umbrella" className='imageHeight' /></Col>
        <Col>
          <h5 className='infoPageHeading'>Stay Indoors if Possible</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Wear layers of loose-fitting, lightweight, warm clothing.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Listen to local news or Weather Radio for updated emergency information.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Bring your companion animals inside.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Move other animals to sheltered areas with a supply of non-frozen water.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Eat regularly.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Drink fluids such as warm broth or juice. Avoid caffeine and alcohol which can cause dehydration.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Conserve fuel.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Check on relatives, neighbors, and friends who are elderly or live alone.</ListGroup.Item>
          </ListGroup>
          <br />
          <h5 className='infoPageHeading'>Protect Yourself Outdoors</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Wear layered clothing, mittens or gloves, and a hat. Outer garments should be tightly woven and water repellent.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Cover your mouth to protect your lungs from severely cold air. Avoid taking deep breaths; minimize talking.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Watch for signs of hypothermia and frostbite.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Keep dry. Wet clothing loses much of its insulating value and transmits heat rapidly away from the body.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Avoid overexertion, such as shoveling heavy snow, pushing a vehicle, or walking in deep snow.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Walk carefully on snowy, icy sidewalks.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Use public transportation if possible.</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <br />
      <div className='testcolour'>
        <Row>
          <Col>
            <h3 className='infoPageHeading'>How Can You Stay Safe While Driving?</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <Card.Img src="weatherPics/snowCity.png" alt="Snow City" className='imageSnowDesign' />
        </Row>
        <Row>
          <Col>
            <br />
            <h5 className='infoPageHeading'>Driving in Winter Conditions</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Check your vehicle emergency supplies kit and replenish it if necessary.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'><span className='boldFont'>Bring enough of the following for each person:</span>
                <ListGroup.Item className='transparentBackground listDetails'>Blankets or sleeping bag.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Rain gear, extra sets of dry clothing, mittens, socks, and wool hats.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Newspapers for insulation.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Plastic bags for sanitation.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Canned fruit, nuts, and high energy snacks.</ListGroup.Item>
                <ListGroup.Item className='transparentBackground listDetails'>Warm broth in a thermos and several bottles of water.</ListGroup.Item>
              </ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Bring your cell phone and make sure the battery is charged.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Plan to travel during daylight and, if possible, take another person with you.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Let someone know your destination, your route, and when you expect to arrive.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Before leaving, check the weather reports for all areas you will be passing through.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Watch out for sleet, freezing rain, freezing drizzle, and dense fog.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <br />
            <h5 className='infoPageHeading'>If You Are Stranded</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className='transparentBackground listDetails'>Stay in the vehicle and wait for help. Do not leave the vehicle to search for assistance unless help is
                visible within 100 yards (91 meters).</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Display a trouble sign to indicate you need help. Hang a brightly colored cloth (preferably red) on the radio
                antenna and raise the hood after snow stops falling.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Turn on the engine for about 10 minutes each hour.  Use the heater while the engine is running. Keep the exhaust
                pipe clear of snow, and slightly open a downwind window for ventilation.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Leave the overhead light on when the engine is running so that you can be seen.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Do light exercises to keep up circulation. Clap your hands and move your arms and legs occasionally.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>If more than one person is in the vehicle, take turns sleeping.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Huddle together for warmth. Wrap yourself in newspapers, maps, and even the removable floor mats to help trap more body heat.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Watch for signs of frostbite and hypothermia.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Drink fluids to avoid dehydration, which can make you more susceptible to the ill effects of cold and to heart attacks.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Avoid overexertion. Shoveling snow or pushing a vehicle can bring on a heart attack or make other medical conditions worse.</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
      <br />
      <Row>
        <Col>
          <h3 className='infoPageHeading'>How Can You Stay Safe After a Winter Storm?</h3>
        </Col>
      </Row>
      <br />
      <Row>
        <Col><img src="weatherPics/snowmen.png" alt="Snowmen" className='imageSnowmanDesign' /></Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h5 className='infoPageHeading'>After a Winter Storm</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Continue listening to local news or Weather Radio station for updated information and instructions.
              Access to some parts of the community may be limited or roads may be blocked.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Help people who require special assistance—infants, elderly people, those without transportation, large
              families who may need additional help in an emergency situation, people with disabilities, and the people who care for them.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Avoid driving and other travel until conditions have improved.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Avoid overexertion. Heart attacks from shoveling heavy snow are a leading cause of death during the winter.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>Check on your animals and ensure that their access to food and water is unimpeded by drifted snow, ice, or other obstacles.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'>If you are using a portable generator, take precautions against carbon monoxide poisoning, electrocution and fire.</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5 className='infoPageHeading'>Avoid Frostbite and Hypothermia</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className='transparentBackground listDetails'>Frostbite and hypothermia are cold-related emergencies that may quickly become life or limb threatening.</ListGroup.Item>
            <ListGroup.Item className='transparentBackground listDetails'><span className='boldFont'>Take these steps to avoid frostbite and hypothermia:</span>
              <ListGroup.Item className='transparentBackground listDetails'>Be aware of the wind chill. Dress appropriately and avoid staying in the cold too long. Wear a hat and gloves when 
              appropriate with layers of clothing. Avoid unnecessary exposure of any part of the body to the cold.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Drink plenty of warm fluids or warm water but avoid caffeine and alcohol. Stay active to maintain body heat.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Take frequent breaks from the cold.</ListGroup.Item>
              <ListGroup.Item className='transparentBackground listDetails'>Get out of the cold immediately if the signals of hypothermia or frostbite appear.</ListGroup.Item>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Snow