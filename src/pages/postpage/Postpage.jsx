import { Box, Alert, Typography, Grid, Chip} from '@mui/material'
import React from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview'
import { NavLink, useParams } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import { useGetIpfsPostQuery } from '../../store/ipfsApi'
import NoAvatar from '../../assets/avatar.png'

const Postpage = () => {
    const {postCID} = useParams()
    
    const {data: post, isLoading, isError, error} = useGetIpfsPostQuery(postCID)

    if(isLoading) return <Loader />
    if(isError && error) {
        return (
        <Box p={5}>
            <Alert 
                severity='error'
                sx={{
                    fontSize: '22px', 
                    justifyContent: 'center',
                    border: '1px solid darkred',
                    borderRadius: '20px'
                }}>
                <strong>Error!  </strong>
                Invalid post CID.
            </Alert>
        </Box>
    )}

  return (
    <Box p={5} className='bordered'>
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography variant='h4'>
                    {post.post_title}
                </Typography>
                <Typography 
                    sx={{fontSize: '14px', letterSpacing: '1px'}} 
                    variant='p'>
                        {new Date(post.data_created).toLocaleString()}
                </Typography>
                <MarkdownPreview 
                    style={{marginTop: '20px', marginRight: '20px', fontSize: '18px', backgroundColor: 'inherit'}} 
                    source={post.post_body} 
                    warpperElement={{"data-color-mode": "light"}} 
                />
            </Grid>
            {/* Profile */}
            <Grid display='flex' flexDirection='column' item xs={3} sx={{borderLeft: '1px solid grey'}}>
                <Box 
                    display='flex' 
                    flexDirection='column' 
                    justifyContent='center' 
                    alignItems='center'
                    mt={2}
                    mb={2}
                >
                    <img src={NoAvatar} width='80px' alt="avatar" />
                    <Typography variant='h6'>
                        {post.profile_nickname}
                    </Typography>
                    <Typography variant='p' sx={{fontSize: '15px'}}>
                        {post.profile_description}
                    </Typography>
                </Box>
                <Chip label='Recommendations' />
                <Box 
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center' 
                    pt={2} 
                    sx={{letterSpacing: '1px'}}
                >
                    {post.recommendations ?
                        post.recommendations.map((elem) => 
                            <NavLink className='rec_link' key={elem} to={`/post/${elem}`}>
                                {elem.slice(0, -45)+'...'}
                            </NavLink>)
                        :
                        <p>Recommendation list is empty</p>
                    }
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Postpage