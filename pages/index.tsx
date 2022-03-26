import { Typography, Grid, Link } from '@mui/material';
import Layout from 'components/layout';
import { useState, useEffect } from 'react';

const quotes = [
    {
        text: 'The greatest discovery of any generation is that human beings can alter their lives by altering the attitudes of their minds.',
        author: 'Albert Schweitzer',
        source: 'https://www.antarcticajournal.com/albert-schweitzer-quote-attitudes-of-the-mind/',
    },
    {
        text: 'I have no special talent. I am only passionately curious.',
        author: 'Albert Einstein',
        source: 'https://wisdomquotes.com/famous-quotes/',
    },
    {
        text: 'If you judge people, you have no time to love them.',
        author: 'Mother Teresa',
        source: 'https://wisdomquotes.com/famous-quotes/',
    },
    {
        text: 'Yeah, I have a lot of questions. Number one: how dare you?',
        author: 'Kelly Kapoor',
        source: 'https://quotecatalog.com/quotes/tv/the-office/page/2',
    },
];

export default function Home() {
    const [quote, setQuote] = useState(quotes[0]);

    useEffect(() => {
        setInterval(() => {
            console.log('time');
            setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        }, 5000);
    }, []);

    const { source, text, author } = quote;

    return (
        <>
            <Layout title="echo">
                <Grid container spacing={3} alignItems="center" sx={{ height: '100%' }}>
                    <Grid
                        container
                        padding={2}
                        item
                        xs={12}
                        // sx={(theme) => ({ border: `4px solid ${theme.palette.primary.main}` })}
                    >
                        <Typography fontSize="6rem" variant="h2" fontStyle="italic" textAlign="center">
                            {`"${text}"`}
                        </Typography>
                    </Grid>
                    <Grid container paddingRight={2} item xs={12}>
                        <Grid item xs={12}>
                            <Typography color="textSecondary" variant="h4" component="h3" textAlign="end">
                                {author}
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} justifyContent="flex-end" sx={{ cursor: 'pointer' }}>
                            <Link target="_blank" href={source} textAlign="end">
                                Source
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}
