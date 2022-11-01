import React, { Component } from 'react'
import Loading from '../../img/loading.gif'
export default class index extends Component {
    render() {
        return (
            <div>
                <div class="divLoader">
                    <img
                        src={Loading}
                        alt="new"
                        style={{ width: 100 }}
                    ></img>
                </div>
            </div>
        )
    }
}
