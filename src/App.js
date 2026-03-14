import './App.css';
import * as React from "react";

import {Container, CssBaseline, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import {PlayerCountButtons} from "./components/PlayerCountButtons";
import {ChooseFactionButtons} from "./components/ChooseFactionButtons";

const ReachIndicator = ({ reach, requiredReach, disableFaction, setDisableFaction }) => {
    return (
        <div class="reach-banner" >
            <ToggleButton 
                value='disable' 
                selected={disableFaction} 
                onChange={() => setDisableFaction(true)}
            >
                Disable Factions
            </ToggleButton>
            
            <h3 class="reach" data-cy={`reach-indicator`}>{reach}/{requiredReach}+</h3>
            
            <ToggleButton 
                value='enable' 
                selected={!disableFaction} 
                onChange={() => setDisableFaction(false)}
            >
                Enable Factions
            </ToggleButton>
        </div>
    )
}

function App() {
    const [reach, setReach] = React.useState(0);
    const [requiredReach, setRequiredReach] = React.useState(21);
    const [playerCount, setPlayerCount] = React.useState(4);
    const [selectedValue, setSelectedValue] = React.useState('player4');
    
    const [disableFaction, setDisableFaction] = React.useState(false); 

    const idToValuesMap = {
        'player2': { requiredReach: 17, playerCount: 2 },
        'player3': { requiredReach: 18, playerCount: 3 },
        'player4': { requiredReach: 21, playerCount: 4 },
        'player5': { requiredReach: 25, playerCount: 5 },
        'player6': { requiredReach: 28, playerCount: 6 },

        '1clockwork1': { requiredReach: 8, playerCount: 1 },
        '1clockwork2': { requiredReach: 12, playerCount: 2 },
        '1clockwork3': { requiredReach: 14, playerCount: 3 },
        '1clockwork4': { requiredReach: 16, playerCount: 4 },

        '2clockwork1': { requiredReach: 9, playerCount: 1 },
        '2clockwork2': { requiredReach: 14, playerCount: 2 },
        '2clockwork3': { requiredReach: 18, playerCount: 3 },
        '2clockwork4': { requiredReach: 21, playerCount: 4 },
    };

    const handleToggleButtonChange = (event, newValue) => {
        if (newValue !== null) {
            setSelectedValue(newValue);
            const values = idToValuesMap[newValue];
            setRequiredReach(values.requiredReach);
            setPlayerCount(values.playerCount);
        }
    }

    return (
        <Container maxWidth="sm" className="App" sx={{ minWidth: "320px", height: "100%" }}>
            <CssBaseline/>
            <Stack
                container
                sx={{height: "100%"}}
                justifyContent="flex-start"
                alignItems="center"
            >
                <ReachIndicator 
                    reach={reach} 
                    requiredReach={requiredReach} 
                    disableFaction={disableFaction} 
                    setDisableFaction={setDisableFaction} 
                />
                <ChooseFactionButtons
                    playerCount={playerCount}
                    setReach={setReach}
                    reach={reach}
                    requiredReach={requiredReach}
                    disableFaction={disableFaction} // Passed down here
                />
                <PlayerCountButtons
                    selectedValue={selectedValue}
                    handleToggleButtonChange={handleToggleButtonChange}
                />
            </Stack>
        </Container>
    );
}

export default App;