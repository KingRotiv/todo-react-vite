import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const ReactSwal = withReactContent(Swal)


const Alert = {}

Alert.customClassBootstrap = {
    confirmButton: "btn btn-primary m-1",
    cancelButton: "btn btn-secondary m-1",
    denyButton: "btn btn-danger m-1",
}

Alert.swal = function () {
    const _Swal = ReactSwal.mixin({
        allowOutsideClick: false,
        allowEscapeKey: false,
        buttonsStyling: false,
        customClass: Alert.customClassBootstrap
    })
    return _Swal
}

Alert.swalToast = function (options) {
    const { time = 2000, pos = "bottom-end" } = options
    const Toast = ReactSwal.mixin({
        toast: true,
        position: pos,
        showConfirmButton: false,
        timer: time,
        timerProgressBar: true,
        buttonsStyling: false,
        customClass: Alert.customClassBootstrap,
        didOpen: (toast) => {
            toast.onmouseenter = ReactSwal.stopTimer;
            toast.onmouseleave = ReactSwal.resumeTimer;
        }
    })
    return Toast
}

export default Alert