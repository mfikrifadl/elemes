import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryCards from './CategoryCards'

const Categories = () => {
    return (
        <Container className="mt-5">
            <h2 className="txt-title">Browser Our Category</h2>
            <h2 className="txt-primary txt-title">Receipt</h2>
            <div className="mt-5">
                <CategoryCards />
            </div>
        </Container>
    )
}

export default Categories
