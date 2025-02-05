import React, { useContext, useState } from 'react';
import { Backdrop, Grid, CircularProgress, Typography, Slide } from '@mui/material';
import { AuthorityContext } from '../context/AuthorityContext';
import CancelIcon from '@mui/icons-material/Cancel';
import { StyledChildBox, StyledSelect, StyledTextField, StyledSubmitBtn, StyledTypography, StyledMenuItem, StyledSuccessBox } from '../styles/newElectionStyle';

const RegisterVoters = () => {
    const { setIsVoterEmailSent, isVoterEmailSent, upComingElection, registerVoterCall, isVoterRegistrationLoading } = useContext(AuthorityContext);
    const [voterDetails, setVoterDetails] = useState({
        electionID: "",
        name: '',
        nid: null,
        email: ''
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setVoterDetails({
            ...voterDetails,
            [name]: value,
        });
    };

    const handleOnSubmit = (e) => {
        registerVoterCall(voterDetails);
    };

    const handleNotificationCancel = () => {
        setIsVoterEmailSent(false);
    };

    return (
        <>
            <Grid sx={{ justifyContent: 'center', paddingTop: 8, paddingBottom: 8 }} container>
                <Grid item md={12}>
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#000', paddingBottom: 10 }} variant='h5'>
                        Register Voter
                    </Typography>
                </Grid>

                {/* Election Selection */}
                <Grid item md={6} sx={{ paddingBottom: 3 }}>
                    <StyledChildBox sx={{ backgroundColor: '#fff', padding: 3, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                        <StyledTypography sx={{ color: '#000' }}>Please select an election</StyledTypography>
                        <StyledSelect
                            onChange={handleOnChange}
                            value={voterDetails.electionID}
                            displayEmpty
                            name='electionID'
                            sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}
                        >
                            <StyledMenuItem value={""} disabled><em>Please Select</em></StyledMenuItem>
                            {
                                upComingElection?.map((electionList, index) => {
                                    const { election, electionId } = electionList;
                                    return <StyledMenuItem value={electionId} key={index}>{election.name}</StyledMenuItem>
                                })
                            }
                        </StyledSelect>
                    </StyledChildBox>
                </Grid>

                {/* Voter Details */}
                <Grid container spacing={3} item md={6} sx={{ paddingBottom: 3 }}>
                    <Grid item xs={12}>
                        <StyledChildBox sx={{ backgroundColor: '#fff', padding: 3, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                            <StyledTypography sx={{ color: '#000' }}>Voter's Name</StyledTypography>
                            <StyledTextField 
                                autoComplete='off' 
                                onChange={handleOnChange} 
                                name='name' 
                                placeholder='Enter Voter Name' 
                                type='text' 
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                    '& .MuiInputBase-root': { borderRadius: 2 }
                                }}
                            />
                        </StyledChildBox>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledChildBox sx={{ backgroundColor: '#fff', padding: 3, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                            <StyledTypography sx={{ color: '#000' }}>Enter Voter NID</StyledTypography>
                            <StyledTextField 
                                autoComplete='off' 
                                onChange={handleOnChange} 
                                name='nid' 
                                type='number' 
                                placeholder='NID number' 
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                    '& .MuiInputBase-root': { borderRadius: 2 }
                                }}
                            />
                        </StyledChildBox>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledChildBox sx={{ backgroundColor: '#fff', padding: 3, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                            <StyledTypography sx={{ color: '#000' }}>Enter Voter Email</StyledTypography>
                            <StyledTextField 
                                autoComplete='off' 
                                name='email' 
                                onChange={handleOnChange} 
                                type='email' 
                                placeholder='example@email.com' 
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                    '& .MuiInputBase-root': { borderRadius: 2 }
                                }}
                            />
                        </StyledChildBox>
                    </Grid>
                </Grid>

                {/* Submit Button */}
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
    <StyledSubmitBtn
        onClick={handleOnSubmit}
        sx={{
            backgroundColor: '#66BB6A',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        }}
    >
        Register Voter
    </StyledSubmitBtn>
</Grid>

            </Grid>

            {/* Backdrop for loading state */}
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isVoterRegistrationLoading}>
                <CircularProgress sx={{ color: "#66BB6A" }} />
            </Backdrop>

            {/* Success notification */}
            <Slide direction="up" in={isVoterEmailSent} mountOnEnter unmountOnExit>
                <StyledSuccessBox sx={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>Successful</Typography>
                    <CancelIcon onClick={handleNotificationCancel} sx={{ cursor: 'pointer' }} />
                </StyledSuccessBox>
            </Slide>
        </>
    );
};

export default RegisterVoters;
