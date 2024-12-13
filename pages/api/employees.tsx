import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  const employees = req.body

  // Check if the body is a valid JSON array
  if (!Array.isArray(employees)) {
    return res.status(400).json({ error: 'Invalid input: Expected an array of employee objects' })
  }

  // Validate each employee object
  for (let index = 0; index < employees.length; index++) {
    const employee = employees[index]

    if (typeof employee !== 'object' || employee === null) {
      return res.status(400).json({ error: `Invalid input at index ${index}: Expected an object` })
    }

    const { 'Employee Xref Code': xrefCode, 'Termination Date': terminationDate } = employee

    if (typeof xrefCode !== 'string' || xrefCode.trim() === '') {
      return res.status(400).json({
        error: `Invalid "Employee Xref Code" at index ${index}: Expected a non-empty string`,
      })
    }

    if (typeof terminationDate !== 'string' || terminationDate.trim() === '') {
      return res.status(400).json({
        error: `Invalid "Termination Date" at index ${index}: Expected a non-empty string`,
      })
    }
  }

  if (employees.length == 0) {
    return res.status(400).json({ message: 'No employee data' })
  }

  // If all validations pass
  return res.status(200).json({ message: 'Valid employee data', employees })
}

export default handler
