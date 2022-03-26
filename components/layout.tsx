import { Box, Container, Grid, Typography } from '@mui/material';
import { ReactElement } from 'react';
import Head from 'next/head';

interface LayoutProps {
    children: ReactElement[] | ReactElement | string;
    title: string;
}

const Layout = ({ children, title }: LayoutProps): ReactElement => {
    return (
        <Box sx={{ height: `calc(100vh)` }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Container maxWidth="xl" sx={{ p: 2, height: '100%' }}>
                <Grid container alignItems="flex-start" sx={{ height: '100%' }}>
                    <Grid item xs={12}>
                        <header>
                            <Typography variant="h5" component="h1">
                                {title}
                            </Typography>
                        </header>
                    </Grid>
                    <Grid container item xs={12}>
                        <main>{children}</main>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Layout;
