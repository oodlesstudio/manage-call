import React from 'react'
// Components
import Header from "../components/common/Header";
import UnmatchedReport from '../components/unmatchedReport/UnmatchedReport';
import Footer from "../components/common/Footer";

const UnmatchedTxnsReport = () => {
  return (
    <div>
      <Header />
      <UnmatchedReport />
      <Footer />
    </div>
  )
}

export default UnmatchedTxnsReport