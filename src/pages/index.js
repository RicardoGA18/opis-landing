import React from 'react'
import Head from 'next/head'
import MainLayout from '../layout/MainLayout'
import Header from '../components/Header'
import SectionDemo from '../components/SectionDemo'
import SectionFeatures from '../components/SectionFeatures'
import SectionCommunity from '../components/SectionCommunity'
import SectionFAQS from '../components/SectionFAQS'

const Home = () => {
  return (
    <>
      <Head>
        <title>OPIS</title>
      </Head>
      <MainLayout>
        <Header />
        <SectionDemo />
        <SectionFeatures />
        <SectionCommunity />
        <SectionFAQS />
      </MainLayout>
    </>
  )
}

export default Home