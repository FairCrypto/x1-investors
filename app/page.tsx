'use client'

import styles from './page.module.css'
import {
  AppBar, Box, Button,
  Container,
  Grid, LinearProgress,
  Paper, Stack,
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
import Link from "next/link";
import {useContext} from "react";
import {ThemeContext} from "@/app/theme";

function getFlagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
}

export default function Home() {
  const { isLarge } = useContext(ThemeContext);
  const goal = 3_000_000; // $3M
  return (
    <>
      <AppBar position="relative" elevation={0} sx={{ bgcolor: 'transparent'}}>
        <Container maxWidth="lg">
        <Toolbar disableGutters>
          <a href="https://x1.xyz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/x1-logo.png" alt="X1 Logo" style={{ width: 40, height: 40, marginRight: 16 }} />
          </a>
          {isLarge && <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
           Global Raise Dashboard &bull; Round 2 &bull; $300M Valuation
          </Typography>}
          {!isLarge && <Stack direction="column" sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Global Raise Dashboard</Typography>
            <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
            Round 2 &bull; $300M Valuation
            </Typography>
          </Stack>}
        </Toolbar>
        </Container>
      </AppBar>

      <main>
      <Container maxWidth="lg">
        <Grid container spacing={4} columnSpacing={4} sx={{ marginTop: 0 }}>
          <Grid item xs={12} >

            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" >
              {/* Progress bar */}
              <Box sx={{ flexGrow: 1 }}>
              <LinearProgress
                color="primary"
                variant="determinate"
                value={investors.reduce((acc: any, e: any)=> acc += e.amount, 0) / goal * 100}
                sx={{ height: 12, borderRadius: 0 ,
                backgroundColor: 'gray', // unfinished part
                '& .MuiLinearProgress-bar': {
                  // backgroundColor: '#1976d2', // finished part
                },
              }} />
              </Box>
              {/* Labels */}
              <Box>
                <Typography
                  variant="caption"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  $3M
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="body1" sx={{  textAlign: 'left' }}>
              Total Raised: <b><CountUp
              end={investors.reduce((acc: any, e: any)=> acc += e.amount, 0)}/> USD</b>
            </Typography>
            <Typography variant="body1" sx={{  textAlign: 'left' }}>
              Territories: <b><CountUp end={investors.length} /></b>
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 4 }}>
              <Table size="small" sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ fontWeight: 'bold' }}>
                    <TableCell>Territories</TableCell>
                    <TableCell align="right">Amount Raised (USD)</TableCell>
                    {/* <TableCell align="right">Investors</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {investors.map((row: any) => (
                    <TableRow key={row.country}>
                      <TableCell component="th" scope="row">
                        <span style={{ fontSize: 'larger' }}>
                          {getFlagEmoji(row.countryCode)}&nbsp;&nbsp;
                        </span>
                        {row.country}
                      </TableCell>
                      <TableCell align="right"><CountUp end={row.amount} /></TableCell>
                      {/* <TableCell align="right">{row.investors}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={1} />
          <Grid item xs={12} md={5} >
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
      </main>

      <footer style={{ width: '100%', padding: '10px 0' }}>
        <Container maxWidth="lg" >
          <Stack direction={isLarge ? "row" : "column"} spacing={2} justifyContent="left" alignItems="center">
            <SocialLinks isLarge={true} />
            <Box sx={{ flexGrow: 1 }} />
            <Link href="https://x.com/mrjacklevin/status/1928553314322624728?s=46&t=whSF50k0mpmYgY42864ABw" target="_blank" rel="noopener noreferrer" style={{ }}>
              <Typography variant="body2" color="textSecondary" align="center" sx={{
                mt: 0,
                transition: 'color 0.2s',
                '&:hover': {
                  color: 'text.primary', // Use the theme's main text color on hover
                },
              }}>
                Announcement
              </Typography>
            </Link>
            <Link href="https://t.me/+A20VVr-FtFo3MGEz" target="_blank" rel="noopener noreferrer" style={{ }}>
              <Typography variant="body2" color="textSecondary" align="center" sx={{
                mt: 0,
                transition: 'color 0.2s',
                '&:hover': {
                  color: 'text.primary', // Use the theme's main text color on hover
                },
              }}>
                TG Group
              </Typography>
            </Link>
            <Link href="/X1_deck(EN).pdf" target="_blank" rel="noopener noreferrer" style={{ }}>
              <Typography variant="body2" color="textSecondary" align="center" sx={{
                mt: 0,
                transition: 'color 0.2s',
                '&:hover': {
                  color: 'text.primary', // Use the theme's main text color on hover
                },
              }}>
                X1 Deck (EN)
              </Typography>
            </Link>
            <Link href="/X1_deck(PL).pdf" target="_blank" rel="noopener noreferrer">
              <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                sx={{
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: 'text.primary', // Use the theme's main text color on hover
                  },
                }}>
                X1 Deck (PL)
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Link
              href="https://www.sec.gov/resources-small-businesses/exempt-offerings/general-solicitation-rule-506c"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Typography variant="body2" color="textSecondary" align="center" sx={{
              transition: 'color 0.2s',
              '&:hover': {
                color: 'text.primary', // Use the theme's main text color on hover
              },
            }}>
                Reg D. 506(c)
            </Typography>
            </Link>
          </Stack>
        </Container>
      </footer>
    </>
  )
}
