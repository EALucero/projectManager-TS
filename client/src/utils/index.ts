import Swal from "sweetalert2";

type Icon = 'warning' | 'error' | 'success' | 'info' | 'question';
type ShowMessageParams = (title: string, text: string, icon?: Icon, redirect? : () => void,) => void

export const showMessageResponse: ShowMessageParams = (title, text, icon = 'info', redirect) => {
    Swal.fire({
        icon,
        title,
        text
    }).then((result) => {
        if (result.isConfirmed) {
           redirect && redirect()
          }
    })
}