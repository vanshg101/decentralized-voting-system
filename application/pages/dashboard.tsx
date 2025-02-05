import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AuthorityContext } from '../context/AuthorityContext';
import { OngoingElectionCard, PreviousElectionCard, UpcomingElectionCard } from '../components';

const Dashboard = () => {
    const { previousElection, onGoingElection, upComingElection } = useContext(AuthorityContext);

    return (
        <>
            <Grid sx={{ pt: 10, gap: 20 }} container justifyContent={"center"}>
                <Grid item xs={3} justifyContent={'center'}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        border: '1px solid #ddd', // Subtle border for section
                        borderRadius: 8,
                        padding: 3,
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
                        backgroundColor: '#fff',
                    }}>
                        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }} variant='h3'>Previous Elections</Typography>
                        {
                            previousElection?.map((electionList: any, index: any) => {
                                const { election, electionId } = electionList;
                                const { name, startTime, endTime } = election;
                                return <PreviousElectionCard electionId={electionId} electionName={name} startTime={startTime} endTime={endTime} key={index} />
                            })
                        }
                    </Box>
                </Grid>

                <Grid item xs={3} justifyContent={'center'}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        border: '1px solid #ddd', // Subtle border for section
                        borderRadius: 8,
                        padding: 3,
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
                        backgroundColor: '#fff',
                    }}>
                        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }} variant='h3'>Ongoing Elections</Typography>
                        {
                            onGoingElection?.map((electionList: any, index: any) => {
                                const { election, electionId } = electionList;
                                const { name, startTime, endTime } = election;
                                return <OngoingElectionCard electionId={electionId} electionName={name} startTime={startTime} endTime={endTime} key={index} />
                            })
                        }
                    </Box>
                </Grid>

                <Grid item xs={3} justifyContent={'center'}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        border: '1px solid #ddd', // Subtle border for section
                        borderRadius: 8,
                        padding: 3,
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
                        backgroundColor: '#fff',
                    }}>
                        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }} variant='h3'>Upcoming Elections</Typography>
                        {
                            upComingElection?.map((electionList: any, index: any) => {
                                const { election, electionId } = electionList;
                                const { name, startTime, endTime } = election;
                                return <UpcomingElectionCard electionId={electionId} electionName={name} startTime={startTime} endTime={endTime} key={index} />
                            })
                        }
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
