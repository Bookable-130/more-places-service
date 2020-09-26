// individual listing component
import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import { Card, Frame, Image, Rating, Star, RoomDescription, Text, Price } from '../styling.js';

class ListingEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false
    };
  }

  render() {
    return (
      <Card>
        <div>
          <Frame>
            <Image src={this.props.listing.photoUrl}></Image>
            <div className="listing-headers">
              <div className="listing-superhost">Superhost</div>
              <div className="listing-heart"><button>heart</button></div>
            </div>
          </Frame>
          <Rating>
            <Star>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" style={{height: 14 + 'px', width: 14 + 'px', fill: '#FF385D'}}>
                <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"/>
              </svg>
            </Star>
            <span>{this.props.listing.rating}</span>
            <span style={{color: 'rgb(113, 113, 113)'}}>{` (${this.props.listing.reviewCount})`}</span>
          </Rating>
          <RoomDescription>
            <Text>{`${this.props.listing.roomType} · `}</Text>
            <Text>{this.props.listing.numBeds} Beds</Text>
          </RoomDescription>
          <RoomDescription>
            {`${this.props.listing.location} - ${this.props.listing.description}`}
          </RoomDescription>
          <div>
            <Price>${this.props.listing.price}</Price>
            <Text> / night</Text>
          </div>
        </div>
      </Card>
    );
  }
}

export default ListingEntry;