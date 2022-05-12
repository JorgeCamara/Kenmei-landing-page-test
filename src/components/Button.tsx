import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
    border-radius: 10px;
    padding: 5px 10px;
    min-width: 110px;
    height: 35px;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 8px;
    background-color: #00AEEA;
    color: white;
    border-color: transparent transparent transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor: pointer;
        color: white;
        background-color: #0790BF;
    }
`;

const Button: React.FC<IButtonProps> = ({ className, ...props }) => {
    const { disabled = false } = props;

    return(
        <StyledButton className={className} disabled={disabled} onClick={() => props.onClick()}>
            {props.label}
        </StyledButton>
    )
};

export default Button;