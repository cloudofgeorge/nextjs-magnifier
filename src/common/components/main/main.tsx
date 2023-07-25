import clsx from 'clsx';
import { ReactFCWithChildren } from '@/types';

type MainProps = {
    className?: string;
};

export const Main: ReactFCWithChildren<MainProps> = ({ children, className }) => {
    const classNames = clsx('flex-grow p-10', className);

    return <main className={classNames}>{children}</main>;
};
