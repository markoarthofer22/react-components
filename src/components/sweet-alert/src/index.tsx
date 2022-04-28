import * as React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export interface ISweetAlertProps {
    visible: boolean;
    title?: string;
    content?: string;
    timer?: number;
    timerProgressBar?: boolean;
    icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
    resolve?: (result: any) => void;
    showConfirmButton?: boolean;
    showCancelButton?: boolean;
}

export const SweetAlert: React.FC<ISweetAlertProps & Record<string, any>> = ({
    visible = false,
    content,
    title,
    timer,
    timerProgressBar,
    icon = 'success',
    showCancelButton = true,
    showConfirmButton = true,
    resolve,
    ...rest
}): JSX.Element => {
    const runSwal = (): void => {
        const ReactSwal = withReactContent(Swal);

        ReactSwal.fire({
            title,
            text: content,
            icon,
            timer,
            timerProgressBar,
            showCancelButton,
            showConfirmButton,
            ...rest,
        }).then((result: any) => {
            if (!resolve) return;

            resolve(result);
        });
    };

    React.useEffect(() => {
        if (!visible) return;

        runSwal();
    }, [visible]);

    return <></>;
};

export default SweetAlert;
