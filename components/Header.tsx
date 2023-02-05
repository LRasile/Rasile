import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Center, Heading, Spacer } from '@chakra-ui/layout'
import { MoonIcon, StarIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import { Flex, useColorModeValue } from '@chakra-ui/react'
import BuyMeACoffee from './BuyMeACoffee'
import { useRouter } from 'next/router'
import ScrollToTopButton from './ScrollToTopButton'

const Header = (props) => {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const headingColor = useColorModeValue('#037', '#adf')
  const filterColor = useColorModeValue('invert(0%)', 'invert(100%)')

  return (
    <>
      <Head>
        <title>Leos Apps</title>
        <meta name="description" content="Leos Apps" />
        <link rel="icon" href="/logos/favicon.ico" />
      </Head>
      <Flex width="100%">
        <Box padding={4}>
          <Heading
            style={{ color: headingColor, cursor: 'pointer' }}
            onClick={() => router.push('/')}
          >
            <img
              className="Logo"
              src="/logos/logo.svg"
              alt="Home"
              style={{
                filter: colorMode === 'light' ? 'invert(0%)' : 'invert(100%)',
              }}
            />

            {/* 
            <img
              className="Logo"
              src="/logos/android-chrome-192x192.png"
              title="Home"
            /> */}
          </Heading>
        </Box>
        <Spacer />
        <Box padding={4}>
          <IconButton
            aria-label="Apps"
            onClick={() => router.push('/Apps')}
            title="Apps"
          >
            <StarIcon />
          </IconButton>{' '}
          <IconButton
            aria-label="Toggle Mode"
            onClick={toggleColorMode}
            title="Toggle Mode"
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </IconButton>
          <BuyMeACoffee />
          <ScrollToTopButton />
        </Box>
      </Flex>
    </>
  )
}

export default Header
