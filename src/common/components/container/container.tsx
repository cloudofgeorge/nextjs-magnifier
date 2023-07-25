import clsx from 'clsx';
import { ReactFCWithChildren } from '@/types';

type ContainerProps = {
    className?: string;
};

export const Container: ReactFCWithChildren<ContainerProps> = ({ children, className }) => {
    const classNames = clsx('flex flex-col', className);

    return <div className={classNames}>{children}</div>;
};
