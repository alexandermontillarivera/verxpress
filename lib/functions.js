import fs from 'fs'
import path from 'path'

const root = global.appRoot = path.resolve()

export const exists = async () => {
  const file = path.join(root, 'vercel.json')
  const exists = await fs.existsSync(file)
  return exists
}

export const drop = async () => {
  await fs.unlinkSync(path.join(root, 'vercel.json'))
}

export const createFile = () => {
  fs.writeFileSync(path.join(root, 'vercel.json'), '')
}

export const write = async (object) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(root, 'vercel.json'), object, (err) => {
      if (err) {
        return reject(err)
      } else {
        return resolve()
      }
    })
  })
}
