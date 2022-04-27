#!/usr/bin/env node
import { createFile, drop, exists, write } from './lib/functions.js'
import inquirer from 'inquirer'
import 'colors'


inquirer.prompt([
  {
    type: 'input',
    name: 'index',
    message: 'Enter the main file name (index.js):',
    default: 'index.js'
  }
])
  .then(async answers => {
    const vercel = {
      version: 2,
      builds: [
        {
          src: answers.index,
          use: "@vercel/node"
        }
      ],
      routes: [
        {
          src: "/(.*)",
          dest: "/"
        }
      ]
    }
    exists().then(async (file) => {
      if (file === true) {
        await drop().then(async () => {
          await createFile()
          await write(JSON.stringify(vercel)).then(() => {
            console.log('[VERXPRESS]: vercel.json file created'.green)
          })
        })
      } else {
        await createFile()
        await write(JSON.stringify(vercel)).then(() => {
          console.log('[Verxpress]: vercel.json file created'.green)
        })
      }
    })
  })

