import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

export interface BasicButtonProps {
    id: string
    isDisabled?: boolean
    isLoading?: boolean
    label?: string
    className?: string
    colors?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning'
    variant?: 'plain' | 'outlined' | 'soft' | 'solid'
    size?: 'sm' | 'md' | 'lg'
    type?: 'button' | 'submit' | 'reset'
    isFullWidth?: boolean
}

const BasicButton: React.FC<BasicButtonProps> = ({
    id,
    isDisabled,
    isLoading,
    label,
    className,
    colors,
    variant,
    size,
    type,
    isFullWidth
}) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
                id={id}
                className={className || ''}
                type={type}
                disabled={isDisabled}
                loading={isLoading}
                color={colors}
                variant={variant}
                size={size}
                fullWidth={isFullWidth}
            >
                {
                    !isLoading ? (label || '') : ('')
                }
            </Button>
        </Box>
    );
}

export default BasicButton;