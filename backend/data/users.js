import bcrypt from 'bcryptjs'
const users = [
    {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
        startDate: 01/01/2020
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
        startDate: 01/01/2020
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
        startDate: 01/01/2020
    }
]

export default users