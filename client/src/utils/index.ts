import Swal from "sweetalert2";

type Icon = 'warning' | 'error' | 'success' | 'info' | 'question';
type Position = 'top' | 'top-start' | 'top-end' | 'center' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end';

type ShowMessageParams = (
    title: string,
    text: string,
    icon?: Icon,
    redirect?: () => void
) => void

export const showMessageResponse: ShowMessageParams = (title, text, icon = 'info', redirect) => {
    Swal.fire({
        title,
        text,
        icon
    }).then((result) => {
        if (result.isConfirmed) {
            redirect && redirect()
        }
    })
}

type ShowToastParams = (
    title: string,
    position?: Position,
    icon?: Icon,
    showConfirmButton?: boolean,
    timer?: number
) => void;

export const showToastMessage: ShowToastParams = (title, position = 'top-end', icon = 'success', showConfirmButton = false, timer = 1500) => {
    Swal.fire({
        title,
        position,
        icon,
        showConfirmButton,
        timer
    });
}