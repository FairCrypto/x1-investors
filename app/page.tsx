'use client'

import styles from './page.module.css'
import {
  AppBar, Button,
  Container,
  Grid,
  Paper,
  Table, TableBody, TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography
} from "@mui/material";
import {investors} from "@/app/investors";
import SocialLinks from "@/app/social-links";
import CountUp from "react-countup";
import {DoughnutChart} from "@/app/chart";

export default function Home() {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: 'transparent'}}>
        <Container maxWidth="lg">
        <Toolbar disableGutters>
          <a href="https://x1.xyz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/x1-logo.png" alt="X1 Logo" style={{ width: 40, height: 40, marginRight: 16 }} />
          </a>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
           Global Raise Dashboard
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg">
        <Grid container spacing={4} columnSpacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{  textAlign: 'left' }}>
              Total Raised: <b><CountUp
              end={investors.reduce((acc,e)=> acc += e.amount, 0)}/> USD</b>
            </Typography>
            <Typography variant="body1" sx={{  textAlign: 'left' }}>
              Countries: <b><CountUp end={investors.length} /></b>
            </Typography>
            <TableContainer component={Paper} sx={{ maxHeight: 440, mt: 4 }}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ fontWeight: 'bold' }}>
                    <TableCell>Country</TableCell>
                    <TableCell align="right">Amount Raised (USD)</TableCell>
                    {/* <TableCell align="right">Investors</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {investors.map((row) => (
                    <TableRow key={row.country}>
                      <TableCell component="th" scope="row">
                        {row.country}
                      </TableCell>
                      <TableCell align="right">{row.amount.toLocaleString()}</TableCell>
                      {/* <TableCell align="right">{row.investors}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12} md={5}>
            <DoughnutChart data={investors} />
          </Grid>
          <Grid item xs={12}>
            {/*<Button
              variant="contained"
              color="primary"
              href=""
              sx={{ borderRadius: 20, my: 2,  padding: '12px 16px', fontSize: '16px' }}>
              Join the Movement
            </Button> */}
          </Grid>
        </Grid>
      </Container>

      <footer style={{ position: 'fixed', bottom: 0, width: '100%', padding: '10px 0' }}>
        <Container maxWidth="lg" >
          <SocialLinks isLarge={true} />
        </Container>
      </footer>
    </>
  )
}
