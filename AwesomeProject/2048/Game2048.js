/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule Game2048
 * @flow
 */
'use strict';

import type ReactElement from 'ReactElement';
var md5 = require('./md5.min');
var React = require('react-native');
var NavigationBarSample = require('./NavigationBarSample');
var CalendarManager = require('react-native').NativeModules.CalendarManager;
CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');

var {
    AppRegistry,
    StyleSheet,
    Component,
    Text,
    View,
    NavigatorIOS,
    Navigator,
    Animated,
} = React;

var styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },
    container: {
        flex: 1
    }
})

class HelloWorld extends Component {
    loadData() {
        var password = '123456';
        password = md5(password);
        console.log('password:' + password);

        fetch('https://cheling.changjiangauto.com:8443/baileys_server/user/login?' +
                'mobile=15650798602&password=' + password + '&deviceType=0&vehicleType=0')
            .then(response => response.json())
            .then(json => console.log("response:" + json))
            .catch(error => console.log("networkError:" + error));
        // fetch('https://cheling.changjiangauto.com:8443/baileys_server/user/login', {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'text/html',
        //             'Content-Type': 'application/json',
        //         },
        //         body: 'mobile=15650798602&password=' + password + '&deviceType=0&vehicleType=0'
        //     })
    }
    render() {
        this.loadData();
        // var CalendarManager = require('react-native').NativeModules.CalendarManager;
        // CalendarManager.addEvent('Birthday Party',
        //     '4 Privet Drive, Surrey');
        return (
            <Text style = {[styles.text, styles.container]}> Hello World(Again) </Text>
        );
    }
}

class Game2048 extends Component {
    render() {
        return ( < NavigatorIOS style = {
                styles.container
            }
            initialRoute = {
                {
                    title: 'Game2048',
                    component: HelloWorld,
                    // (HelloWorld, SearchPage),
                }
            }
            />
        );
    }
}

class Playground extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }
    render(): ReactElement {
        return ( < Animated.Image // Base: Image, Text, View
            source = {
                {
                    uri: 'http://i.imgur.com/XMKOH81.jpg'
                }
            }
            style = {
                {
                    flex: 1,
                    transform: [ // `transform` is an ordered array
                        {
                            scale: this.state.bounceValue
                        }, // Map `bounceValue` to `scale`
                    ]
                }
            }
            />
        );
    }
    componentDidMount() {
        this.state.bounceValue.setValue(1.5); // Start large
        Animated.spring( // Base: spring, decay, timing
            this.state.bounceValue, // Animate `bounceValue`
            {
                toValue: 0.8, // Animate to smaller size
                friction: 1, // Bouncier spring
            }
        ).start(); // Start the animation
    }
}

// AppRegistry.registerComponent('Game2048', () => Game2048)

module.exports = Game2048;