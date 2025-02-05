import React, { useContext, useState } from 'react';
import { Backdrop, Grid, CircularProgress, Typography, Slide } from '@mui/material';
import { AuthorityContext } from '../context/AuthorityContext';
import CancelIcon from '@mui/icons-material/Cancel';
import { StyledChildBox, StyledSelect, StyledSubmitBtn, StyledTypography, StyledMenuItem, StyledTextField, StyledSuccessBox } from '../styles/newElectionStyle';

function CandidateRegistration() {
    const { upComingElection, isCandidateRegistered, registerCandidateCall, isCandidateRegistrationLoading } = useContext(AuthorityContext);
    const [file, setFile] = useState(null);
    const [candidateDetails, setCandidateDetails] = useState({
        name: "",
        nid: "",
        symbolName: "",
        email: "",
        electionID: ""
    });

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setCandidateDetails({
            ...candidateDetails,
            [name]: value
        })
    }

    const handleOnFileUpload = (e) => {
        setFile(e.target.files[0]);
    }

    const handleOnSubmit = () => {
        registerCandidateCall(candidateDetails, file);
    }

    return (
        <>
            <Grid sx={{ justifyContent: 'center', paddingTop: 8, paddingBottom: 8 }} container>
                <Grid item md={12}>
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333', paddingBottom: 10 }} variant='h5'>
                        Register Candidates
                    </Typography>
                </Grid>

                {/* Election Selection */}
                <Grid item md={6} sx={{ paddingBottom: 3 }}>
                    <StyledChildBox sx={{ backgroundColor: '#fff', padding: 3, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                        <StyledTypography>Please select one election</StyledTypography>
                        <StyledSelect
                            onChange={handleOnChange}
                            value={candidateDetails.electionID}
                            name='electionID'
                            displayEmpty
                            sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}
                        >
                            <StyledMenuItem value={""} disabled><em>Please Select one Election</em></StyledMenuItem>
                            {
                                upComingElection.map((elections, index) => {
                                    const { election, electionId } = elections;
                                    const { name } = election;
                                    return <StyledMenuItem value={electionId} key={index}>{name}</StyledMenuItem>
                                })
                            }
                        </StyledSelect>
                    </StyledChildBox>
                </Grid>

                {/* Candidate Details */}
                <Grid container spacing={3} item md={6} sx={{ paddingBottom: 3 }}>
                    <Grid item xs={12}>
                        <StyledChildBox sx={{ backgroundColor: '#fff', padding: 3, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                            <StyledTypography>Candidate's Name</StyledTypography>
                            <StyledTextField onChange={handleOnChange} name='name' placeholder='Enter candidate name' type='text' sx={{ borderRadius: 2, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)' }} />
                        </StyledChildBox>
                    </Grid>

                    <Grid item xs={12}>
                        <StyledChildBox sx={{ backgroundColor: '#fff', padding: 3, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                            <StyledTypography>Enter Candidate NID</StyledTypography>
                            <StyledTextField onChange={handleOnChange} name='nid' type='number' placeholder='NID number' sx={{ borderRadius: 2, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)' }} />
                        </StyledChildBox>
                    </Grid>

                    <Grid item xs={12}>
                        <StyledChildBox sx={{ backgroundColor: '#fff', padding: 3, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                            <StyledTypography>Choose Symbol PNG</StyledTypography>
                            <StyledTextField onChange={handleOnFileUpload} type='file' sx={{ borderRadius: 2, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)' }} />
                        </StyledChildBox>
                    </Grid>

                    <Grid item xs={12}>
                        <StyledChildBox sx={{ backgroundColor: '#fff', padding: 3, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: 2 }}>
                            <StyledTypography>Enter Symbol Name</StyledTypography>
                            <StyledTextField onChange={handleOnChange} name='symbolName' type='text' placeholder='Enter symbol name' sx={{ borderRadius: 2, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)' }} />
                        </StyledChildBox>
                    </Grid>
                </Grid>

                {/* Submit Button */}
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
    <StyledSubmitBtn onClick={handleOnSubmit} sx={{ bgcolor: '#66BB6A', color: '#fff' }}>
        Register Candidate
    </StyledSubmitBtn>
</Grid>

            </Grid>

            {/* Success notification */}
            <Slide direction="up" in={isCandidateRegistered} mountOnEnter unmountOnExit>
                <StyledSuccessBox sx={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>Successful</Typography>
                    <CancelIcon sx={{ cursor: 'pointer' }} />
                </StyledSuccessBox>
            </Slide>

            {/* Backdrop for loading state */}
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isCandidateRegistrationLoading}>
                <CircularProgress sx={{ color: "#66BB6A" }} />
            </Backdrop>
        </>
    );
}

export default CandidateRegistration;
