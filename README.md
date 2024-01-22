# BLOCKSHARE

<img src='https://story.madfish.solutions/wp-content/uploads/2022/08/Decenrtalized-filesharing-structure-1024x576.png' width='550px' alt='BLOCKSHARElogo' >

**BLOCKSHARE** is decentralized application for creating and storing posts.

It allows users to create a message page with a simple user interface and then compile all the components of the message page into JSON data. The JSON file will then be stored on IPFS (Interplanetary File System) which is a distributed file system using Web3.Storage.
The dApp allows you to share information in posts with the whole world using IPFS.

## Development
Developed with 
- [React.js](https://reactjs.org/)
- [MUI](https://mui.com/)
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)
- [IPFS](https://docs.ipfs.tech/)
- [Web3.Storage](https://web3.storage/)


## IPFS & Web3Storage Usage

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

 
- [IPFS Query]

  export const ipfsApi = createApi({
    reducerPath: 'ipfsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ipfs.io/ipfs/'}),
    endpoints: (builder) => ({
        getIpfsPost: builder.query({
            query: (cid) => `${cid}/post.json`,
        })
    })
  });
Decentralization with Web3.Storage and IPFS
The third and final phase involved transforming the project into a decentralized file-sharing system:
**Built with Passion, Powered by Technology:**
- React.js: Crafted a fluid and user-friendly interface.
- MUI (Material-UI): Added a touch of elegance with beautiful UI components.
- Redux Toolkit Query: Ensured seamless data fetching and management.
- IPFS (InterPlanetary File System): Decentralized storage for a tamper-proof future.
- Web3.Storage: Blockchain-powered security for your valuable files.

By leveraging Web3.Storage, we achieved a decentralized architecture that enhances security and reliability in file storage.

**Repository Link:** [https://github.com/Abhinendra2016/BLOCKSHARE-3.0](https://github.com/Abhinendra2016/BLOCKSHARE-3.0)

# Contributors

We want to express our gratitude to the following individuals who have contributed to the success of Bloch Share in various ways:

# Project Contributors

We extend our sincere appreciation to the following individuals who have contributed significantly to the development and success of Bloch Share:

- **Abhinendra Pratap SINGH**
  - Full-stack developer: Led the implementation of both front-end and back-end components, and managed the deployment phase.

- **Subhag Prabhune**
  - UI/UX Designer: Brought creativity and expertise to enhance the user interface and experience.

- **Krupansh Desai**
  - Web3Storage Researcher: Conducted in-depth research and contributed insights for the integration of Web3Storage.

Thank you to each of these contributors for their valuable and dedicated efforts in making Bloch Share a success!
 

Thank you to all our contributors for their involvement and support!

## How to Use
Follow these steps to set up and run the Bloch Share project on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Abhinendra2016/BLOCKSHARE-3.0

   ## How to Use

2. **Install Dependencies:**
    ```bash
    cd BlockShare
    npm install
    ```

3. **Run the Application:**
    ```bash
    npm start
    ```

    The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Contributing

We welcome contributions! To contribute to Bloch Share, follow these steps:

1. **Fork the repository.**
2. **Create a new branch for your feature or bug fix.**
3. **Make your changes and submit a pull request.**




