/**
 * Created by jonathan on 19-May-16.
 */

import React from 'react';

export default class OfflinePage extends React.Component{
    constructor(props) {
        super(props);
    }

    MyTestMap = React.createClass({
       npm mixins: [ReactMeteorData],
        componentDidMount() {
            GoogleMaps.load();
        },
        getMeteorData() {
            return {
                loaded: GoogleMaps.loaded(),
                mapOptions: GoogleMaps.loaded() && this._mapOptions()
            };
        },
        _mapOptions() {
            return {
                center: new google.maps.LatLng(31.769008, 35.209678),
                zoom: 8
            };
        },
        render() {
            if (this.data.loaded)
                return <GoogleMap name="mymap" options={this.data.mapOptions} />;

            return <div>Loading map...</div>;
        }
    });

    GoogleMap = React.createClass({
        propTypes: {
            name: React.PropTypes.string.isRequired,
            options: React.PropTypes.object.isRequired
        },
        componentDidMount() {
            GoogleMaps.create({
                name: this.props.name,
                element: React.findDOMNode(this),
                options: this.props.options
            });

            GoogleMaps.ready(this.props.name, function(map) {
                var marker = new google.maps.Marker({
                    position: map.options.center,
                    map: map.instance
                });
            });
        },
        componentWillUnmount() {
            if (GoogleMaps.maps[this.props.name]) {
                google.maps.event.clearInstanceListeners(GoogleMaps.maps[this.props.name].instance);
                delete GoogleMaps.maps[this.props.name];
            }
        },
        render() {
            return <div className="map-container"></div>;
        }
    });

    render(){
        return <MyTestMap />;
    }
}