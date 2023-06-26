import React, { useState } from 'react';
import {Stack, Button, ButtonGroup} from '@mui/material';

export const ButtonGroupWid = () => {
    
    return (
        <div>
            <Stack>
            <ButtonGroup variant="contained">
                <Button>Izquierda</Button>
                <Button>Centro</Button>
                <Button>Derecha</Button>
            </ButtonGroup>
            </Stack>
        </div>
       
    )
}