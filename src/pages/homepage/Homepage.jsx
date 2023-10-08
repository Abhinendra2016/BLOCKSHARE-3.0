import React from 'react';
import { Box, Typography } from '@mui/material';

const Homepage = () => {
  return (
    <Box className='bordered' display='flex' flexDirection='column' p={10} alignItems="center">
      <Box maxWidth="800px" textAlign="center">
        <Typography variant='h4' sx={{ letterSpacing: '2px', textTransform: 'uppercase', color: '#007BFF', marginBottom: '20px' }}>
          Welcome to BlockShare
        </Typography>
        <Typography variant='p' fontSize='18px' paragraph={true} style={{ color: '#333333', marginBottom: '20px' }}>
          Share your thoughts, ideas, and more with BlockShare, the decentralized platform for creative expression.
          <br />
          Create a post and save or remember your unique CID for easy sharing.
        </Typography>
        <Typography variant='p' fontSize='18px' paragraph={true} style={{ color: '#333333', marginBottom: '20px' }}>
          Start writing your posts using Markdown, and check out these{' '}
          <a href="https://www.markdownguide.org/basic-syntax/" target='_blank' rel='noreferrer' style={{ color: '#007BFF' }}>
            Markdown syntax tips
          </a>{' '}
          to get familiar with it.
        </Typography>
        <Typography variant='p' fontSize='18px' paragraph={true} style={{ color: '#333333' }}>
          All your posts are securely stored in Web3.storage IPFS clusters. Make sure to have your own cluster at{' '}
          <a href="https://web3.storage/" target='_blank' rel='noreferrer' style={{ color: '#007BFF' }}>
            Web3.storage
          </a>{' '}
          for full control.
        </Typography>
      </Box>
    </Box>
  );
};

export default Homepage;
