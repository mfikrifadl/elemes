import React from 'react'
import { Container } from 'react-bootstrap'
import TrendingCards from './TrendingCards'
const Trendings = () => {
    return (
        <Container style={{ marginTop: '200px' }}>
            <h2 className="txt-title">Browser Our Trending</h2>
            <h2 className="txt-primary txt-title">Receipt</h2>
            <div className="mt-5">
                <TrendingCards />
            </div>
        </Container>
    )
}

export default Trendings
