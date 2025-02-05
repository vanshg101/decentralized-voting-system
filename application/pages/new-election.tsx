    import { Grid, Box, TextField, Typography, Slide, Backdrop, CircularProgress } from '@mui/material';
    import React, { useContext, useState } from 'react';
    import { AuthorityContext } from '../context/AuthorityContext';
    import CancelIcon from '@mui/icons-material/Cancel';
    import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

    function NewElection() {
        const { isBallotInitialized, isBallotLoading, initializeBallot } = useContext(AuthorityContext);
        const [electionState, setElectionState] = useState({
            name: '',
            startTime: null,
            endTime: null,
        });

        const handleNameChange = (e) => {
            const { value, name } = e.target;
            setElectionState({
                ...electionState,
                [name]: value
            });
        };

        const handleTimeChange = (e) => {
            const { value, name } = e.target;
            const dateValue = new Date(value);
            setElectionState({
                ...electionState,
                [name]: dateValue.getTime(),
            });
        };

        const handleOnSubmitBtn = () => {
            initializeBallot(electionState);
        };

        return (
            <>
                <Grid sx={{ justifyContent: 'center', paddingTop: 8, paddingBottom: 8 }} container>
                    <Grid item md={12}>
                        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#00000', paddingBottom: 10 }} variant='h5'>
                            Initialize Ballot
                        </Typography>
                    </Grid>
                    <Grid item container spacing={3} justifyContent="center">
                        {/* Election Name Field */}
                        <Grid item xs={12} sm={4}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 3,
                                border: '1px solid #ddd',
                                borderRadius: 8,
                                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#fff',
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#333' }}>Election Name:</Typography>
                                <TextField
                                    value={electionState.name}
                                    autoComplete='off'
                                    name='name'
                                    onChange={handleNameChange}
                                    placeholder='Enter Election name'
                                    type='text'
                                    sx={{
                                        borderRadius: 2,
                                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                        '& .MuiInputBase-root': { borderRadius: 2 }
                                    }}
                                />
                            </Box>
                        </Grid>

                        {/* Start Time Field */}
                        <Grid item xs={12} sm={4}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 3,
                                border: '1px solid #ddd',
                                borderRadius: 8,
                                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#fff',
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#333' }}>Enter Election Start Date & Time</Typography>
                                <TextField
                                    name='startTime'
                                    onChange={handleTimeChange}
                                    type='datetime-local'
                                    inputProps={{ min: new Date().toISOString().slice(0, 16) }}
                                    sx={{
                                        borderRadius: 2,
                                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                        '& .MuiInputBase-root': { borderRadius: 2 }
                                    }}
                                />
                            </Box>
                        </Grid>

                        {/* End Time Field */}
                        <Grid item xs={12} sm={4}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 3,
                                border: '1px solid #ddd',
                                borderRadius: 8,
                                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#fff',
                            }}>
                                <Typography sx={{ fontWeight: 'bold', color: '#333' }}>Enter Election End Date & Time</Typography>
                                <TextField
                                    name='endTime'
                                    onChange={handleTimeChange}
                                    type='datetime-local'
                                    inputProps={{ min: new Date().toISOString().slice(0, 16) }}
                                    sx={{
                                        borderRadius: 2,
                                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                        '& .MuiInputBase-root': { borderRadius: 2 }
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Initialize Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                        <button onClick={handleOnSubmitBtn} style={{
                            backgroundColor: '#66BB6A',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                        }}>
                            Initialize
                        </button>
                    </Box>
                </Grid>

                {/* Success Message */}
                <Slide direction="up" in={isBallotInitialized} mountOnEnter unmountOnExit>
                    <Box sx={{
                        backgroundColor: '#4CAF50',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                        <Typography>Successful</Typography>
                        <CancelIcon sx={{ cursor: 'pointer' }} />
                    </Box>
                </Slide>

                {/* Loading Spinner */}
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isBallotLoading}>
                    <CircularProgress sx={{ color: "#66BB6A" }} />
                </Backdrop>
            </>
        );
    }

    export default NewElection;
