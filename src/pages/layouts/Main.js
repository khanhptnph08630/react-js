import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'

export default ({ children }) => {
    return (
        <div>
            <Header />
                <div id="content">
                    {children}
                </div>
            <Footer />
        </div>
    )
}
