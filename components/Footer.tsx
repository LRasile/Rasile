import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'
import { Heading } from '@chakra-ui/layout'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'

export default function Footer() {
  return <footer className={styles.footer}>Built in ♥️</footer>
}
