import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform authentication logic, like sending data to a server
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form after submission
    setName('');
    setUsername('');
    setPassword('');
  };


  return (
    <>
      <div className="container">
        <div className='row'>
        <div className='child col-md-6 shadow p-3'>
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <TextField id="filled-basic" label="Enter full name" className='form-control' variant="outlined" name="name" value={name}
            onChange={handleNameChange}/>
            <TextField id="filled-basic" label="Enter email" className='form-control mt-2' variant="outlined" name="email" value={username}
            onChange={handleUsernameChange}/>
            <TextField id="filled-basic" label="Enter password" className='form-control mt-2' variant="outlined" name="password" value={password}
            onChange={handlePasswordChange}/>
            <a href="forgot-password" className='btn d-block'>Forgot password</a>
            <div className="d-grid gap-2">
            <Button variant="contained" size="large" type="submit" className='mt-2' startIcon={<LockIcon />}>
              Signup
            </Button>
            </div>
          </form>
          <p className='text-center mt-3'>OR</p>
          <div className="d-grid gap-2">
          <Button onClick={()=>{navigate('../login')}} variant="outlined" size="large" type="submit" className='mt-2' startIcon={<LockIcon />}>
              Login
          </Button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
