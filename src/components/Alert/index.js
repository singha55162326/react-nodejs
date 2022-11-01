import React, { Component } from "react";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
export default class alertYesNo extends Component {
    onEventClick = () => {
        alert('ook')
    }
    render() {
        return (
            <div>
                {MySwal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.onEventClick();
                    }
                })}
            </div>
        );
    }
}



