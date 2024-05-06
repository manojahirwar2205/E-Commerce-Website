

import { Button, ButtonGroup , styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyleButton = styled(Button)`
    border-radius: 50%;
`

const GroupedButton = () => {
    return (
        <Component>
           <StyleButton>-</StyleButton>
           <StyleButton>1</StyleButton>
           <StyleButton>+</StyleButton>
        </Component>
    )
}

export default GroupedButton;