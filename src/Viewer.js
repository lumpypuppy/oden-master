import React, {Component} from 'react';
import Action from './annotationNumber1';

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
                        var els = document.querySelectorAll('.active');
                        for (var i = 0; i < els.length; i++) {
                            els[i].classList.remove('active')
                          }
                        var annotationNumber = index+1;
                        document.getElementById('parentDiv').className = "slides";

                        document.getElementById('annotation-' + index).classList.remove("active");
                        document.getElementById('annotation-' + annotationNumber).className = "slide active";
                        console.log('Reached annotation ' + index);
                    });
                    api.addEventListener('annotationBlur', function(index) {
                        document.getElementById('annotation-' + index).classList.remove("active");
                        document.getElementById('annotation-' + index).className = "slide";
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
                }} src="about:blank" title="Sketchfab Viewer" width="100%" height="900px" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" frameBorder="0" webkitAllowFullScreen={true} mozAllowFullScreen={true} allowFullScreen={true}></iframe>
                <div id="parentDiv" className="slide">
                    <div id="annotation-0" className="slide">
                        
                    </div>
                    <div id="annotation-1" className="slide">
                        <Action />
                    </div>
                    <div id="annotation-2" className="slide">
                        <p>Test 2</p>
                    </div>
                    <div id="annotation-3" className="slide">
                        <p>Test 3</p>
                    </div>
                    <div id="annotation-4" className="slide">
                        <p>Test 4</p>
                    </div>
                    <div id="annotation-5" className="slide">
                        <p >Test 5</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Viewer;
