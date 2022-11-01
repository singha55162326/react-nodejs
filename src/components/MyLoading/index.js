import React, { Component } from 'react';
import Loader from "react-loader-spinner";

export default class index extends Component {
    render() {
        return (
            <dvi style={{ zIndex: 99999, position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(52,52,52,0.5)', }}>
                <div style={{ zIndex: 99999, position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}>
                    <Loader
                        type="Bars"
                        color="#00BFFF"
                        height={150}
                        width={150}
                        radius={20}
                    />
                </div>
            </dvi>

        );
    }
}
