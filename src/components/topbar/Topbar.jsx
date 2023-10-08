import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Box, Typography, Button, InputAdornment, IconButton, OutlinedInput, FormControl, InputLabel} from "@mui/material";
import { AddCircleOutline, Search } from '@mui/icons-material';
import {Dna} from 'react-loader-spinner'

const Topbar = () => {
    const navigate = useNavigate()
    const [postHash, setPostHash] = useState('')

    const handleSearch = () => {
        navigate(`post/${postHash}`)
    }
    const handleEnter = (event) => {
        if(event.key === 'Enter'){
            handleSearch()
        }
    }
  return (
    <Box display="flex" justifyContent="space-between" p={3}>
      {/* Logo */}
      <Box
        className='logo-box'
        display="flex"
        alignItems='center'
        onClick={()=>navigate('/')}
      >
        <Typography
            mr='10px'
            variant='p'
            sx={{textTransform: 'uppercase', letterSpacing: '2px', fontSize: '16px', fontWeight: '600', userSelect: 'none'}}
        >
            BLOCKSHARE 
        </Typography>
        <Dna
            visible={true}
            height="40"
            width="40"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
      </Box>

      {/* Buttons */}
      <Box display="flex">
        <Button sx={{marginRight: '50px'}} variant='outlined' size='small' endIcon={<AddCircleOutline />} onClick={()=>navigate('create')}>
            Create post
        </Button>
        <FormControl sx={{width: '300px'}} size='small'>
            <InputLabel htmlFor='standard-adornment-post'>Search Post</InputLabel>
            <OutlinedInput
                id="standard-adornment-post"
                type='text'
                label='Search Post'
                value={postHash}
                onKeyDown={handleEnter}
                onChange={(e) => setPostHash(e.target.value)}
                startAdornment={<InputAdornment position="start">CID:</InputAdornment>}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="search"
                            onClick={()=>handleSearch()}
                            edge="end"
                        >
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
      </Box>
    </Box>
  )
}

export default Topbar