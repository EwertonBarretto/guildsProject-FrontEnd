import styled from "styled-components";

export const ModalImageStyle = styled.div`

.modal {
    font-size: 12px;
}

.modal>.header {
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
}

.modal>.content {
    width: 100%;
    padding: 10px 5px;
}

.modal>.actions {
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
}

.modal>.close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
}

.buttonTransparence {
    border: none !important;
    background: transparent !important;
    cursor: pointer;
    width: auto !important;
}

.image {
    width: 100%;
}`

export const ButtonConfig = styled.div`

width: auto !important;
.buttonTransparence {
    border: none !important;
    background: transparent !important;
    cursor: pointer;
}`