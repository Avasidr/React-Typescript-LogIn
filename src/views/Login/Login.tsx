import React from 'react';

import {
  Button,
  Switch,
  Typography,
  CircularProgress,
  TextField,
  InputLabel
} from '@mui/material';

import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { login } from 'redux/slices/auth';
import { setThemeMode } from 'redux/slices/settings';

import {
  AppBarStyled,
  AppBarContainerStyled,
  AppBodyContainerStyled,
  AppCardStyled
} from './LoginStyles';

const Login: React.FC = () => {
  const {
    auth: { accessToken, isLoading },
    settings: { themeMode }
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(accessToken);

  const handleLogin = (): void => {
    dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    );
  };

  const handleChangeTheme = (): void => {
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <AppBarStyled>
        <AppBarContainerStyled>
          <Typography variant="h6">Prueba Tecnica</Typography>
          <Switch onChange={handleChangeTheme} />
        </AppBarContainerStyled>
      </AppBarStyled>
      <AppBodyContainerStyled>
        <AppCardStyled>
          <Typography variant="h6">LOGIN</Typography>
          <InputLabel>Email</InputLabel>
          <TextField />
          <InputLabel>Password</InputLabel>
          <TextField variant="outlined" />
          <Button variant="contained" onClick={handleLogin}>
            Incio de Sesión
          </Button>
          {isLoading && <CircularProgress />}
        </AppCardStyled>
      </AppBodyContainerStyled>
    </div>
  );
};

export default Login;
