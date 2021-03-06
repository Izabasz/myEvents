import React from 'react';
import {Segment, Image, Item, Header, Button} from 'semantic-ui-react';
import {Link} from "react-router-dom";

const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};


const EventDetailedHeader = ({event}) => {
    return (
        <Segment.Group>
            <Segment basic attached="top" style={{padding: '0'}}>
                <Image src={`/assets/drinks.jpg`} fluid style={eventImageStyle}/>
                <Segment basic style={eventImageTextStyle}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size="huge"
                                    content={event.title}
                                    style={{color: 'white'}}
                                />
                                <p>{event.date}</p>
                                <p>
                                    Hosted by <strong>{event.hostedBy}</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>

            <Segment attached="bottom">
                <Button>Nie wezmę udziału</Button>
                <Button color="teal">Wezmę udział</Button>

                <Button as={Link} to={`/manage/${event.id}`} color="orange" floated="right">
                    Zarządzaj wydarzeniem
                </Button>
            </Segment>
        </Segment.Group>
    );
};

export default EventDetailedHeader;