import Swal from "sweetalert2";

type Icon = 'warning' | 'error' | 'success' | 'info' | 'question';
type ShowMessageParams = (title: string, text: string, icon?: Icon) => void;

export const showMessageResponse: ShowMessageParams = (title, text, icon = 'info') => {
    Swal.fire({
        icon,
        title,
        text
    })
}