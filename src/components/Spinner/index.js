import React, { Component } from 'react'
import Loading from '../../img/Spinner.gif'
export default class index extends Component {
    render() {
        return (
            <div>
                <div class="divLoader1">
                    <img
                        src={Loading}
                        alt="new"
                        style={{ width: 20 }}
                    ></img>
                </div>
            </div>
        )
    }
}
