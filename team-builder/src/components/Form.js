import { useState } from 'react'

const teamMembers = [
  { name: 'Elon Musk', email: 'starman@spacex.com', role: 'product design manager' },
  { name: 'George Hotz', email: 'geohot@commaai.com', role: 'cybersecurity engineer' },
  { name: 'John Carmack', email: 'jcarmack@id.com', role: 'software engineer' }
]

const initialFormValues = { name: '', email: '', role: '' }

export default function Form() {
  const [members, setMembers] = useState(teamMembers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const change = evt => {
    const { name, value } = evt.target
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = evt => {
    evt.preventDefault()

    const newMember = {
      name: formValues.name.trim(),
      role: formValues.role.trim(),
      email: formValues.email.trim()
    }

    setMembers(members.concat(newMember))

    setFormValues(initialFormValues)
  }

  return (
    <div>
      {members.map((member, index) => {
        return <div key={index}><b>Name:</b> {member.name} - <b>Role:</b> {member.role} - <b>Contact:</b> {member.email}</div>
      })}

      <h3>Want to be a part of our team? Apply below! &darr;</h3>
      <form onSubmit={submit}>

        <input
          name='name'
          type='text'
          value={formValues.name}
          onChange={change}
        ></input>

        <input
          name='role'
          type='text'
          value={formValues.role}
          onChange={change}
        ></input>

        <input
          name='email'
          type='email'
          value={formValues.email}
          onChange={change}
        ></input>

        <button>Submit</button>

      </form>

    </div>
  )
}