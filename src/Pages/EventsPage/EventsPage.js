import React, { Component } from 'react'

import SectionHeading from '../../Components/SectionHeading/SectionHeading'

import UpcomingEventSection from '../../Components/UpcomingEventSection/UpcomingEventSection'
import NavBar from '../../Components/NavBar/NavBar'

import UpcomingEvents from '../../Assets/Data/UpcomingEvents'

import './EventsPage.scss'

class EventsPage extends Component {
    constructor(){
        super()
        this.state = {
            upcomingEvents: UpcomingEvents
        }
    }
    render() {
        return (
            <div className='events-page'>
                <NavBar />
                <SectionHeading heading='Upcoming Events' />
                <div className='upcoming-events-container'>
                {
                    this.state.upcomingEvents.length ?
                    this.state.upcomingEvents.map(event => <UpcomingEventSection key={event.id} event={event} />)
                    : <div className='no-events'>No new events</div>
                }
                </div>
            </div>
        )
    }
}

export default EventsPage