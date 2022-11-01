import React, { Component } from 'react';
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
export default class ToastMessage extends Component {

    render() {
        const { toastType, toastContent } = this.props
        return (
            <div>
                <ToastContainer draggable={false} transition={Zoom} autoClose={3000} />
                {
                    toastType === 'success' ?
                        toast.success(toastContent, {
                            className: "myFont",
                            draggable: true,
                            position: toast.POSITION.BOTTOM_RIGHT
                        }) : toastType === 'error' ? toast.error(toastContent, {
                            className: "myFont",
                            draggable: true,
                            position: toast.POSITION.BOTTOM_RIGHT
                        })
                            : toastType === 'warnig' ? toast.warn(toastContent, {
                                className: "myFont",
                                draggable: true,
                                position: toast.POSITION.BOTTOM_RIGHT
                            }) : toastType === 'info' ? toast.info(toastContent, {
                                className: "myFont",
                                draggable: true,
                                position: toast.POSITION.BOTTOM_RIGHT
                            }) : null
                }
            </div>
        );
    }
}
