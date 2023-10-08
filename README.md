# Decentralized Thoughts

<img src='./src/assets/logo/logo-color.png' width='550px' alt='DTlogo' >

**Decentralized Thoughts** is decentralized application for creating and storing posts.

It allows users to create a message page with a simple user interface and then compile all the components of the message page into JSON data. The JSON file will then be stored on IPFS (Interplanetary File System) which is a distributed file system using Web3.Storage.
The dApp allows you to share information in posts with the whole world using IPFS.

## Development
Developed with 
- [React.js](https://reactjs.org/)
- [MUI](https://mui.com/)
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
- [IPFS](https://docs.ipfs.tech/)
- [Web3.Storage](https://web3.storage/)

## Demo Usage
- [Demo dApp on fleek](https://decentralized-thoughts.on.fleek.co/)
- [Demo dApp on vercel](https://decentralized-thoughts.vercel.app/)
- [Video Demo](https://youtu.be/_sVQu5FBf5I)

## IPFS & Web3Storage Usage
- [Create Post Page](https://github.com/h1xten/decentralized-thoughts/blob/ae33dcb8f003da784f564b1c7103134c2afe44c3/src/pages/createpage/Createpage.jsx#L63)
  ```
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
  ```
 
- [IPFS Query](https://github.com/h1xten/decentralized-thoughts/blob/ae33dcb8f003da784f564b1c7103134c2afe44c3/src/store/ipfsApi.js#L3)
  ```
  export const ipfsApi = createApi({
    reducerPath: 'ipfsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ipfs.io/ipfs/'}),
    endpoints: (builder) => ({
        getIpfsPost: builder.query({
            query: (cid) => `${cid}/post.json`,
        })
    })
  });
  ```


## Data for the test
  Sometimes saving a post to storage can take longer than expected. Therefore, after creating a post, it is not always possible to immediately receive and display it. I included here the CIDS of the posts I created earlier to test the application:
- bafybeigplksdcjn4r3fjstyryqom3f24ertgmtlaqrohcyqob2dyip74qq
- bafybeigeuxkmos74rslxmnnt7gvzyzbfxasr4w3achmf5c2zzyrtmzz6te
- bafybeihqsz362op54uvy6enammf42vzphkrh66fqxykvrobz3eufws5ovq

## Future Updates
- Ability to save files like user avatars, media files in post content.
- Smart contract for donations for post authors if the author specified the address.
- UI Improvement.

## Contacts
- [Telegram](https://t.me/h1xten) </br>
- Discord - h1xten#3783 </br>
- Email - h1xtenc@gmail.com </br>
- [Project Repo](https://github.com/h1xten/decentralized-thoughts)

## License
[MIT](LICENSE)

#### Notice
This project is not audited and should not be used in a production environment.
