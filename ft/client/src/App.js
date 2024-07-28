import {useRef,useState,useEffect} from 'react';
import './App.css';
import {uploadFile} from './services/api';
import IMAGES from './Images/index.js';

function App() {
  const [file, setFile] = useState('')
  const [result, setResult] = useState('')
  const fileInputRef = useRef();
  const logo ='https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  const onUploadClick = () =>{
    fileInputRef.current.click();

  }

  useEffect(()=>{
    const getImage =async ()=>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        try {
          let response = await uploadFile(data);
          console.log('Response:', response); // Log the response
          setResult(response.path); // Ensure response.path is correct
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }

    }
    getImage();

  },[file])

  const onLinkClick = () => {
    
    setTimeout(() => {
      setResult('');
    }, 5000);
  };

  console.log(file);

  return (
    <div className='container' style={{ backgroundImage: `url(${IMAGES.img5})` }}>
        
        <div className='wrapper'>
          <h1>File Connect</h1>
          <p className='tagline'>Share Smarter with File Connect</p>
          <button onClick={()=> onUploadClick()}>Upload</button>
          <input type="file" ref={fileInputRef} style={{display:'none'}} onChange={(e)=> setFile(e.target.files[0])}  />
          
          <a onClick={onLinkClick} href={result} target='_blank' rel='noopener noreferrer'>{result}</a>
        </div>
    </div>
  );
}

export default App;
