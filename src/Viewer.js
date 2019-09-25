import React, {Component} from 'react';
import image00 from './assets/00.jpg';
import image01 from './assets/01.jpg';
import image02 from './assets/02.png';
import image03 from './assets/03.jpg';
import image04 from './assets/04.jpg';
import image05 from './assets/05.jpg';


class Viewer extends Component {
    
    componentDidMount() {
        var urlid = 'b36d9a6575a04cc3948405d33c962900';
        
        var client = new window.Sketchfab('1.0.0', this.iframe);
        client.init(urlid, {
            success: (api) => {
                api.start();
                api.addEventListener('viewerready', function() {
                    api.setCameraLookAt( [-170.9961548434, 153.1387563434, 38.6248553661], [-93.2623581468, 158.9503791641, 42.9691579195] );
                    console.log( 'Viewer is ready' );
                    api.getAnnotationList(function(err, annotations) {
                        console.log(annotations);
                    });
                    api.addEventListener('annotationFocus', function(index) {
                        var annotationNumber = index+1;
                        document.getElementById('parentDiv').className = "slides";
                        document.getElementById('annotation-' + index).className = "slide";
                        document.getElementById('annotation-' + annotationNumber).className = "slide active";
                        console.log('Reached annotation ' + index);
                    });
                    api.addEventListener('annotationBlur', function(index) {
                        document.getElementById('parentDiv').className = "slide";
                    });
                });
            },
            error: function onError() {
                console.log('Viewer error');
            }
        });
    }

    render() {
        return (
            <div className="sketchfab-viewer">
                <iframe ref={(iframe) => {
                    this.iframe = iframe;
                }} src="about:blank" allowFullScreen="true" title="Sketchfab Viewer" width="100%" height="1000px" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" allow="autoplay; fullscreen; vr" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                <div id="parentDiv" className="slide">
                    <div id="annotation-0" className="slide">
                        <img alt='slide1' src={image00}></img>
                    </div>
                    <div id="annotation-1" className="slide">
                        <img alt='slide2' src={image01}></img>
                    </div>
                    <div id="annotation-2" className="slide">
                        <img alt='slide3' src={image02}></img>
                    </div>
                    <div id="annotation-3" className="slide">
                        <img alt='slide4' src={image03}></img>
                    </div>
                    <div id="annotation-4" className="slide">
                        <img alt='slide5' src={image04}></img>
                    </div>
                    <div id="annotation-5" className="slide">
                        <img alt='slide6' src={image05}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Viewer;
