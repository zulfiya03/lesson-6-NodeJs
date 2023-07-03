export interface User {
  id: number
  name: string
  surname: string
  username: string
  password: string
}

export interface Note {
  id: number
  title: string
  description: string
  userId: number
}
