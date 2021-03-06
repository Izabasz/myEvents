import React from 'react';
import {Button, Icon, Item, List, Segment} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {deleteEvent} from "../eventActions";

const EventListItem = ({event}) => {
    const dispatch = useDispatch();

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.photo}/>
                        <Item.Content>
                            <Item.Header content={event.title}/>
                            <Item.Description>
                                Organizator: {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
                <span>
                    <Icon name='clock'/> {event.date}
                    <Icon name='marker'/> {event.venue}
                </span>
                <Segment secondary>
                    <List horizontal>
                        {event.attendees.map(attendee => (
                            <EventListAttendee key={attendee.id} attendee={attendee} />
                        ))}
                    </List>
                </Segment>
                <Segment clearing>
                    <div>{event.description} </div>
                    <Button
                        onClick={() => dispatch(deleteEvent(event.id))}
                        color='red'
                        floated='right'
                        content='Usuń'
                    />
                    <Button
                        as={Link} to={`/events/${event.id}`}
                        color='teal'
                        floated='right'
                        content='Edytuj'
                    />
                </Segment>
        </Segment.Group>
    );
};

export default EventListItem;