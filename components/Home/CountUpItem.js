import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function CountUpItem({prefix, number, suffix}) {
    return (
        <div>
            <VisibilitySensor partialVisibility offset = {{bottom: 200}}>
                {({isVisible}) => (
                    <div>
                        {isVisible ? <CountUp startVal = {0}
                                              end = {number}
                                              duration = {6}
                                              useEasing = {true}
                                              suffix = {" " + suffix}
                                              prefix = {prefix  + " "}
                        /> : "0"}
                    </div>
                )}
            </VisibilitySensor>
        </div>
    );
}