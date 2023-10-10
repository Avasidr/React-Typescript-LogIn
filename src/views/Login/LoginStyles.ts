import {
  experimentalStyled as styled,
  AppBar,
  Container,
  Card
} from '@mui/material';

const AppHeightBar = 64;

export const AppBarStyled = styled(AppBar)({
  height: AppHeightBar
});

export const AppBarContainerStyled = styled(Container)({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const AppBodyContainerStyled = styled(Container)({
  paddingTop: 24 + AppHeightBar
});

export const AppCardStyled = styled(Card)(({ theme }) => ({
  padding: theme.spacing(10),
  maxWidth: 400,
  margin: theme.spacing(20, 'auto', 6)
}));
