import React, {useState} from 'react'
import { Web3Storage } from 'web3.storage';
import {
    Box, 
    Button, 
    TextField, 
    Typography, 
    Stepper, 
    Step, 
    StepLabel, 
    StepContent, 
    Alert, 
    AlertTitle, 
    IconButton, 
    Snackbar,
    List,
    ListItem
} from '@mui/material';
import Loader from '../../components/loader/Loader';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ContentCopyOutlined, AddCircleOutlineOutlined, ClearOutlined } from '@mui/icons-material';
import MDEditor from '@uiw/react-md-editor'

const Createpage = () => {

    const [activeStep, setActiveStep] = useState(0)

    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')

    const [profileNickname, setProfileNickname] = useState('')
    const [profileDescription, setProfileDescription] = useState('')
    const [recommendation, setRecommendation]=useState('')
    const [recs, setRecs] = useState([])

    const [storageApiKey, setStorageApiKey] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const [CID, setCID] = useState(null)
    const [copiedCID, setCopiedCID] = useState(false)

    const handlePushRec = () => {
        if(recs.length < 5){
            recs.push(recommendation)
            setRecommendation('')
        }
    }

    const handleDelRec = (index) => {
        let newRecs = recs.filter((elem) => {return recs[index] !== elem})
        setRecs(newRecs)
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const storageHandler = async () => {
        setIsLoading(true)
        const storage = new Web3Storage({token: storageApiKey})
        const data = {
            post_title: postTitle,
            post_body: postBody,
            profile_nickname: profileNickname,
            profile_description: profileDescription,
            recommendations: recs,
            data_created: new Date().getTime(),
        }
        const blob = new Blob([JSON.stringify(data)], {type: 'application/json'})
        const dataFile = [new File([blob], 'post.json')]
        const cid = await storage.put(dataFile, {name: postTitle})
        setCID(cid)
        setIsLoading(false)
    }

    if(isLoading) return <Loader />

    if(CID !== null && !isLoading) {
        return(
            <Box p={5}>
                <Box>
                    <Alert 
                        severity='success'
                        sx={{
                            fontSize: '22px', 
                            display: 'flex', 
                            justifyContent: 'center',
                            border: '1px solid green',
                            borderRadius: '20px'
                        }}>
                        <AlertTitle><strong>Congratulations!</strong></AlertTitle>
                        The post has been created. Save or remember the post CID for sharing. <br />
                        <strong>CID: {CID}</strong>
                        <CopyToClipboard text={CID} onCopy={()=>setCopiedCID(true)}>
                            <IconButton>
                                <ContentCopyOutlined />
                            </IconButton>
                        </CopyToClipboard>
                    </Alert>
                </Box>
                <Snackbar
                    open={copiedCID}
                    autoHideDuration={6000}
                    onClose={()=>setCopiedCID(false)}
                >
                    <Alert onClose={()=>setCopiedCID(false)} severity="success" sx={{ width: '100%' }}>
                        CID Copied!
                    </Alert>
                </Snackbar>
            </Box>
        )
    }

    // Stepper form for create
  return (
    <Box p={5} className='bordered'>
        <Box>
            <Box mt={3} display='flex' justifyContent='center' alignItems='center'>
                <Typography 
                    variant='p'
                    sx={{textTransform: 'uppercase', letterSpacing: '2px', fontSize: '16px', fontWeight: '600', userSelect: 'none'}}
                >
                    Create Post
                </Typography>
            </Box>
            <Stepper activeStep={activeStep} orientation='vertical'>
                {/* Step 1 */}
                <Step>
                    <StepLabel>
                        Post
                    </StepLabel>
                    <StepContent>
                        <TextField 
                            id="outlined-basic" 
                            label="Title" 
                            required 
                            variant="outlined" 
                            margin='normal'
                            fullWidth
                            value={postTitle}
                            onChange={e => setPostTitle(e.target.value)}
                        />
                        <div data-color-mode="light">
                            <MDEditor value={postBody} onChange={setPostBody} />
                        </div>
                        <Box sx={{ mb: 2 }}>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                disabled={postTitle === '' || postBody === ''}
                                sx={{ mt: 1, mr: 1 }}
                                size='small'
                            >
                                Continue
                            </Button>
                        </Box>
                    </StepContent>
                </Step>
                {/* Step 2 */}
                <Step>
                    <StepLabel>
                        Profile Settings
                    </StepLabel>
                    <StepContent>
                        <TextField 
                            id="outlined-basic" 
                            label="Nickname"
                            required 
                            variant="outlined" 
                            margin='normal'
                            fullWidth
                            value={profileNickname}
                            onChange={e => setProfileNickname(e.target.value)}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Profile Description"
                            multiline
                            fullWidth
                            rows={2}
                            margin='normal'
                            value={profileDescription}
                            onChange={e => setProfileDescription(e.target.value)}
                        />
                        <Box display='flex'>
                            <TextField 
                                id="outlined-basic" 
                                label="Recommendation"
                                variant="outlined" 
                                margin='normal'
                                fullWidth
                                value={recommendation}
                                onChange={e => setRecommendation(e.target.value)}
                            />
                            <IconButton onClick={handlePushRec}>
                                <AddCircleOutlineOutlined />
                            </IconButton>
                        </Box>
                        
                        <List sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '15px 0px'}}>
                            {recs.length >= 1 ? recs.map((elem, index) => 
                                    <ListItem key={index}>
                                        {elem}
                                        <IconButton onClick={()=>handleDelRec(index)}>
                                            <ClearOutlined />
                                        </IconButton>
                                    </ListItem>
                                )
                                :
                                <Typography variant='p'>Recommendation list is empty!</Typography>
                            }
                        </List>

                        <Box sx={{ mb: 2 }}>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                disabled={profileNickname === ''}
                                sx={{ mt: 1, mr: 1 }}
                                size='small'
                            >
                                Continue
                            </Button>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                                size='small'
                            >
                                Back
                            </Button>
                        </Box>
                    </StepContent>
                </Step>
                {/* Step 3 */}
                <Step>
                    <StepLabel>
                        Decentralized Storage
                    </StepLabel>
                    <StepContent>
                        <TextField 
                            id="outlined-basic" 
                            label="Web3.storage API Key"
                            required 
                            variant="outlined" 
                            margin='normal'
                            fullWidth 
                            value={storageApiKey}
                            onChange={e => setStorageApiKey(e.target.value)}
                        />
                        <Box sx={{ mb: 2 }}>
                            <Button
                                variant="contained"
                                onClick={()=>storageHandler()}
                                disabled={storageApiKey === ''}
                                sx={{ mt: 1, mr: 1 }}
                                size='small'
                            >
                                Create Post
                            </Button>
                            <Button
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                                size='small'
                            >
                                Back
                            </Button>
                        </Box>
                    </StepContent>
                </Step>
            </Stepper>
            <Typography variant='p' sx={{fontSize: '14px', color: 'darkred'}}>* required fields</Typography>
        </Box>
    </Box>
  )
}

export default Createpage